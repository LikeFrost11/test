// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()
//监听一个get请求
app.get('/user', (req, res) => {
    console.log(req.require)//默认情况下是一个空对象
    
    //调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({name: 'zs', age: 20, gender: '男'})//返回json
})
//监听一个post请求
app.post('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
   res.send('请求成功')//返回字符串
})
// 3. 启动服务器
app.listen(80, ()=>{
    console.log('express server runing at http://127.0.0.1');
})