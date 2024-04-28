const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 3001
let user = undefined

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/index',(req,res) =>{
    if(!req.body.email || !req.body.pass) return res.sendStatus(400)
    const massege = {
    to: req.body.email,
    subject:'Congratulation! You are successfully registered to our site!',
    text:`Поздравляем! Вы успешно ззарегестрировались на наш сайт!
    
    данные вашей учётной записи:
    login: ${req.body.email}
    password: ${req.body.pass}
    
    Данное письмо не требует ответа.`,

}
    mailer(massege)
    user = req.body 
    res.redirect('/index')
    
})
app.get('/index',(req,res) =>{
    if(typeof user !== 'object') return res.sendFile(__dirname + '/index.html')
    res.send(`Registration done! Info sended to email:${user.email}`)
    user = undefined

})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/index`))