var express=require("express");
var app=express();
app.use(express.static(__dirname + "/static"));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.get("/",function(request,response){
    response.render("index");
})

app.get("/dui", function(request,response){
    var cat_array=[
        {name:"Dui", food:"Salmon",age:"1", sleep1:"anywhere", sleep2:"under bed"}
    ];
    response.render("details",{cat:cat_array});
})

app.get("/limmy", function(request,response){
    var cat_array=[
        {name:"limmy", food:"plant",age:"2", sleep1:"anywhere", sleep2:"under bed"}
    ];
    response.render("details",{cat:cat_array});
})

app.get("/rubby", function(request,response){
    var cat_array=[
        {name:"rubby", food:"pizza",age:"5", sleep1:"on the window", sleep2:"under the chair"}
    ];
    response.render("details",{cat:cat_array});
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})