import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create(
      {
        fullName: 'admin',
        email: 'email1@domain.com',
        password: '12345678',
      })
  }
}