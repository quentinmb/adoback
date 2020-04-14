'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route
  .get('users/:id', 'UserController.show')
  .middleware(['auth']);

Route.post('create-account', 'AuthController.signUp').validator("CreateAccount");
Route.post('login', 'UserController.login');
Route.get('logout', 'UserController.logout');


Route.on('/').render('welcome');

/*Route for book crud*/
Route.put('/api/books/:id', 'BookController.update').middleware(['auth']);
Route.delete('/api/books/:id', 'BookController.destroy').middleware(['auth']);
Route.post('/api/books', 'BookController.store').middleware(['auth']);
Route.get('/api/books', 'BookController.index').middleware(['auth']);


Route.group('videos', () => {
  Route.get('/', 'VideoController.all');
  Route.post('/', 'VideoController.store').validator('StoreVideo');
  Route.get('/:title', 'VideoController.findInOwnDatabase');
}).prefix('/api/videos').middleware(['auth']);
