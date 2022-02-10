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
    console.log('Bookmark POST successful!', result.rows);
    res.sendStatus(201);
  })
  .catch((err => {
    console.error(`POST bookmark failed!`, err);
    res.sendStatus(500);
  }));
});

module.exports = router;

