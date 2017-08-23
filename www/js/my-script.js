
$(document).ready(function(){
	var player = new SV.Player({videoId: '709adab6191be1c5f8'});
	player.bind('progress',function(e){
		var rem = parseInt(e.data.time) % 60;
		if(rem == 0 && parseInt(e.data.time) > 0){
			//console.log(e);
			//console.log('Send ajax at '+parseInt(e.data.time)+' seconds');
		}
	});
});