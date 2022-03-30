const express = require('express'),app = express(),mysql = require('mysql'),cors= require('cors') ,bodyParser = require('body-parser')
db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'tugas_soa'
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

//local
app.listen(server.port, ()=>console.log(`server started, listening port: ${server.port}`));
console.log(process.env.DB_HOST)

//public
db.connect(function(err) {
  if (err) console.log(err.message) ;
  console.log("Successfully connected");
});
