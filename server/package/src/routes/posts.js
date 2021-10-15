const express = require('express')
const Login = require('../mongoDB')
const Mongoose = require('mongoose')

const router = express() // sub app
module.exports = router // for express 3.0+

// Get Posts
router.post('/login', (req, res) => {
    const acc = req.body['acc']
    const pw = req.body['pw']
    const logins = Mongoose.model('Login')
    logins.find({
        username: acc,
        password: pw
    }).countDocuments(function (err, count) {
        if (err) 
            console.log(err)

        // console.log(count.toString())
        if (count == 1) 
            res.status(200).send("使用者登入成功")
        else 
            res.status(200).send('使用者登入失敗')
    });
});

// Add Posts
router.post('/', (req, res) => {
    res.status(200).send('post訪問成功')
});