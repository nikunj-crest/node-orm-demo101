const Models = require('../database/models')

const authController = {
    async registor(req, res, next) {
        try {
            if (!req.body) next('no body')

            const { name, email, password } = req.body

            const user = await Models.User.create({
                name, email, password
            })
            if (!user) next('No user create by some error')

            res.status(201).json({ status: 1, data: user })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController;