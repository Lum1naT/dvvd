const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lum1nat:root@devcluster.3sxtl.mongodb.net/dvvd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("dvvd").collection("language");
  // perform actions on the collection object
   const lang = await collection.findOne({name: "German"}, {_id: 0, name: 0, code: 1, native: 1, flag_code: 1});

   console.log(lang);



  


 client.close();

});