var express = require('express')
var app = express()

var arr = [1232,32421,3213,3423,323412]

app.get('/', function(req, res){
    res.send('hello world')
    for(i = 0; i < arr.length; i++){
        res.send(arr[i])
    }
})