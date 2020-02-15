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

// 2
Notes.get('/get', (req,res) => {
    NotesDB.get()
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

// 3
Notes.get('/get_id/:Notes_id', (req,res) => {
    let Notes_id = req.params.Notes_id
    NotesDB.get_id(Notes_id)
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

// 4
Notes.put('/put/:Notes_id', (req,res) => {
    let Notes_id = req.params.Notes_id
    let updata = {
        Tasks : req.body.Tasks,
        Notes : req.body.Notes,
    }
    NotesDB.put(updata,Notes_id)
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
});

// 5
Notes.delete('/delete/:Notes_id',(req,res) => {
    var Notes_id = req.params.Notes_id
    NotesDB.delete_data(Notes_id)
    .then(() => {
        res.send('delete')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Notes
