const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

const route = require('./route/routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

route(app);
// app.route('/test').get((req, res) => {
//     console.log(req.query.id)
// })

app.listen(port);