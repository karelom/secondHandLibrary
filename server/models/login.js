// 引入mongoose依赖
const mongoose = require('mongoose')

// 连接mongodb数据库
// 参数1：mongodb数据库启动的地址
// 参数2：回调函数，用于判断是否连接成功
mongoose.connect('mongodb://localhost/Test', err => {
  if (err) console.log('*************【資料庫連接失敗】*************')
  else console.log('*************【資料庫連接成功】*************')
})

// 登录模式
const loginSchema = new mongoose.Schema({
  username: String,
  password: String
  // ,userimg: {
  //   type: String,
  //   default: 'avatar0' // 用户默认头像
  // }
})

// 導出模型
module.exports = mongoose.model('Login', loginSchema)