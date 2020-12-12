var express = require('express');
const PORT = process.env.PORT || 5000
 
var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

var app = express();

app.get('/api/cities', function(request, response){
   response.send(cities);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));