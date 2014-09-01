module.exports={
	handler_registro:function(req,res){
		res.sendfile("./vistas/registro.html",'utf-8');
	},//end handler_registro
	handler_registro_post:function(req,res){
		var b=req.body
		//res.send(b.name);
		res.send(404);
	}


}//end exposts obj