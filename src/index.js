const express = require('express');
const app = express();
const port = 5566;
const path = require('path');
const router = express.Router();


// add routes for all languages
const languages = ['en', 'de', 'cs'];


languages.forEach(lang => {
    
    router.get('/' + lang ,function(req,res){
        res.sendFile('./templates/' + lang + '/index.html', { root: __dirname });
        //__dirname : It will resolve to your project folder.
      });

    router.get('/' + lang + '/about' ,function(req,res){
        res.sendFile('./templates/' + lang + '/index.html', { root: __dirname });
        //__dirname : It will resolve to your project folder.
      });
    




});

router.get('/' ,function(req,res){
    res.redirect('/cs');
  });



// use router
app.use('/', router);

// define your root for css and html files
app.use(express.static(path.join(__dirname, 'src')));



app.listen(port, () => {

    console.log(`App listening on http://localhost:${port}`);


})
