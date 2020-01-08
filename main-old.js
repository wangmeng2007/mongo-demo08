const mongoose=require('mongoose')
const http=require('http')
var app=require('./app')
require('./model')
let server=http.createServer(app)

mongoose.connect('mongodb://39.100.119.199',function (err) {
    console.log('已连接')
    if(!err){
        server.listen(3000,function (err) {
            if (!err){
                console.log('express服务器已开')
            }
        })
    }
})
server.on('close',function () {
    mongoose.disconnect()
})