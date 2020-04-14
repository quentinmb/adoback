'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFieldsToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('lastname', 80);
      table.string('firstname', 80);
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('lastname');
      table.dropColumn('firstname');
    })
  }
}

module.exports = AddFieldsToUsersSchema
