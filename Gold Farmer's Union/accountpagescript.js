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
			
			
			document.getElementById('login').style.fontSize=(.035*w + 'px');
			document.getElementById('create').style.fontSize=(.035*w + 'px');
			
		}
	
		window.onload=init;
		window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
	
			function createclick()
			{
				document.getElementById('create').style.color=("white");
				document.getElementById('create').style.backgroundColor="olive";
				document.getElementById("login").style.color="olive";
				document.getElementById('login').style.backgroundColor="white";
				document.getElementById('form').innerHTML = 
("<p id='detail'>email:</p><input id='email' type='text' placeholder='address@host.com' />") +
("<p style='font-family:Helvetica; color:olive; font-size:12px;'>Confirm email</p><input type='text' placeholder='address@host.com' /><br style='line-height:5%;'><br />") +
("<p id='detail'>username:</p><input id='user' type='text' placeholder='John Doe' /><br></br>") +
("<p id='detail'>password</p><input id='password' type='text' placeholder='************' />") +
("<p style='font-family:Helvetica; color:olive; font-size:12px;'>Retype password</p><input type='text' placeholder='************' />") +
("<input id='submit' type='submit' />");
			  
			}
			
			function loginclick()
			{
				document.getElementById("login").style.color=("white");
				document.getElementById('login').style.backgroundColor=("olive");
				document.getElementById('create').style.color=("olive");
				document.getElementById('create').style.backgroundColor=("white");
				document.getElementById('form').innerHTML = 
("<p id='detail'>username</p><input type='text' id='user' placeholder='whoami' /><br style='line-height:5%;'></br>") +
("<p id='detail'>password</p><input type='text' id='password' placeholder='************' /><br ></br>") +
("<input id='submit' type='submit' />");
/*
var user,pass;
	    $("#submit").click(function(){
    	   $.post("http://localhost:3000/login", $( "#form" ).serialize()).done(function(data) {
  			
  			$( "#alert" ).html(data[0]["username"]);
  			console.log(data[0].username);
  			alert( data[0].username );
		});
    });
*/

var user,pass;
	    $("#submit").click(function(){
    	   $.post("http://localhost:3000/login",{user:$("#user").val(), password:$("#password").val()}, function(data) {
  			 			
  			$("#alert").html("<br/>");
  			$("#alert").html(data[0]["username"]);
  			console.log(data[0].username);
		});
    });
    
    $("#submit").click(function(){
    	   $.post("http://localhost:3000/create",{user:$("#user").val(), password:$("#password").val()}, function(data) {
    	   
		});
    });
    
/*
    $("#submit").click(function(){
  	 	 $.ajax({
  		type: "POST",
  		url: "http://localhost:3000/login",
  		data: JSON.stringify($("#form").serializeArray()),
  		success: function(data){ $( "#alert" ).html(data[0]["username"])},
  		dataType: "json",
  		contentType : "application/json"
	});
	});
*/
}
// {user:$("#user").val(), password:$("#password").val()}
-->