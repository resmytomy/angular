const express = require('express');
const si = require('systeminformation');
const cors = require('cors')
const app = express();
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});



const cpuDetailsController = require('./controller/cpuController.js');
const controller=new cpuDetailsController();

app.get('/', controller.getDetails);
 
var server = app.listen(8080, function () {

  var host = server.address().address

  var port = server.address().port



  console.log("Example app listening at http://%s:%s", host, port)

})   