const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:587,
        secure:false,
        auth: {
            user: 'aminjonasoev1@gmail.com',
            pass: 'Ai18220507#'
        }
},
  {
    from:'Mailer Test <aminjonasoev1@gmail.com>',
  }
)

const mailer = massege =>{
    transporter.sendMail(massege,(err,info) =>{
        if(err) return console.log(err)
        console.log('Email send:',info)
    })
}

module.exports = mailer



