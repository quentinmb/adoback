'use strict';
const User = use('App/Models/User');
/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class UserSeeder {
  async run() {
    let users = [
      {email: 'adoback.root@gmail.com', password: 'adoback', username: 'adoback'},
      {email: 'adoback.react@gmail.com', password: 'adoback', username: 'adobackreact'}
    ];

    await users.forEach(userData => {
      User.findOrCreate(
        {email: userData.email},
        {
          email: userData.email,
          password: userData.password,
          username: userData.username
        }
      ).catch(error => error);
      // user.save();
    });
  }
}

module.exports = UserSeeder;
