const express = require('express')
const Login = require('../mongoDB')
const Mongoose = require('mongoose')

const router = express() // sub app

// Get User Data
router.get('/', (req, res) => {
    loadUserCollection().find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.status(200).json(result)
        }
    })
});

// Check User Data
router.post('/login', async (req, res) => {
    const acc = req.body.user.acc
    const pw = req.body.user.pw
    // console.log(req.body.user)
    await loadUserCollection().find({
        username: acc,
        password: pw
    }).countDocuments((err, count) => {
        if (err) 
            console.error(err)

        // console.log(count.toString())
        if (count == 1) 
            res.status(200).send("使用者登入成功")
        else 
            res.status(200).send('使用者登入失敗')
    });
});

// Add User Data
router.post('/', async (req, res) => {
    const Login = loadUserCollection()
    const newUser = new Login({
        username: req.body.user.acc,
        password: req.body.user.pw
    })
    await Login.find({
        username: newUser.username,
        password: newUser.password
    }).countDocuments(async (err, count) => {
        if (count < 1) {
            await newUser.save((err) => {
                if (!err) {
                    res.status(201).send('使用者創建成功')
                    return
                }
                res.status(200).send('使用者創建失敗')
                return console.error(err)
            })
        } else {
            res.status(200).send('使用者創建失敗 - [帳戶已存在]')
        }
    })
})

// Delete User Data
router.delete('/:id', async (req, res) => {
    await loadUserCollection().findOneAndDelete({
        _id: req.params.id
    }, (err) => {
        if (err) {
            res.status(200).send('使用者刪除失敗')
            return console.error(err)
        }
    })
    res.status(200).send('使用者刪除成功')
})

// Update User Data
router.put('/', async (req, res) => {
    await loadUserCollection().findOneAndUpdate({
        // find
        _id: '601217e1cc041b4ac8c406ba'
    }, {
        // update
        username: req.body.user.acc,
        password: req.body.user.pw
    }, (err) => {
        if (err) {
            res.status(200).send('使用者更新失敗')
            return console.error(err)
        }
    })
    res.status(200).send('使用者更新成功')
})

// load collection
function loadUserCollection() {
    return Mongoose.model('Login')
}

module.exports = router // for express 3.0+