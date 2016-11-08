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
			
		var product;
	    $("#submit").click(function(){
	    	console.log("click!");
    	   $.post("http://localhost:3000/buy",{product:$("#product").val()}, function(data) {
    	   console.log(data[0]["name"]);
    	   $("#alert").html("<br/>");
    	   for(var i=0; i < data.length; i++)
    	   {
  			$("#alert").append(data[i]["name"] + ", " + data[i]["description"] + "<br/><hr/>");
  			}
		});
    });
			
			////
			
		}
	
		window.onload=init;
		window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
    
});

    /*
    var product;
	    $("#submit").click(function(){
	    	alert("Click!");
    	   $.post("http://localhost:3000/buy",{product:$("#product").val()}, function(data) {
  			$("#alert").html(data[0].product);
  			alert(data[0]["product"]);
  			console.log(data[0].product);
		});
    }); 
    */
-->