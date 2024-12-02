
const { MongoClient} = require('mongodb');
const uri = "mongodb+srv://cavila14:cavila14@cluster0.nx7zj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

module.exports = client;

