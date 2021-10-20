// Middleware
const express = require('express')
const app = express() // main app
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

// 設置跨域訪問
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") // 允許任何來源的跨來源請求
    res.header("Access-Control-Allow-Headers", "X-Requested-With") // 允許的非「簡單」header
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS") // 允許的 HTTP 方法
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next();
});

const posts = require('./routes/posts')
app.use('/posts', posts)

app.listen(9500, () => console.log('************* [伺服器啟動成功] *************'))
