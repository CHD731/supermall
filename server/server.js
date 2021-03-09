const express = require('express');
const app = express();
const router = require('./router/router')
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  }); 
app.use('/v1/',express.static('./data'));
app.use('/v1/',router)

 app.listen(3000);
 console.log('启动成功');
