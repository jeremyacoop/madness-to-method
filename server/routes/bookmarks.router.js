const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('In bookmarks router GET');
  const queryText = `
    SELECT * FROM "links"  
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

router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('In bookmark router GET', req.params.id);
  const queryText = `
    SELECT * FROM "links"  
    WHERE "id" = $1 
      AND "user_id" = $2;
    `;
  const queryParams = [req.params.id, req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    // console.log(result.rows[0].id);
    res.send(result.rows[0]);
  })
  .catch((err) => {
    console.log('Cannot retrieve bookmark from db.', err);
    res.sendStatus(500);
  })
});



router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('In bookmarks router POST');
  const queryText = `
    INSERT INTO "links"
      ("title", 
        "link", 
        "priority",
        "notes", 
        "user_id")
    VALUES 
      ($1, $2, $3, $4, $5)
    `;
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
  const queryText = `
    DELETE FROM "links"
    WHERE "id" = $1
      AND "user_id" = $2
    `;
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
  console.log('PUT: req.body.id:', req.body.title);
  // console.log('req.body:', req.body);
  console.log('req.params:', req.params.id);
  const queryText = `
    UPDATE "links"
      SET "title" = $1,
          "priority" = $2,
          "link" = $3,
          "notes" = $4
    WHERE "id" = $5
      AND "user_id" = $6;
    `;
  const queryParams = [
    req.body.title, 
    req.body.priority, 
    req.body.link, 
    req.body.notes, 
    req.body.id, 
    req.user.id
  ];
  
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

