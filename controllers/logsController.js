const express = require("express");
const logs = express.Router();
const logArray = require("../models/log")

logs.get("/", (req ,res)=>{
    res.json(logArray)
})

module.exports = logs