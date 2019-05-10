const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomemail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'josemp10@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'josemp10@gmail.com',
        subject: 'Sorry to let you go',
        text: `Goodbye ${name}, hope to see you son`
    })
}

module.exports = {
    sendwelcomemail,
    sendCancelationEmail
}