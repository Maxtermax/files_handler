var express=require('express')//express 4
var app=express();
var server=require('http').createServer(app)
var io=require('socket.io')(server);//socket las version
var	middlewares=require('./dependencies/express-middleware.js');//Middlewares 
var rutas=require("./rutas/handler.js");//Rutas
var user_model=require('./modelo/umodel.js');

app.set('view engine', 'html'); 
app.use(middlewares.logs('dev'));
app.use(middlewares.Ajax());
app.use(middlewares.Ajax_Update());
app.use(express.static(__dirname+'/'));




io.on('connection',function(socket){
	console.log("Nueva conexion socket.io");
	socket.on('emit_valor_Busqueda',function(valor_Busqueda){
		
		user_model.find({
			name:new RegExp(valor_Busqueda,'ig')
			}).limit(3).sort('-views').exec(function(err,docs){
				if(err) console.log(err);		
				socket.emit('res_busqueda',docs);
				
		});//busca user


	});//termina on 



	socket.on('disconnect',function(){
		console.log("disconnect")
	});

});



/*
app.get("/",function(req,res){
	res.sendfile("./vistas/index.html");
});
*/



app.get("/",rutas.Set.WriteFile);//write file in db
app.get("/:u/:id",rutas.Get.ReadFile);//send file



server.listen(1234,function(){
	console.log("listen on port: "+1234);
})
