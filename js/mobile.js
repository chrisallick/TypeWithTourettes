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
	"Lol. Now that would be an amusing sight. Let’s keep chatting homie. Who is your favourite actor?",
	"Awesome choice! I like your rock n roll attitude. What about music, who’s your favorite artist?",
	"I have no frickin' idea who that is homie. But who cares? Tell me something about your child hood, your best memory?"
];

var inserts = ["assbiting",
"handjob",
"suckass",
"shitass",
"choady",
"testicle",
"dickbag",
"shitfaced",
"mothafucka",
"asssucking",
"asslicking",
"boner",
"vagina",
"titfuck",
"assbaggy",
"asshole",
"doochbag",
"shithole",
"cockshit",
"fuck",
"pissflaps",
"cockass",
"dum ass",
"arse",
"fuckwad",
"cockass",
"wanker",
"dickwad",
"prick",
"shitbagger",
"poonani",
"dumb ass",
"slutbag",
"rimjobbing",
"fuckwit",
"asslicker",
"wankjob",
"dicksucker",
"cumdumpster",
"damn",
"fuckboy",
"cunty",
"dickface",
"shite",
"cocksucker",
"shit",
"ass",
"dumbfuck",
"shitter",
"peckerhead",
"dickhole",
"jizz",
"bampotting",
"bollocking",
"douchey",
"whorebag",
"slutty",
"shithead",
"cooter",
"motherfucker",
"asswiping",
"twatlip",
"twat",
"bollocks",
"dicksmelling",
"hoe",
"asslick",
"dicks",
"arseholey",
"assmuncher",
"cunt",
"fuckhead",
"arsey",
"asshat",
"shiznit",
"queef",
"shitbrains",
"hard on",
"bullshit",
"lardass",
"assfucking",
"shitbag",
"anus",
"clitty",
"cunthole",
"bonery",
"fuckass",
"jerkass",
"whoreface",
"penis",
"clitfuck",
"skank",
"cum",
"cockburger",
"assmonkey",
"schlong",
"assbag",
"cumslut",
"bitchin",
"poontang",
"vag",
"ballsy",
"ballsacking",
"lameass",
"fucktard",
"cockhead",
"shitdick",
"dicksmiling",
"rimjob",
"tit",
"cuntlicker",
"assy",
"assclowning",
"fuckface",
"cocksucking",
"balls",
"jerk off",
"blowjob",
"smeg",
"dildo",
"nutsack",
"fuckbag",
"cuntface",
"bitchass",
"thundercunt",
"scrote",
"dickweed",
"pussylicking",
"bitch",
"assface",
"pissguzzling",
"dicks slapping",
"dickfucker",
"puto",
"assclown",
"cumbubble",
"shitcunt",
"pussy",
"dumbshit",
"shitty",
"cuntslut",
"dickbeaters",
"shitface",
"slut",
"cockface",
"snatch",
"shitstained",
"cuntrag",
"douchebag",
"clitfucking",
"pissing",
"bastard",
"jackass",
"coochy",
"blowjobby",
"shiteating",
"asshatty",
"shitfuck",
"cocking",
"pissy",
"dick tickling",
"bullshitting",
"shithouse",
"cock",
"fatass",
"asswipe",
"shitspitter",
"bitchassing",
"cunnilingus",
"assfuck",
"assshitting",
"fucker",
"shitbreath",
"choad",
"fuckbrain",
"fuckbutt",
"douche",
"clit",
"asswad",
"cockbite ",
"shitwhore",
"dickhead",
"cockfucker",
"ballsack",
"skanky",
"asscocking",
"vajayjay",
"dick",
"whore",
"jagoff",
"shitstain",
"assmunching",
"dipshit",
"fucking"];

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