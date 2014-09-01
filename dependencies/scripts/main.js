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


front.on('post',function(post){
	console.log('post ',post);
	for(i in post){
		$("body").append($("<p> nombre: "+post[i]['name']+"</p> <img src=http://localhost:1234/"+post[i]['name']+'/'+post[i]["img_profile"]+" width=200px height=200px > "));
	}

});

var how_many=0;
$(".more_post").click(function(){
	front.emit('more_post',how_many);
	how_many+=3;
});//end click
	

front.on('take_more_post',function(more){	
	if(!more[0]){
		console.log('No hay mas post :(');
	}else{
		for ( i in more ) {
			$("body").append($("<p> more: "+more[i]['name']+"</p> <img src=http://localhost:1234/"+more[i]['name']+'/'+more[i]["img_profile"]+" width=200px height=200px > "));
		}
	}

});//end more		1039695905



























});//termina main