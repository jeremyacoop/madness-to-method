const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('In bookmarks router GET');
  const queryText = `SELECT * FROM "links"  
                        WHERE "user_id" = $1
                        ORDER BY "id" ASC;`;
  const queryParams = [req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    // console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Cannot retrieve bookmarks from db.', err);
    res.sendStatus(500);
  })
});

// GET id for bookmark table view
// router.get('/:id', rejectUnauthenticated, (req, res) => {
//   console.log('In bookmarks router GET ')
// })

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('In bookmarks router POST');
  const queryText = `INSERT INTO "links"
                        ("title", "link", "priority","notes", "user_id")
                      VALUES 
                        ($1, $2, $3, $4, $5)`;
  const queryParams = [req.body.title, req.body.link, req.body.priority, req.body.notes, req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log('Bookmark POST successful!');
    res.sendStatus(201);
  })
  .catch((err => {
    console.error(`POST bookmark failed!`, err);
    res.sendStatus(500);
  }));
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "links"
                      WHERE "id" = $1
                      AND "user_id" = $2`;
  pool.query(queryText, [req.params.id, req.user.id])
  .then((dbRes) => {
    console.log('DELETE success', dbRes);
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in DELETE bookmark', err);
    res.sendStatus(500);
  });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('req.body.id:', req.body.id);
  console.log('req.body.value:', req.body.column);
  console.log('req.body:', req.body.value);
  const queryText = `UPDATE "links"
                        SET $1 = $2
                        WHERE "id" = $3
                        AND "user_id" = $4;`;
  const queryParams = [req.body.value, req.body.id, req.user.id];
  //    TEST PSEUDOCODE:
  // for(i=0; queryParams.length; i++) {
  //    let valueToCheck = <<<newQueryText>>>
  //    if(queryParams[0] != valueToCheck) {
  //        <<<pool.query>>>
  //    }
  // }
  
  // const queryText = `UPDATE "links"
  //                       SET "importantMark" = $1
  //                       WHERE "id" = $2 AND "user_id" = $3;
  //                       `; // work in progress
  // const queryParams = [req.body.checked, req.params.id, req.user.id]; 
  pool.query(queryText, queryParams)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in PUT bookmark', err);
    res.sendStatus(500);
  })
})

module.exports = router;

