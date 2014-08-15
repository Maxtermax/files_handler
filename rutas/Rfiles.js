var DB=require("../modelo/db.js");

module.exports={
	WriteFile:function(req,res){
		DB.OpenAndWriteF({
			User:'esneyder',
			nameFile:'Soy batman !!!',
			ContentType:"image/gif",
			fileCollection:"fs",
			extension:".gif",
			des:"descipcion Soy batman",
			file:"Bat.gif",
			path:"./files/Bat.gif"
		},function(err,file){
			if(err) console.log(err);
				res.send(file);
		});

	},//termina SetFilehandler
	ReadFile:function(req,res){
		var u=req.params.u 
		var id=req.params.id 
		DB.OpenAndReadF(res,u,id);


	}//termina ReadFile





}