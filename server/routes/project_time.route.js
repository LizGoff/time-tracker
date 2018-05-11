var express = require('express');
var router = express.Router();
var pool = require('../modules/time.database');

router.get('/', (req, res) => {
    console.log('GET /project_time');
    pool.query(`SELECT * FROM "project_time";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error with SQL GET in route guest', error);
            res.sendStatus(500)
        });
});

 // end route GET 

router.post('/', (req, res) => {
    console.log('POST /project_time', req.body);
    const project_time = req.body;
    const queryText = `INSERT INTO "project_time" ("guest", "start_date", "end_date", "total_hours", "image_path") VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [project_time.guest, project_time.start_date, project_time.end_date, project_time.total_hours, project_time.image_path])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making SQL insert query in route guest', error);
            res.sendStatus(500);
        });
});

// end route POST

router.delete('/:id', (req, res) => {
    console.log('DELETE /project_time');
    console.log(req.params);
    const deleteProjectGuests = req.params.id;
    pool.query('DELETE FROM "project_time" WHERE "id"=$1;', [deleteProjectGuests])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making SQL delete in route guest', error);
            res.sendStatus(500);
        });
});

// end delete

module.exports = router;