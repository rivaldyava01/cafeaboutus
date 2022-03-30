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
  
module.exports = router;