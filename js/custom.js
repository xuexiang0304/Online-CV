$(window).on('scroll',function(){
	$('.timeline>li').each(function(){
		var flag = false;
		if($(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && !flag) {
			$(this).find('.timeline-badge>span').addClass('fa-bullseye');
			flag = true;
		}else if($(this).offset().top >= $(window).height()*0.75-$(window).scrollTop()) {
			if($(this).find('.timeline-badge>span').hasClass('fa-bullseye'))
				$(this).find('.timeline-badge>span').removeClass('fa-bullseye');
		}			
	});

	if($('#skills').offset().top <= $(window).scrollTop()+$(window).height()*0.75){
		startDraw();
	}
});

function DrawCircle (x, y, percentage, backColor, proColor, fontColor, id){
	var canvas = document.getElementById(id);
	canvas.width = 120;
	canvas.height = 120;

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
	}else{
		return;
	}

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fillStyle = backColor;
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,Math.PI*1.5,Math.PI * 1.5 -  Math.PI * 2 * process / 100, true);
	ctx.closePath();
	ctx.fillStyle = proColor;
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius - (radius * 0.26), 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius - (radius * 0.30), 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.strokeStyle = backColor;
	ctx.stroke();

	ctx.font = "bold 15px Arial";
	ctx.fillStyle = fontColor;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.moveTo(x, y);
	ctx.fillText(process+"%", x, y);

}

var bfb = 0;
var time = 0;
function startDraw(){
	DrawCircle(60, 60, 50, '#eee','#e74c3c','#e74c3c', 'skill_1' );
	DrawCircle(60, 60, 50, '#eee','#e74c3c','#e74c3c', 'skill_1' );
	DrawCircle(60, 60, 50, '#eee','#e74c3c','#e74c3c', 'skill_1' );
	DrawCircle(60, 60, 50, '#eee','#e74c3c','#e74c3c', 'skill_1' );
	DrawCircle(60, 60, 50, '#eee','#e74c3c','#e74c3c', 'skill_1' );

		t = setTimeout(startDraw,5);
	if(bfb>=35){
		clearTimeout(t);
		bfb=0;
		return;
	}
	bfb+=1;
}







