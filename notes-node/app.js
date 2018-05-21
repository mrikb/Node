console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')
const argv = yargs.argv;


console.log('Yargs:', argv);
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created! ${note.title}`);
  } else {
    console.log('Note not created!');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  var getNotes = notes.getNote(argv.title);
  if (getNotes) {
    notes.logNote(getNotes);
  } else {
    console.log('Not found');
  }
} else if (command === 'remove') {
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'note removed' : 'note not removed!';
   console.log(message);
} else {
  console.log('Not recognized');
}
