var express = require('express');
var router = express.Router();
var pool = require('../modules/time.database');

router.get('/', (req, res) => {
    console.log('GET /project_entries');
    pool.query(`SELECT * FROM "project_entries";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error with SQL GET in route', error);
            res.sendStatus(500)
        });
});

 // end route GET 

router.post('/', (req, res) => {
    console.log('POST /project_entries', req.body);
    const hero = req.body;
    const queryText = `INSERT INTO "project_entries" ("items_completed", "guest", "date", "start_time", "end_time", "image_path") VALUES ($1, $2, $3, $4, $5, $6)`;
    pool.query(queryText, [project_entries.items_completed, project_entries.guest, project_entries.date, project_entries.start_time, project_entries.end_time, project_entries.image_path])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making SQL insert query in route', error);
            res.sendStatus(500);
        });
});

// end route POST

router.delete('/:id', (req, res) => {
    console.log('DELETE /project_entries');
    console.log(req.params);
    const deleteProjectEntries = req.params.id;
    pool.query('DELETE FROM "project_entries" WHERE "id"=$1;', [deleteProjectEntries])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making SQL delete in route', error);
            res.sendStatus(500);
        });
});

// end delete

module.exports = router;