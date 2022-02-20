const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('In tags router GET');
  const queryText = `SELECT * FROM "tags";`;
  pool.query(queryText)
  .then((result) => {
    // console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Cannot retrieve tags from db.', err);
    res.sendStatus(500);
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('In tags router POST');
  const queryText = `INSERT INTO "tags"
                        ("tagCategory", "user_id")
                      VALUES 
                        ($1, $2)`;
  const queryParams = [req.body.tagCategory, req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log('Tag POST successful!');
    res.sendStatus(201);
  })
  .catch((err => {
    console.error(`POST tag failed!`, err);
    res.sendStatus(500);
  }));

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "tags"
                      WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in DELETE tag', err);
    res.sendStatus(500);
  });
});

module.exports = router;



