<!--		
		function init()
		{
			var w = window.outerWidth;
			var h = window.outerHeight;
			var hh = (w/15);
			var sh = (w/30);
			
			document.getElementById('head').style.height=(hh + 'px');
			document.getElementById('subhead').style.top=(hh + 'px');
			document.getElementById('subhead').style.height=(sh + 'px');
			
			document.getElementById('homesub').style.fontSize=(.70*sh + 'px');
			document.getElementById('homesub').style.top=(-.01*sh + 'px');
			document.getElementById('aboutsub').style.fontSize=(.70*sh + 'px');
			document.getElementById('aboutsub').style.top=(-.01*sh + 'px');
			document.getElementById('buysub').style.fontSize=(.70*sh + 'px');
			document.getElementById('buysub').style.top=(-.01*sh + 'px');
			document.getElementById('sellsub').style.fontSize=(.70*sh + 'px');
			document.getElementById('sellsub').style.top=(-.01*sh + 'px');
			document.getElementById('accountsub').style.fontSize=(.70*sh + 'px');
			document.getElementById('accountsub').style.top=(-.01*sh + 'px');
			
			document.getElementById('center').style.top = ((sh+hh) + 'px');
			document.getElementById('center').style.height = ((sh+hh) - h + 'px');
			document.getElementById('fb').style.top = ((sh+hh) + 'px');
			document.getElementById('t').style.top = ((sh+hh) + 'px');
			
			
			
			////////////
			document.getElementById('aboutbox').style.top = ((sh+hh) + 10 +'px');
			var elems = document.getElementsByClassName('info unselectable');
			for(var i = 0; i < elems.length; i++) {
    		elems[i].style.fontSize = ( .02*w + 'px');
			}
			/////////
			
		}
	
		window.onload=init;
		window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
		
-->