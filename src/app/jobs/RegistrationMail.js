const mail = require('../lib/Mail');

module.exports = {
    key: 'RegistrationMail',
    options: {

    },
    async handleRegistration({ data }){
    const { user } = data;
    
    await mailer.sendMail({
        from: 'DIO <contato@dio.com.br>',
        to: `${user.name} <${user.email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá, ${user.name}, sua senha é ${user.password}`
    })
    }
}