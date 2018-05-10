const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


var project_entries = require('./routes/project_entries.route');
// var project_time = require('./routes/project_time.route');


app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/project_entries', project_entries);
// app.use('/project_time', project_time);


app.listen(PORT, function() {
    console.log(`listening on PORT', ${PORT}`)
})