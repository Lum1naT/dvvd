const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const router = express.Router();
const Twig = require('twig');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lum1nat:root@devcluster.3sxtl.mongodb.net/dvvd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("dvvd").collection("language");
  // perform actions on the collection object

 client.close();

});

// add routes for all languages
const languages = ['en', 'de', 'cs'];


languages.forEach(lang => {
    
    router.get('/' + lang ,function(req,res){
        res.render('./src/templates/' + lang + '/index.html.twig', {language: lang},{ root: __dirname });
        //__dirname : It will resolve to your project folder.
      });

    router.get('/' + lang + '/about' ,function(req,res){
        res.render('./src/templates/' + lang + '/index.html.twig', {language: lang},{ root: __dirname });
        //__dirname : It will resolve to your project folder.
      });
    


// 

});

  router.get('/' + lang + '/about', function (req, res) {
    twing.render(lang + '/index.html.twig', {}).then((output) => {
      res.end(output);
    });
    //__dirname : It will resolve to your project folder.
  });

  //
});

router.get('/', function (req, res) {
  res.redirect('/cs');
});

// use router
app.use('/', router);

// define your root for css and html files
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
