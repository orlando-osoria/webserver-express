const express = require('express')
const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 3000;
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'))

//Express HBs option
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//helpres


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'dope'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});