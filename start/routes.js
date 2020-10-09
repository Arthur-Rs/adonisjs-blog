'use strict'

const Route = use('Route')

Route.get('/', 'PostController.index')
Route.resource('/user', 'UserController')
Route.resource('/session', 'SessionController')
Route.resource('/post', 'PostController')
