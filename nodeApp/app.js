const express = require('express');

const cors = require('cors')

const FileUtil=require('./service/fileutil')
const futil=new FileUtil();

const fs = require("fs");

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {

   res.header("Access-Control-Allow-Origin", "*");

   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   next();

 });



app.get('/', function (req, res) {

console.log('inside get');

futil.getFile('npmrc')

.then(data =>res.json(data))

.catch(err => res.send(err))

})

// app.get('/edit/:keyvalue', function (req, res) {

//    console.log(req.params.keyvalue);
   
   
//    res.send(200,'ok')
//    //    fileUtil.getFile('npmrc')
   
//    // .then(data =>res.json(data))
   
//    // .catch(err => res.send(err))
   
//    })
   

 app.route('/edit').post((req, res) => {

   console.log('inside write!');

  res.send( futil.write('npmrc',req));

})

  









var server = app.listen(8080, function () {

   var host = server.address().address

   var port = server.address().port

   

   console.log("Example app listening at http://%s:%s", host, port)

})

