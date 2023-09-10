import React from "react";
import '../page-styles/Forum.css';

function read_csv(){
    const csv = require('csv-parser');
    const fs = require('fs');

    fs.createReadStream('.\\src\\pages\\comments.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
        console.log(row["Date"])
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

}

/* ID,Name,Date,ChildID,ParentID,PFP,Comment */ 
/* 1,Roy, 2023-09-09 14:09:00,,,,test */ 
class Comment {
    constructor(id = "", username="", date="", child_id="", parent_id="", pfp="", comment="") {
        this.id = id;
        this.username = username;
        this.date = date;
        this.child_id = child_id;
        this.parent_id = parent_id;
        this.pfp = pfp;
        this.comment = comment;
    }

    saveAsCSV() {
        const csv = `${this.id},${this.username},${this.date},${this.date},${this.child_id},${this.parent_id},${this.pfp},${this.comment}\n`;
        try {
            appendFileSync('.\\src\\pages\\comments.csv', csv);
        } catch (err) {
            console.error(err);
        }
    }
}


const Forum = () => {
    console.log("hi")
    // comments = read_csv();
    const row = new Comment("1", "2", "", "", "","","","");
    row.saveAsCSV();
    return(
        <div className="main-container">
            <h1 className="text">Welcome to the forum! Here you can ask questions, share your ideas, or simply just chat!</h1>
            <div>
                <input placeholder="Add a comment..." className="comment-box"></input>
                <button className="comment-button">Comment</button>
            </div>
        </div>
    )
}

export default Forum;

