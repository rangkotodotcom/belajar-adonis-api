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

router.get('/', async () => {
  return {
    name: process.env.APP_NAME,
    timezone: process.env.TZ,
    mode: process.env.NODE_ENV
  }
})

router.post('/login', [AuthController, 'login'])
router.post('/register', [AuthController, 'registration'])

