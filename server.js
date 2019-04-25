

var express = require('express');
var app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//Obtener el puerto de heroku
const port = process.env.PORT || 3000;

 
app.use( express.static( __dirname + '/public'));

// Express HBS engine 
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
   
    res.render('home.hbs',{
        nombre: 'grabiel de la nieve'
    });

});
app.get('/about', (req, res) => {
   
    res.render('about.hbs', {
    });

});

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});