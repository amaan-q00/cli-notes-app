validate = require('validator')
chalk = require('chalk')
yargs = require('yargs')
utils = require('./utils')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.addNotes(argv.title, argv.body)
  }
})
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.removeNotes(argv.title)
  }
})
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.readNotes(argv.title)
  }
})
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log(chalk.green.bold('ALL NOTES:\n'))
    utils.listNotes()
  }
})
yargs.parse()