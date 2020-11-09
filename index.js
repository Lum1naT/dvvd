const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const router = express.Router();


// add routes for all languages
const languages = ['en', 'de', 'cs', 'es'];


languages.forEach(lang => {
    
    router.get('/' + lang ,function(req,res){
        res.sendFile('./src/templates/' + lang + '/index.html', { root: __dirname });
        //__dirname : It will resolve to your project folder.
      });

    router.get('/' + lang + '/about' ,function(req,res){
        res.sendFile('./src/templates/' + lang + '/index.html', { root: __dirname });
        //__dirname : It will resolve to your project folder.
      });
    


// 

});

router.get('/' ,function(req,res){
    res.redirect('/cs');
  });



// use router
app.use('/', router);




// define your root for css and html files
app.use(express.static(__dirname));



app.listen(port, () => {

    console.log(`App listening on http://localhost:${port}`);


})


