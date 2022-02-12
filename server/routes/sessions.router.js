const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
  // GET route code here
  console.log('In sessions router GET');
  const queryText = `SELECT * FROM "sessions";`;
  pool.query(queryText)
  .then((result) => {
    // console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Cannot retrieve sessions from db.', err);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('In sessions router POST');
  const queryText = `INSERT INTO "sessions"
                        ("title", "user_id")
                      VALUES 
                        ($1, $2)`;
  const queryParams = [req.body.title, req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log('Session POST successful!');
    res.sendStatus(201);
  })
  .catch((err => {
    console.error(`POST session failed!`, err);
    res.sendStatus(500);
  }));

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "sessions"
                      WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in DELETE session', err);
    res.sendStatus(500);
  });
});

module.exports = router;


