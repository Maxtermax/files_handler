var mongoose=require('mongoose');
var Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost/myDB',function(err,res){
	if(err) console.log(err);
	console.log("Conectado at: myDB");
});


var Esquema=new Schema({
	name:{ type: String },
	pass:{type:String,unique:true},
	email:{type:String,unique:true},
	img_profile:{ type: String },
	media:{
		pictures:{type:Array},
		videos:{type:Array},
		docs:{
			pdf:{type:Array}
		}
	},
	fecha_creacion:{type:Date},
	settings_post:{
		robot_choose:{type:Boolean,default:true},
		main_post:{type:Array}
	},
	my_post:{
		post_type:{type:Array},
		post_number:{type:Number,default:0},
		views:{ type: Number,default:0 },
		Anotados:{type: Number,default:0},
		fecha_creacion:{type:Date},
		comment:{type:Array},
		apuntados:{type:Array}
	},
	post_push:{
		who:{type:Array},
		comment:{type:Array},
		Me_apunto:{type:Boolean}
	}


});




var Umodel=mongoose.model('pruebas_los5mejores',Esquema);
module.exports=Umodel;




