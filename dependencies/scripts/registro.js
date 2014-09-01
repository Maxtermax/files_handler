$(document).on('ready',function(){
/*
$(".form_registro").on("submit",function(e){
	e.preventDefault();
	var ajax=$.ajax({
		url:'/registro',
		type:'POST',
		data:{
			name:$(".insert_name").val()
		}
	});//simple ajax

	ajax.error(function(){
		console.log("error");
	});
});//end submit
*/
var Elements={
	inputs:$(".collection_inputs input"),
	Titulo:$(".title_info")[0],//the title of help section example 'name', 'twitter' etc...
	Contenido:$(".indicator")[0],//content of the help section 
	progreso:$(".progress")

}//cath elements 


Elements.inputs.on('focus',function(){
	Help_inputs(this,Elements.Titulo,Elements.Contenido);
	//when the user on focus call Help_inputs to tell him 
}).on('input',function(){
	Valid_real_time(this,Elements.Contenido);
});//valid error in real time 


function Valid_real_time(self,content){
	var Rexp=/^[@]/;
	var help="Escribe tu de usuario de twitter valido con maximo 8 numero de caracteres y minimo 5 ejemplo <b>@sneyder_a</b>  no te olivides de escribir el <b>@</b> al principio llevas  <span class=caracteres> <b> "+self.value.length+"</b> <span> caracteres. "
	+"<br><br> <b>¿Para que necesitamos esto?</b>  </br> esto nos servira para conectarte y mostrarte informacion interesante de eventos tendencias, lugares, hastags, bla bla bla...";

	if(self.name == 'twitter' && !(Rexp.test(self.value)) ){
		Elements.Titulo.innerHTML="Twitter";
		Elements.Contenido.innerHTML=help;
		return ;

	}else if(self.name == "twitter" && self.value.length === 8 ){
		Elements.Contenido.innerHTML="Gracias <a target_=blank href=https://twitter.com/"+self.value+">"+self.value+"</a>  si toda sale bien podremos conectarte y mostrarte informacion interesante de eventos tendencias, lugares, hastags, bla bla bla...";
	
		return ;
	}else if(self.name == 'twitter'){
		Elements.Titulo.innerHTML="Twitter";
		Elements.Contenido.innerHTML=help;
	}//end write name help 






}//end real time 
	


	




function Help_inputs(self,title,content){
	if(self.name == 'name'){
		title.innerHTML="Nombre";
		content.innerHTML="Escribe tu nombre de usuario";
		return ;
	}//end write name help 

	if(self.name == 'pass'){
		title.innerHTML="Contraseña";
		content.innerHTML="Escribe tu contraseña de usuario";
		return ;
	}//end write password help
	if(self.name == 'email'){
		title.innerHTML="Email";
		content.innerHTML="Escribe tu email de usuario";
		return ;
	}//end write email help

	if(self.name == 'twitter' && self.value == "" ){
		title.innerHTML="Twitter";
		self.value="@";
		content.innerHTML="Escribe tu de usuario de twitter valido con minimo x numero de caracteres ejemplo <b> @sneyder_a</b>"
		+"<br><br> <b>¿Para que necesitamos esto?</b>  </br> esto nos servira para conectarte y mostrarte informacion interesante de eventos tendencias, lugares, hastags, bla bla bla...";
	}//end write twiter help


}//end data_inputs 




var i=20;
var e=0;
$("#Basic_info").on('submit',function(){
	Elements.progreso.css({
		'width':(i+=20)+'%'
	});
		
});



});//end document



