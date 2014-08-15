$(document).on('ready',function(){

var front=io();








$(".buscar_evento").on('input',function(){
	var valor_Busqueda=this.value;
	if(valor_Busqueda){
		front.emit('emit_valor_Busqueda',valor_Busqueda);
//		console.log(valor_Busqueda);
	}



});

front.on('res_busqueda',function(users){

	if(users[0]){
		$(".uno").show();
		$(".uno").text(users[0]["name"]+" "+users[0]["views"]);
	}else{
		$(".uno").hide();
	}

	if(users[1] ){
		$(".dos").show();
		$(".dos").text(users[1]["name"]+" "+users[1]["views"]);
	}else{
		$(".dos").hide();
	};

	if(users[2] ){
		$(".tres").show();
		$(".tres").text(users[2]["name"]+" "+users[2]["views"]);
	}else{	
		$(".tres").hide();
	}



});
		
























});//termina main