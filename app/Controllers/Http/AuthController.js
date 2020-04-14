'use strict';

const User = use('App/Models/User');

class AuthController {

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

  async signIn (user, response, auth) {
    const {email, password} = user;

    if (await auth.attempt(email, password)) {
      let user = await User.findBy('email', email);
      let token = await auth.generate(user);

      Object.assign(user, token);
      return response.json(user)
    }
  }

  async signUp({request, auth, response}) {
    const {lastname, firstname, email, password} = request.all();

    const user = new User();
    user.lastname = lastname;
    user.firstname = firstname;
    user.username = lastname;
    user.email = email;
    user.password = password;

    await user.save();
    user.password = password;

    return await this.signIn(user, response, auth);
  }

}

module.exports = AuthController;
