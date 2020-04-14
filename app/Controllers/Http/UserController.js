'use strict';

const User = use('App/Models/User');

class UserController {


  async login({request, auth, response}) {
    const {login, password} = request.all();

    try {
      if (await auth.attempt(login, password)) {
        let user = await User.findBy('email', login);
        let token = await auth.generate(user);

        Object.assign(user, token);
        return response.json(user)
      }


    } catch (e) {
      return response.status(401).json({message: 'You are not registered!', user: {login, password}})
    }
  }

  show({auth, params}) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }
  logout({auth, params}) {
    auth.logout()
    return true
  }
}

module.exports = UserController;
