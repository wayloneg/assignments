const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port2 = 3945;

app.use(express.json());

app.use('/bounties', require("./routes/bountyRoutes"))// first argument: 

mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true})
    .then((res, req) => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(port2, () => {
    console.log(`server is running ${port2}`)
})