/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import { middleware } from '#start/kernel'

router.get('/', async () => {
  return {
    name: process.env.APP_NAME,
    timezone: process.env.TZ,
    mode: process.env.NODE_ENV
  }
})

router.post('/login', [AuthController, 'login'])
router.post('/register', [AuthController, 'registration'])

router
  .get('note', async ({ auth }) => {
    console.log(auth.user) // User
    console.log(auth.authenticatedViaGuard) // 'api'
    console.log(auth.user!.currentAccessToken) // AccessToken
  })
  .use(middleware.auth({
    guards: ['api']
  }))

