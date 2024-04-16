import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.verifyCredentials(email, password)
        const token = await User.accessTokens.create(user!)

        response.status(200).send({ user, token })
    }
}