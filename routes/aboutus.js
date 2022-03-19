const express = require('express'),
  router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM aboutus`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "about us lists retrieved successfully"
    })
  })
});

// create new user
router.post('/new', function(req, res) {
    let sql = `INSERT INTO aboutus(aboutusdesc, mobilephone, email) VALUES (?)`;
    let values = [
      req.body.aboutusdesc,
      req.body.mobilephone,
      req.body.email
    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "New data ABout Us added successfully"
      })
    })
  });
  
module.exports = router;