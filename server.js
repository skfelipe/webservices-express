
const express = require("express");
const app = express();
const hbs = require("hbs");
require('./views/hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

//express hbs engine
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');

app.get('/', (req, res)=> {

    res.render('home',{
        nombre: "felipe cancino benavente",
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res)=> {

    res.render('about');

});

app.get('/data', (req, res)=> {
    res.send('Hola data');
});

app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
});