const express = require('express');
const JWTVerify = (req, res, next) => {
    // console.log("this is req", req);
    // console.log("this is req", res);
    res.send("hello verify function")
    next()
}

module.exports = JWTVerify;