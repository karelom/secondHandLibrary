const Login = require('./models/login')
const bodyParser = require('body-parser')
const express = require('express')
const Mongoose = require('mongoose')
const app = express()
app.use(bodyParser.json())
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.get('/user/get', (req, res) => {
  res.send('get訪問成功')
})
app.post('/user/post', (req, res) => {
  res.send('post訪問成功')
})
app.post('/user/login', (req, res) => {
  const acc = req.body['acc']
  const pw = req.body['pw']
  const logins = Mongoose.model('Login')
  logins.find()
  .where('username', acc)
  .where('password', pw)
  .countDocuments(function (err, count) {
    if (err) console.log(err)
    if (count > 0) res.send("使用者登入成功")
    else res.send("使用者登入失敗")
  })
})
app.listen(9500, () => console.log('************* [伺服器啟動成功] *************'))

// const newLogin = new Login({
//   username: "karelom",
//   password: "asd250"
// })
// const doc = newLogin.save(function (err) {
//   if (err) return handleError(err); 
//   // saved!
// })
