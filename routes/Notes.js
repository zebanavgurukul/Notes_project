const express = require("express");
const Notes = express.Router();
const NotesDB   = require("../model/NotesDB")

// 1
Notes.post('/post', (req,res) => {
    let add = {
        Tasks : req.body.Tasks,
        Notes : req.body.Notes,
    }
    NotesDB.post_data(add)
    .then(()=>{
        res.send('insert')
    })
});

module.exports = Notes
