const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const router = express.Router();
const {TwingEnvironment, TwingLoaderArray, TwingLoaderFilesystem} = require('twing');
let loader = new TwingLoaderFilesystem("./src/templates/")
let twing = new TwingEnvironment(loader);


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lum1nat:root@devcluster.3sxtl.mongodb.net/dvvd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });



// add routes for all languages
const languages = ['en', 'de', 'cs'];


languages.forEach(lang => {
    
    router.get('/' + lang ,function(req,res){
        twing.render(lang + '/index.html.twig', { root: __dirname }, req.params).then((output) => {
          res.end(output);
        });
      });

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
