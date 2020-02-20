const express = require("express");
const Notes = express.Router();
const NotesDB   = require("../model/NotesDB")
var sleep = require('system-sleep');
let startTime = new Date(Date.now() + 2000);
let endTime = new Date(startTime.getTime() + 4000);

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
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 3
Notes.get('/get_id/:Notes_id', (req,res) => {
    let Notes_id = req.params.Notes_id
    NotesDB.get_id(Notes_id)
    .then((Response) => {
        res.send(Response)
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

//6 
Notes.get('/notes/:search_value', (req,res) => {
    var search_value = req.params.search_value
    var data = NotesDB.search(search_value)
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        res.send(err)
    })
});

// 7
Notes.post('/postdata',(req,res) => {
    let update = {
        Tasks : req.body.Tasks,
        set_reminder : endTime,
    }
    NotesDB.reminder(update)
    .then(()=>{
        console.log('Time for set reminder your notes!');
        res.send('Time for set reminder your notes!')
    }).catch((err) => {
      res.send(err)
    })
});

// 8
Notes.post('/data/:Notes_id', (req,res) => {
    let Notes_id = req.params.Notes_id
    NotesDB.dataget(Notes_id)
    .then((Response) => {
    var Notes = Response[0]['Notes']
    var updata = {
        Attachments : req.body.Attachments,
        Notes : Notes
    }
    NotesDB.postdata(updata)
    .then(() => {
        res.send('insert')
    })
    }).catch((err) => {
        res.send(err)
    })
});

// 9
Notes.get('/getdata/:Attachments_id', (req,res) => {
    let Attachments_id = req.params.Attachments_id
    NotesDB.get_data(Attachments_id)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 10
Notes.get('/getdata',(req,res) => {
    NotesDB.set_data()
    .then((Response) => {
    Tasks_set_reminder = []
    for (j = 0; j < Response.length; j++){
        var set_reminder = Response[j]['set_reminder']
        var Tasks = Response[j]['Tasks']
        if(set_reminder != null){
            Tasks_set_reminder.push(set_reminder,Tasks)
            console.log(Tasks_set_reminder) 
            sleep(6000);
        } 
    }
    res.send({Tasks_set_reminder});
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Notes
