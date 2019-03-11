const MongoClient = require('mongodb').MongoClient;

const MONGO_USER = encodeURIComponent(process.env.MONGO_USER);
const MONGO_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD);

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@gcomte-mdb-cluster-ehume.mongodb.net/test?retryWrites=true`;
const client = new MongoClient(uri, {
  useNewUrlParser: true
});

(async function () {
  try {

    await client.connect();
    const db = client.db("sandbox-db");
    const collection = db.collection("users");

    collection.insertOne({email: 'guillaume.comte10@gmail.com', example: true}).catch(err => console.error('insert error', err.name, err.errmsg, err.code));

    const docs = await collection.find({
      email: {
        $regex: /^guillaume\.comte10/
      }
    }).toArray();
    console.log('found docs', docs);

    client.close();

  } catch (err) {
    console.error(error);
  }
})();