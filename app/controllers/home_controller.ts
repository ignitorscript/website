import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const page = await inertia.render('Home/index')

    return page
  }
}
