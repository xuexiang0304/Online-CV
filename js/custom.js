// author: Xiang Xue
jQuery(document).ready(function($){
    // Scroll event for experience part
	var timelineBlocks = $('.timeline>li'),
	offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	$(window).on('scroll',function(){
		// Scroll event for resume part
		$('#resume .timeline>li').each(function(){
			if($(this).offset().top <= $(window).scrollTop() + $(window).height()*0.75) {
				$(this).find('.timeline-badge>span').addClass('fa-bullseye');
				$('.timeline>li').not($(this)).find('.timeline-badge>span').removeClass('fa-bullseye');
			}			
		});

		// Scroll event for skills part
		var flag_skill = $('#skills').attr('flag');
		if($('#skills').offset().top <= $(window).scrollTop()+$(window).height()*0.6 && !flag_skill){
			startDraw();
			$('#skills').attr('flag', true);
		}

		// Scroll event for experience part
		(!window.requestAnimationFrame) 
				? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
				: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});
});

function DrawCircle (x, y,radius,max, percentage, backColor, proColor, fontColor, id){
	var canvas = document.getElementById(id);
	if(screen.width <= 900){
		canvas.width = 120;
		canvas.height = 120;
	}else{
		canvas.width = 140;
		canvas.height = 140;
	}

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
	}else{
		return;
	}

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fillStyle = backColor;
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius,Math.PI*1.5, Math.PI * 1.5 -  Math.PI * 2 * percentage / 100, true);
	ctx.closePath();
	ctx.fillStyle = proColor;
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius - (radius * 0.15), 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius - (radius * 0.25), 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.strokeStyle = backColor;
	ctx.stroke();

	ctx.font = "bold 15px Arial";
	ctx.fillStyle = fontColor;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.moveTo(x, y);
	ctx.fillText(percentage+"%", x, y);

    percentage+=1;

	if(percentage <= max){
		setTimeout(function(){
			DrawCircle (x, y,radius,max, percentage, backColor, proColor, fontColor, id);
		},5);
	}	
}

function startDraw(){

	if(screen.width <= 900){
		var X = 60;
		var Y = 60;
	}else{
		var X = 70;
		var Y = 70;
	}
	DrawCircle(X, Y, 60, 80, 0,'#eee','#78DEC9','#3EC8AC', 'skill_1' );
	DrawCircle(X, Y, 60, 70, 0,'#eee','#78DEC9','#3EC8AC', 'skill_2' );
	DrawCircle(X, Y, 60, 65, 0,'#eee','#78DEC9','#3EC8AC', 'skill_3' );
	DrawCircle(X, Y, 60, 80, 0,'#eee','#78DEC9','#3EC8AC', 'skill_4' );
	DrawCircle(X, Y, 60, 75, 0,'#eee','#78DEC9','#3EC8AC', 'skill_5' );	
}

function hideBlocks(blocks, offset) {
	blocks.each(function(){
		( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline-badge, .timeline-content, .timeline-panel').addClass('is-hidden');
	});
}

function showBlocks(blocks, offset) {
	blocks.each(function(){
		( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-badge').hasClass('is-hidden') ) && $(this).find('.timeline-badge, .timeline-content, .timeline-panel').removeClass('is-hidden').addClass('bounce-in');
		( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-badge').hasClass('bounce-in') ) && $(this).find('.timeline-badge, .timeline-content, .timeline-panel').removeClass('bounce-in').addClass('is-hidden');
	});
}

