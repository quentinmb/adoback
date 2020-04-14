'use strict'

class CreateAccount {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|unique:users,email',
      lastname: 'required|string|min:3|max:80|unique:users,username',
      firstname: 'required|string|min:3|max:80',
      password: 'required'
    }
  }

  get messages () {
    return {
      'lastname.unique': 'The username as to be unique !',
      'email.unique' : 'too'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      messages: errorMessages
    });
  }
}

module.exports = CreateAccount;
