var mysql = require('mysql');

var connection = mysql.createConnection(
{
	host: "localhost",
	user:"root",
	password: "",
	database: "db1"

}
);

var query = "Select * from tbl1";
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