// global variable
const takeNoteField = document.getElementById('note-describe')

// display or hide function
const displayOrHide = (id, className, existName) => {
  const element = document.getElementById(id)
  element.classList.add(className)
  element.classList.remove(existName)
}
// show input for take note
const showNoteInput = (name, zihad, kowser) => {
  displayOrHide('show-note', 'd-block', 'd-none')
}

// submit note
const submitNote = () => {
  const note = takeNoteField.value
  pushToLocalStorage(note)
  displayOrHide('show-note', 'd-none', 'd-block')
}

// push to local storage
const pushToLocalStorage = (note) => {
  const id = 'id' + Math.random().toString(16).slice(2)
  const data = getNote()
  console.log(data)
  data[id] = note
  const dataStringfy = JSON.stringify(data)
  localStorage.setItem('note', dataStringfy)
}

// get note from local store
const getNote = () => {
  const allNote = localStorage.getItem('note')
  console.log(allNote)
  let noteObj = JSON.parse(allNote)
  return noteObj
}
