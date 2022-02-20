const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('In sessions router GET');
  const queryText = `
    SELECT * FROM "sessions"
    WHERE "user_id" = $1;
    `;
  const queryParams = [req.user.id];
  pool.query(queryText, queryParams)
  .then((result) => {
    // console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Cannot retrieve sessions from db.', err);
    res.sendStatus(500);
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('In sessions router POST');
  const queryText = `
    INSERT INTO "sessions"
      ("title", "user_id")
    VALUES 
      ($1, $2);
    `;
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

router.post('/addsession', rejectUnauthenticated, (req, res) => {
  const queryText = `
    INSERT INTO "link_sessions"
      ("link_id", "session_id")
    VALUES
      ($1, $2);
      `;
  // update with user.id, look for join
  const queryParams = [req.body.link_id, req.body.session_id];
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log('Session POST successful!');
    res.sendStatus(201);
  })
  .catch((err => {
    console.error(`POST session failed!`, err);
    res.sendStatus(500);
  }));
})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
    DELETE FROM "sessions"
    WHERE "id" = $1;
    `;
  pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in DELETE session', err);
    res.sendStatus(500);
  });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('req.body.id:', req.body.id);
  // const queryText = `
  //   UPDATE "links"
  //     SET "session_id" = 1$
  //   WHERE "id" = $2
  //     AND "user_id" = $3;
  //   `;
  const queryParams = [req.body.value, req.body.id, req.user.id];
  
  pool.query(queryText, queryParams)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error in PUT session', err);
    res.sendStatus(500);
  })
})


module.exports = router;


