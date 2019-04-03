var express = require('express')
var path = require('path'); 
var app = express()

var PORT = 8081

var arr = [1232,32421,3213,3423,323412]

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use('/static', express.static(path.join(__dirname, 'public')))



function getItems(){
    for(i = 0; i < arr.length; i++){
        var str = ''
        str.concat(arr[i])
    }
    return str
}

app.listen(PORT)

console.log('app listening on port', PORT)
