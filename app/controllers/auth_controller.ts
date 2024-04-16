import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidation } from '#validators/user'

export default class AuthController {
    async login({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.verifyCredentials(email, password)
        const token = await User.accessTokens.create(user!)

        const res = {
            status: true,
            code: 200,
            content: { user, token },
            message: "Success Login"
        }

        response.status(200).send(res)
    }

    async registration({ request, response }: HttpContext) {
        const payload = await request.validateUsing(createUserValidation);
        User.create({
            fullName: payload.name,
            email: payload.email,
            password: payload.password
        });

        const res = {
            status: true,
            code: 200,
            content: [],
            message: "Success Registration"
        }

        response.status(200).send(res)
    }
}