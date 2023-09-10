import React from "react";
import '../page-styles/Forum.css';

var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "sqluser",
//   password: "password",
//   database: "forums"
// });

function commentButton(user){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO comments (username, date, comment, parentid, pfp) VALUES ('robert5', '2023-09-09 21:44:00', 'test2',null,'None')";
        con.query(sql, function (err, result) {
          result.for
          if (err) throw err;
          console.log("1 record inserted");
        });
    })

    con.end((error) => {
        if (error) {
          console.error('Error closing MySQL connection:', error);
          return;
        }
    
        console.log('MySQL connection closed.');
      });
}

const Forum = () => {
    return(
        <div className="main-container">
            <h1 className="text">Welcome to the forum! Here you can ask questions, share your ideas, or simply just chat!</h1>
            <div>
                <input placeholder="Add a comment..." className="comment-box"></input>
                <button className="comment-button" onClick={commentButton}>Comment</button>
            </div>
        </div>
    )
}

export default Forum;

