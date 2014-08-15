var mongoose=require('mongoose');
var Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost/myDB',function(err,res){
	if(err) console.log(err);
	console.log("Conectado at: myDB");
});


var Esquema=new Schema({
	name:{ type: String },
	views:{ type: Number,default:0 }
});

var Umodel=mongoose.model('prueba_5mejores',Esquema);
module.exports=Umodel;




