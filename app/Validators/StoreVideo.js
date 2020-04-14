'use strict'

class StoreVideo {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string',
      url: 'required|string|min:3|max:80|unique:videos,url',
    }
  }

  get messages () {
    return {
      'url.unique': 'The url as to be unique !'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      messages: errorMessages
    });
  }
}

module.exports = StoreVideo
