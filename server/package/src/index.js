// Middleware
const express = require('express')
const app = express() // main app
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

// 設置跨域訪問
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next();
});

const posts = require('./routes/posts')
app.use('/posts', posts)

app.listen(9500, () => console.log('************* [伺服器啟動成功] *************'))

// const newLogin = new Login({
//   username: "test",
//   password: "1234"
// })
// const doc = newLogin.save(function (err) {
//   if (err) return handleError(err); 
//   // saved!
// })
