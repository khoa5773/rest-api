const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "test"
});

module.exports = {
    getAllArticles: (req, res) => {
        let sql = 'SELECT * FROM article'
        db.query(sql,(e, response) => {
            res.json(response);
        });
    },
    appDetails: (req, res) => {
        if(!req.query || !req.query.id)
            return res.json(null);
        let sql = 'SELECT * FROM article WHERE id = ?';
        db.query(sql, [req.query.id], (e, response) => {
            if(e) throw e;
            if (!req.query.filter){
                return res.json(response[0]);
            }
            else {
                return res.json({
                    id: req.query.id,
                    filterValue: response[0][req.query.filter],
                });
            }
        });
    }
}