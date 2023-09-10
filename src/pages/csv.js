import { appendFileSync } from "fs";


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

const addRow = () => {
    const row = new Comment("2", "Robert", "", "", "","","","");
    row.saveAsCSV();
}

addRow();