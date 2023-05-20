const Models = require('../database/models')
const bcrypt = require('bcrypt')

const authController = {
    async registor(req, res, next) {
        try {
            if (!req.body) next('no body')

            const { name, email, password } = req.body

            if (!name || !email || !password) {
                return next('this is an error');
            }

            const user = await Models.User.create({
                name, email, password
            })
            if (!user) next('No user create by some error')

            res.status(201).json({ status: 1, data: user })
        } catch (error) {
            next(error)
        }
    },
    async login(req, res, next) {
        const { email, password } = req.body;

        try {
            const user = await Models.User.findOne({ where: { email } });


            if (!user) next('error: no user found')

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) next('Invalid password')


            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController;