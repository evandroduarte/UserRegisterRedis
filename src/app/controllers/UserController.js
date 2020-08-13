const passwordGenerator = require('password-generator');
const mailer = require('../lib/Mail');
const Queue = require('../lib/Queue');

module.exports = {
    async store(req, res){
        const {name, email} = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await mailer.sendMail({
            from: 'DIO <contato@dio.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, sua senha é ${user.password}`
        });

        await Queue.add('RegistrationMail', { user });

        return res.json(user);
    }
}