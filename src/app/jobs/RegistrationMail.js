const mail = require('../lib/Mail');

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },

    async handle({ data }){
    const { user } = data;
    
    await mail.sendMail({
        from: 'DIO <contato@dio.com.br>',
        to: `${user.name} <${user.email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá, ${user.name}, sua senha é ${user.password}`
    })
    }
}