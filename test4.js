var express = require('express'),
http = require('http');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var mysql = require('mysql');

app.use('/', express.static("/Applications/Node/proj3/Gold\ Farmer\'s\ Union"));

app.post('/login',function(req,res){
  var username=req.param('user');
  var password=req.param('password');
  console.log("User name = "+username+", password is "+password);
  
 var query = "select * from tbl1 where username='" + username + "' && password='" + password + "'";
connection.query(query, function(error,results)
{
	if(error)
	{
		console.log("it didn't work");
	}
	if(results)
	{
	console.log(results);
	// res.write(JSON.stringify(results[password]));
	
	res.send(results);
	res.end();
	
	/*
	res.json({results: user_name});
	res.end("Done");
	*/
	/*
	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ results: user_name }));
	*/
	//res.json(results);
	// res.write(JSON.parse(results));
	//var x = JSON.parse({results: user_name});
	//res.write(results[0].user_name);
	}
}
);
// res.end("End");
});

app.post('/create',function(req,res){
  var username=req.param('user');
  var password=req.param('password');
  
  var query = "insert into tbl1(username, password) values('" + username +"','" + password +"')";
  
  connection.query(query, function(error,results)
{
	if(error)
	{
		console.log("it didn't work");
	}
	if(results)
	{
	console.log(results);
	res.send(results);
	res.end();
	}
}
);
  
  });
  

var connection = mysql.createConnection(
{
	host: "localhost",
	user:"root",
	password: "",
	database: "db1"

}
);

/*
var query = "Select" + user_name "from tbl1";
connection.query(query, function(error,results)
{
	if(error)
	{
		console.log("it didn't work");
	}
	console.log(results);
}
);
connection.end();
*/

app.post('/buy',function(req,res){
  var product=req.param('product');
  var description=req.param('description');
  console.log("The requested product is "+ product +", the description is " + description);
  
 var query = "select * from tbl2 where name like '%"+product+"%'";
connection.query(query, function(error,results)
{
	if(error)
	{
		console.log("it didn't work");
	}
	if(results=="[]")
	{
	res.send([{"name":"gun","description":"boom stick"}]);
	}
	
	if(results)
	{
	console.log(results);
	res.send(results);
	res.end();
	}
}
);
});

app.post('/sell',function(req,res){
  var product=req.param('product');
  var description=req.param('description');
  console.log("The requested product is "+ product +", the description is " + description);
  
 var query = "insert into tbl2(name,description) values('" + product + "','" + description + "')";
connection.query(query, function(error,results)
{
	if(error)
	{
		console.log("it didn't work");
	}

	
	if(results)
	{
	console.log(results);
	res.send(results);
	res.end();
	}
}
);
});


app.listen(3000);