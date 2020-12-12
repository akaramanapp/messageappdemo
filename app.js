var express = require('express');
 
var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

var app = express();

app.get('/api/cities', function(request, response){
   response.send(cities);
});

app.listen(1453, function(){
    console.log("Port dinleniyor 1453...");
});