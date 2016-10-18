#!/bin/env node
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
require('shelljs/global');

const server_port = 8042;
const app = express();

app.get('/', function (req, res) {
	saida = [];
    exec('cp script/out containers-list', {silent:true});
	cmd = exec('cat containers-list', {silent:true}).stdout;
	output = cmd.split('\n');

	for (i in output){
		
		container = {
			name: output[i].split(' ')[0],
			updated: isUpdated(output[i].split(' ')[1])
		}
		saida.push(container);
	}
	
	saida.pop();
    res.json(saida);
});

var isUpdated = function(output){
	if(output == 'true')
			return true;
	return false
}


app.listen(server_port, function(){
  console.log("Listening on localhost: "  + server_port)
});
