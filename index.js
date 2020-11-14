const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const router = express.Router();
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

let loader = new TwingLoaderFilesystem('./src/templates');
let twing = new TwingEnvironment(loader);

// add routes for all languages
const languages = ['en', 'de', 'cs'];

languages.forEach((lang) => {
  router.get('/' + lang, function (req, res) {
    twing.render(lang + '/index.html.twig', {}).then((output) => {
      res.end(output);
    });
    //__dirname : It will resolve to your project folder.
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
