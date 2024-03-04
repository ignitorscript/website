import type { HttpContext } from '@adonisjs/core/http'

export default class DocumentationController {
  async index({ inertia }: HttpContext) {
    return inertia.render('Documentation/Index')
  }
}
