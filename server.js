const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Notes = require("./routes/Notes")
app.use("/Notes",Notes)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});