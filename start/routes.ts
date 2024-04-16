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

router.post('/login', [AuthController, 'login'])
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
