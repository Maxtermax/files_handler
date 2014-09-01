module.exports=function(data){
	var self=this;
	self.news_feeds=function(settings){
		data.U_model.find({})
			.limit(settings.limit)//limit query  to x number docs
			.sort(settings.sort)//sort docs from plus to less or less to plus
			.exec(function(err,docs){
				if(err){
					data.Socket.emit('err_news',err);//send message with err of query 
				}else if(settings.more_post){
					data.Socket.emit(settings.conect,docs.splice(settings.range+3,settings.range+3));
				}else{
					data.Socket.emit(settings.conect,docs);//send message with the query
				};
					
		});//end find 8 bedt post
	}//end news_feeds

	self.more_post=function(settings){           //0   //3
		self.news_feeds({sort:settings.sort,conect:settings.conect,more_post:true,range:settings.range});

	}//end more post


	




}//end class to exports
