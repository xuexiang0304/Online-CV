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
		if($('#skills').offset().top <= $(window).scrollTop()+$(window).height()*0.75 && !flag_skill){
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
	// if(screen.width <= 600){
	// 	canvas.width = screen.width*0.8;
	// 	canvas.height = screen.width*0.8;
	// }else if(screen <= 1200){
	// 	canvas.width = screen.width*0.33;
	// 	canvas.height = screen.width*0.33;
	// }else{
	// 	canvas.width = screen.width*0.19;
	// 	canvas.height = screen.width*0.19;
	// }
	canvas.width = 120;
	canvas.height = 120;

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
		// clearTimeout(t);
		// initVl=0;
		setTimeout(function(){
			DrawCircle (x, y,radius,max, percentage, backColor, proColor, fontColor, id);
		},5);
	}	
}

function startDraw(){
	DrawCircle(60, 60, 50, 55, 0,'#eee','#e74c3c','#e74c3c', 'skill_1' );
	DrawCircle(60, 60, 50, 60, 0,'#eee','#e74c3c','#e74c3c', 'skill_2' );
	DrawCircle(60, 60, 50, 80, 0,'#eee','#e74c3c','#e74c3c', 'skill_3' );
	DrawCircle(60, 60, 50, 70, 0,'#eee','#e74c3c','#e74c3c', 'skill_4' );
	DrawCircle(60, 60, 50, 60, 0,'#eee','#e74c3c','#e74c3c', 'skill_5' );	
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

