var express=require('express')//express 4
var app=express();
var server=require('http').createServer(app)
var io=require('socket.io')(server);//socket las version
var	middlewares=require('./dependencies/express-middleware.js');//Middlewares 
var	Finder_feed=require('./dependencies/finder_feed.js');//Middlewares 
var rutas=require("./rutas/handler.js");//Rutas
var user_model=require('./modelo/umodel.js');
//var enigma=require("enigma-code");
var swig = require('swig');


app.set('view engine', 'html'); 
app.use(middlewares.logs('dev'));
app.use(middlewares.Ajax());
app.use(middlewares.Ajax_Update());
app.use(express.static(__dirname+'/'));

/*
	user_model({
		name:'jhony',
		views:10,
		u_number:7,
		fecha_creacion:Date.now()
	}).save(function(){
		console.log('save ');
	});
*/


io.on("connection",function(socket){
	var find=new Finder_feed({Socket:socket,U_model:user_model});
	find.news_feeds({limit:3,sort:'-views',conect:'post'});//sort query with limit doc and the plus to less 
	
	socket.on('more_post',function(how_many){
		find.more_post({sort:'-views',conect:'take_more_post',range:how_many}); 
	});

});//end socket






app.get("/",function(req,res){
//	res.sendfile("./vistas/index.html");
	res.send(404);

});


app.get("/registro",rutas.registro.handler_registro)
app.post("/registro",rutas.registro.handler_registro_post)


//app.get("/",rutas.Set.WriteFile);//write file in db
app.get("/:u/:id",rutas.Get.ReadFile);//send file



server.listen(1234,function(){
	console.log("listen on port: "+1234);
})
