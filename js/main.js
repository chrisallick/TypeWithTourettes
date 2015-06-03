$(window).load(function() {
	$("#wrapper").animate({
		opacity: 1
	}, 'slow' );

	$("#prompts input").focus();
});

var questions_index = 0;
var questions = ["Nice. What are you doing today?", "That sounds like fun. What do you do for a living?"];

var inserts = ["fuck", "popcorn", "random phrase", "shit", "tits ass"];

var listener;

var space_count = 0;
var space_rand;

$(document).ready(function() {
	space_rand = getRandomInt(1,3);
	
	listener = new window.keypress.Listener();
	listener.simple_combo("space", function() {
		space_count++;
		
		if( space_count == space_rand ) {
			var t = $("#prompts input").val();
			$("#prompts input").val( t + " " + inserts[getRandomInt(0, inserts.length-1)] );
			$('#prompts input').get(0).scrollLeft = $('#prompts input').get(0).scrollWidth;

			space_rand = getRandomInt(2,4);
			space_count = 0;
		}

		return true;
	});

	$("#wtf").click(function(){
		if( !$("#info").hasClass("on") ) {
			$("#info").addClass("on");
			$(this).text("< BACK");

			$("#prompts").removeClass("on");
		} else {
			$("#info").removeClass("on");
			$(this).text("WTF?");

			$("#prompts").addClass("on");
			$("#prompts input").focus();
		}
	});

	$("#prompts form").submit(function(event){
		event.preventDefault();

		questions_index++;
		if( questions_index >= questions.length ) {
			questions_index = 0;
		}

		$("#prompts .questions").append( "<p class='bold'>"+$("#prompts input").val()+"</p>" );
		$("#prompts .questions").append( "<p>"+questions[questions_index]+"</p>" );
		$("#prompts input").val("");
	});
});