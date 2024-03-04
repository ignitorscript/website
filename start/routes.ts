/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')

const DocumentationController = () => import('#controllers/documentation_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index'])

// documentation
router.get('/docs', [DocumentationController, 'index'])
