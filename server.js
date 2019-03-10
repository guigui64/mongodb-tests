const MongoClient = require('mongodb').MongoClient;

const MONGO_USER = 'guillaume';
const MONGO_PASSWORD = 'ZHAu9q51xahndAIG';

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@gcomte-mdb-cluster-ehume.mongodb.net/test?retryWrites=true`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("sandbox-db");
  const collection = db.collection("sandbox-users");
  const cursor = collection.find({});
  function iterateFunc(doc) {
    console.log('document', JSON.stringify(doc, null, 4));
 }
 function errorFunc(error) {
    console.log('error', error);
 }
 cursor.forEach(iterateFunc, errorFunc);
  client.close();
});