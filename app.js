var express = require('express');
var app = express();
var fs = require("fs"); //read file movie.json

app.get('/getMovies', function (req , res) {
    fs.readFile(__dirname+"/"+"movies.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});
app.get('/getMovies/:id', function (req , res){
    fs.readFile(__dirname+"/"+"movies.json",'utf8',function(err,data){
        var movies = JSON.parse( data );
        var movie = movies["movie" + req.params.id];
        console.log( movie );
        res.end( JSON.stringify(movie));
    });
});

var movie ={
    "movie8" : { 
        "category" : "Drama ", 
        "name" : "One for the road", 
        "studio" : "GDH559", 
        "released" : "2022",
        "country": "Thailand",
        "id": 8,
    }
}
app.delete('/delMovies/:index', function (req , res){
    fs.readFile(__dirname+"/"+"movies.json",'utf8',function(err,data){
        data = JSON.parse(data);
        delete data["movie" + req.params.index];
        console.log( movie );
        res.end( JSON.stringify(data));
    });
});
app.post('/addMovies', function (req , res){
    fs.readFile(__dirname+"/"+"movies.json",'utf8',function(err,data){
        data = JSON.parse(data);
        data["movie8"]=movie["movie8"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s", host , port)
});