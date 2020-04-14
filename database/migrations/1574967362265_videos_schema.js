'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideosSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').nullable();
      table.string('url').nullable();
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideosSchema
