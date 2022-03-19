const express = require('express'),app = express(),mysql = require('mysql'),cors= require('cors') ,bodyParser = require('body-parser')
require('dotenv').config();
db = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: 'root',
    // database: 'tugas_soa'
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  })
  
var server = {
    port: 5000,
    host: '13.229.66.147',
};

// routers
const aboutusRouter = require('./routes/aboutus');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/aboutus', aboutusRouter);

app.use(cors())
app.use(bodyParser.json());
app.listen(server.port, ()=>console.log(`server started, listening port: ${server.port}`));
console.log(process.env.DB_HOST)

db.connect(function(err) {
  if (err) console.log(err.message) ;
  console.log("Successfully connected");
});
// mysql.createPool(db);
// db.connect(function(err) {
//   if (err) console.log(err.message) ;
//   console.log("Successfully connected");
// });