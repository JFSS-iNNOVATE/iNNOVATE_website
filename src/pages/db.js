var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "forums"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "SELECT * FROM comments WHERE id ='1'";
  // var sql = "INSERT INTO comments (id, username, date, comment, parentid, pfp) VALUES (4, 'robert3', '2023-09-09 21:44:00', 'test2',null,'None')";
  var sql = "INSERT INTO comments (username, date, comment, parentid, pfp) VALUES ('robert5', '2023-09-09 21:44:00', 'test2',null,'None')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  // var sql = "DELETE FROM comments WHERE id = '1'";
  // var sql = "DELETE FROM comments";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("deleted");
  // });

  // var sql = "ALTER TABLE forums.comments AUTO_INCREMENT = 1"
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("deleted");
  // });

  // Close the MySQL connection
  con.end((error) => {
    if (error) {
      console.error('Error closing MySQL connection:', error);
      return;
    }

    console.log('MySQL connection closed.');
  });
});