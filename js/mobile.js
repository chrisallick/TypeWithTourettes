$(window).load(function() {
	$("#wrapper").animate({
		opacity: 1
	}, 'slow' );
});

var questions_index = 0;
var questions = [
	"Nice. You sound like an totes interesting person. We should get to know each other. So what have you done today?",
	"That sounds like fun. What do you do for a living?",
	"Wow, amazing. I want to know more about you. Describe your perfect night out.",
	"That sounds like a damn good time. Another question, if you were to be any animal, what would it be, and what would you wear?",
	"Lol. Now that would be an amusing sight. Let’s keep chatting homie. Who is your favorite actor?",
	"Awesome choice! I like your rock-n-roll attitude. What about music, who’s your favorite artist?",
	"I have no frickin' idea who that is homie. But who cares? Tell me something about your childhood, your best memory?"
];

var inserts = [
"cunt",
"assclown",
"ass",
"shitbag",
"motherfucker",
"dickbag",
"fuck",
"shitty",
"assbag",
"fucking",
"bitch",
"damn",
"arse",
"bitchy",
"shit",
"fuck",
"dicks",
"cocksucking",
"bollocks",
"dick-sneeze",
"dickhead",
"cumbubble",
"dickjuice",
"dickface",
"dick",
"bastard",
"nutsack",
"bullshit",
"fucking",
"cock",
"bullshitting",
"dumb ass",
"tit",
"twat",
"asshole",
"wanker"
];

var listener;

var space_count = 0;
var space_rand;

var bStarted = false;
$(document).ready(function() {
	$("#wrapper").click(function() {
		if( !bStarted ) {
			bStarted = true;
			
			$("#taptostart").hide();

			$("#prompts").addClass("on");
			$("#prompts input").focus();
		}
	});

	$("#prompts input").focus(function(event){
		setTimeout(function(){
			$(window).scrollTop(0);	
		}, 100);
	})

	space_rand = getRandomInt(1,3);
	
	listener = new window.keypress.Listener();
	listener.simple_combo("space", function() {
		if( $("#prompts input").val() != "" ) {
			space_count++;
			
			if( space_count == space_rand ) {
				var t = $("#prompts input").val();
				$("#prompts input").val( t + " " + inserts[getRandomInt(0, inserts.length-1)] );
				$('#prompts input').get(0).scrollLeft = $('#prompts input').get(0).scrollWidth;

				space_rand = getRandomInt(1,3);
				space_count = 0;
			}

			return true;
		}
	});

	$("#wtf").click(function(event) {
		bStarted = true;
		$("#taptostart").hide();

		event.preventDefault();
		
		if( !$("#info").hasClass("on") ) {
			$("#info").addClass("on");
			$(this).text("< BACK");

			$("#prompts").removeClass("on");
		} else {
			$("#info").removeClass("on");
			$(this).text("WTF?");

			$("#prompts").addClass("on");
			$("#prompts input").focus();

			setTimeout(function(){
				$(window).scrollTop(0);	
			}, 100);
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

		$('#prompts').scrollTop($('#prompts')[0].scrollHeight);
	});
});