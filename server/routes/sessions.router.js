const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // GET route code here
  console.log('In sessions router GET');
  const queryText = `SELECT * FROM "sessions";`;
  pool.query(queryText)
  .then((result) => {
    console.log(result);
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;


