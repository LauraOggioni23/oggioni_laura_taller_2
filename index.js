const express = require('express');
const hbs = require('express-handlebars');

const MongoClient = require('mongodb').MongoClient;

var app = express();
const path = require('path');
const url = 'mongodb://localhost:27017';
const dbName = 'maquillaje';
const client = new MongoClient(url);
var db = null;

client.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }

    db = client.db(dbName);
});

app.use(express.static('public')); //config serv

app.engine('handlebars', hbs()); //use handlebars
app.set('view engine', 'handlebars');

//cargar taller 2

app.get('/store', function (request, response) {
    var coll = db.collection('productos').find({});
    var l = request.query.producto;


    

    coll.toArray((err, result) => {
        response.render('store', {
            prod: result,
            name: result[2]
        });
    });

    /*
    collection.find({
      pages: {
        '$gte': parseInt(request.query.pages)
      }
    }).toArray(function(err, docs){
      if(err){
        console.error(err);
        response.send(err);
        return;
      }
  
      var contexto = {
        products: docs,
      };
      response.render('store', contexto);
    });
    */

});

//Página de descripción

app.get('/description', function(request, response){
    var coll = db.collection('productos').find({numero:"1"});
    coll.toArray((err, result) => {
        response.render('description', {
            nombre1 : result[0].nombre1 ,
            nombre2 : result[0].nombre2,
            precio: result[0].precio,
            descripcion: result[0].descripcion,
            imagen: result[0].imagen
        });
    });
    response.render('description');
});

//Página de taller 1

app.get('/', function (request, response) {
    response.render('index');
});



app.listen(5500);