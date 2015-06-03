<!DOCTYPE html>
<html>
    <head>
        <title>Ebola Near Me</title>

        <meta name="viewport" content="user-scalable=no, minimal-ui, initial-scale=.5">

        <meta charset="utf-8">
        <meta name="description" content="How Close is Ebola to Me?">
        <meta name="keywords" content="ebola, ebola tracker, how close is ebola to me, tracker">

        <meta property="og:title" content="Ebola Near Me" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://ebolanear.me" />
        <meta property="og:description" content="How close is ebola to me?" />
        <meta property="og:image" content="http://ebolanear.me/img/sharethis.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image" content="http://ebolanear.me/img/sharethis_wide.png" />
        <meta property="og:image:width" content="1910" />
        <meta property="og:image:height" content="1000" />

        <meta name="twitter:card" value="summary">
        <meta name="twitter:url" content="http://ebolanear.me">
        <meta name="twitter:domain" content="http://ebolanear.me">
        <meta name="twitter:title" content="Ebola Near Me">
        <meta name="twitter:description" content="How close is ebola to me? ebolanear.me">
        <meta name="twitter:image" content="http://ebolanear.me/img/sharethis.png" />

        <link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' />
        <link href='./css/mobile.css' media='all' rel='stylesheet' type='text/css' />
        
        <script src='http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js' type='text/javascript'></script>
        <script src='./js/l.js' type='text/javascript'></script>
        <script src='./js/mobile.js' type='text/javascript'></script>
        <script src='./js/plugins.js' type='text/javascript'></script>
        <script src='./js/jquery.geolocation.min.js' type='text/javascript'></script>
        <script src='./js/Ebolas.js' type='text/javascript'></script>

        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-55647509-1']);
            _gaq.push(['_trackPageview']);

            (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
    </head>
    <body>
        <!--
            Chris Allick    -=[     http://chrisallick.com      ]=-
            Frank Guzzone   -=[      http://fjguzzone.com       ]=-
            
            Hey! thanks for viewing our site.
        -->
        <div id="ebolas"></div>

        <div id="wrapper">

            <a id="twitter" href="javascript:(function(){window.twttr=window.twttr||{};var D=550,A=450,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0,F=document,E;if(C>A){G=Math.round((C/2)-(A/2))}window.twttr.shareWin=window.open('https://twitter.com/intent/tweet?text=How close is ebola to me? ebolanear.me','','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');E=F.createElement('script');E.src='http://platform.twitter.com/widgets.js';F.getElementsByTagName('head')[0].appendChild(E)}());" target="_blank"><img src="./img/twitter.png" /></a>
            <a id="facebook" href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('http://ebolanear.me'),'facebook-share-dialog','width=626,height=436'); return false;" target="_blank"><img src="./img/facebook.png" /></a>

            <div id="spacer"></div>

            <h1 id="title">EBOLA TRACKER</h1>
            <img id="loading" src="./img/loading.gif" />
            <p id="please">please enable location services on your browser.</p>
            
            <div id="two">
                <h1 id="ebolais">Ebola is in <span id="location"></span>.</h1>
                <h1 id="miles">3,452</h1>
                <h1 id="fromyou">miles from you.</h1>
            </div>

            <div id="knowledge">
                <p><span class="red">Wake up.</span> Warn your friends!  Don't be a victim of the real disease: fear. Decrease hysteria and increase awareness. Read, educate yourself, and change the conversation. The West's myopic approach to media coverage of global events is hurting everyone.</p>
                <p class="last"><span class="red">Read up.</span></p>
                <ul>
                    <li><a target="_blank" href="http://mic.com/articles/100618/one-powerful-illustration-shows-exactly-what-s-wrong-with-media-coverage-of-ebola">What's Wrong With Media Coverage of Ebola</a></li>
                    <li><a target="_blank" href="http://qz.com/275101/am-i-safe-is-the-wrong-ebola-question-to-ask/">"Am I safe?" Is the Wrong Ebola Question</a></li>
                    <li><a target="_blank" href="http://www.bbc.co.uk/newsbeat/28692719">"Ebola: The facts without the hype</a></li>
                </ul>
            </div>
        </div>
    </body>
</html>