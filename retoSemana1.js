var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get("/", function(req, res){
	res.send("My first* service :3");
});

var generarRegistro = function(){
	var uid = faker.random.uuid();
	var nombreAleatorio = faker.name.findName();
	var contenidoAleatorio = faker.lorem.sentence();
	var fechaAleatoria = faker.date.past(); 
	var image = faker.image.image();
	return {
		id: uid,
		nombre: nombreAleatorio,
		contenido: contenidoAleatorio,
		fecha: fechaAleatoria,
		imagen: image	
	};
};

app.get('/posts', function(req, res){
	var cantidad = _.random(5, 50);
	var objetos = _.times(cantidad, generarRegistro);
	res.send(objetos)
});

app.listen(3000)