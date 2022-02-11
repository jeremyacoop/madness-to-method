const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('In bookmarks router GET');
  const queryText = `SELECT * FROM "links";`;
  pool.query(queryText)
  .then((result) => {
    // console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Cannot retrieve bookmarks from db.', err);
    res.sendStatus(500);
  })
});

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
                      WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in DELETE bookmark', err);
    res.sendStatus(500);
  });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('req.params:', req.params);
  const queryText = `ALTER TABLE "links"
                        SET "importantMark = $1"
                        WHERE "id = $2" AND "user_id = $3";
                        ` // tentative pseudocode
  // const queryParams = [req.params.payload, req.params.id, req.user.id]; // tentative pseudocode
  // pool.query(queryText, queryParams)
  // .then(() => {
  //   res.sendStatus(200);
  // })
  // .catch((err) => {
  //   console.log('Error in PUT bookmark', err);
  //   res.sendStatus(500);
  // })
})

module.exports = router;

