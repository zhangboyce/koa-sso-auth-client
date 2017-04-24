//var config = require('config');
//let url = config.get('mongo');
//let mongoClient = require('mongodb').MongoClient;
//
//const mongoose = require('mongoose');
//mongoose.connect(url);
//
//console.log(url);
//let db = mongoClient.connect(url).then(db => {
//    console.log("Connect mongo db: " + url);
//    return db;
//}).catch(err => {
//    console.log("Connect mongo db: " + url + " error." + err);
//});


let koa = require('koa');
const app = koa();

console.log(app.context.sessionKey)

app.use(require('koa-session')(app));

console.log(app.context.sessionKey)