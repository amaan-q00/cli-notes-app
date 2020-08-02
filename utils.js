const fs = require('fs')
const chalk = require('chalk')
//adding a note
const addNotes = (title, body)=> {
  const notes = loadNotes()
  const duplicateNote = notes.find((note)=> {
    return note.title === title
  })
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.bold(`NEW NOTE ${title} ADDED SUCCESSFULLY!`))
  } else {
    console.log(chalk.yellow.bold(`NOTE WITH THE SAME TITLE ALREADY EXIST!!`))
  }
}

//saving  a note
const saveNotes = (notes)=> {
  const savedata = JSON.stringify(notes)
  fs.writeFileSync('Newnote.json', savedata)
}
const loadNotes = () => {
  try {
    const raw = fs.readFileSync('Newnote.json')
    const readable = raw.toString()
    return JSON.parse(readable)
  }
  catch(e) {
    return []
  }
}

//remove notes
const removeNotes = (title)=> {
  const notes = loadNotes()
  const tokeep = notes.filter((note)=> {
    return note.title !== title
  })
  if (tokeep.length === notes.length) {
    console.log(chalk.yellow.bold(`NO NOTE WITH TITLE ${title} FOUND!!`))
  } else {
    saveNotes(tokeep)
    console.log(chalk.red.bold(`NOTE ${title} REMOVED SUCCESSFULLY!!`))
  }
}

//listing all notes
const listNotes = () => {
  const notes = loadNotes()
  for (i = 0; i < notes.length; i++) {
    console.log(chalk.cyan.bold('\t', i+1, ")", notes[i]['title']))
  }
}

//reading a note
const readNotes = (title)=> {
  const notes = loadNotes()
  const toread = notes.find((note)=> note.title === title)
  if (toread) {
    console.log(chalk.cyan.bold('\t', title))
    console.log(chalk.magenta.italic('\n\t', toread.body))
  } else {
    console.log(chalk.red.bold(`NO NOTE NAMED ${title} FOUND!!`))
  }
}

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
}