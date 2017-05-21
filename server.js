const express = require('express');
const app = express();
const path = require('path');
const imagesearch = require('./models/imagesearch');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {url: req.get('host')});
})

app.use('/api', imagesearch);


app.listen(process.env.PORT || 8000, ()=> {
    console.log('App listening on:' + process.env.PORT || 8000);
})