// global variable
const takeNoteField = document.getElementById('note-describe')
const showAllNote = document.getElementById('result')
const message = document.getElementById('message')
// display All note
const displayAllNote = () => {
  const data = getNote()
  console.log()
  if (Object.keys(data).length !== 0) {
    message.innerHTML = `
    <div id="message">
    <h2 class="text-center my-5 pr-3">Your Note</h2>
    </div>
      `
    showAllNote.textContent = ''
    let i = 1
    for (const note in data) {
      const div = document.createElement('div')
      div.classList.add('col-md-3')
      div.classList.add('col-sm-6')
      div.innerHTML = `
        <label for="note-describe" class="form-label text-secondary"
                  >Note:${i++}</label
                >
                <textarea
                  class="form-control"
                  id="note-describe"
                  disabled
                  placeholder="Please Provide a Title And Than Describe"
                  rows="4"
                  cols="10"
                >${data[note]}</textarea>
        `
      showAllNote.appendChild(div)
    }
  } else {
    showAllNote.textContent = ''
    message.innerHTML = `
    <div id="message">
    <h2 class="text-center my-5 pr-3">${'No Note Available'}</h2>
    </div>
      `
  }
}

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
  if (note) {
    pushToLocalStorage(note)
    displayOrHide('show-note', 'd-none', 'd-block')
    displayAllNote()
    takeNoteField.value = ''
  }
}

// push to local storage
const pushToLocalStorage = (note) => {
  const id = 'id' + Math.random().toString(16).slice(2)
  const data = getNote()
  data[id] = note
  const dataStringfy = JSON.stringify(data)
  localStorage.setItem('note', dataStringfy)
}

// get note from local store
const getNote = () => {
  const allNote = localStorage.getItem('note')
  let noteObj
  if (allNote) {
    noteObj = JSON.parse(allNote)
  } else {
    noteObj = {}
  }
  return noteObj
}

// clear all note
const clearAllNote = () => {
  localStorage.removeItem('note')
  displayAllNote()

  console.log('clear')
}

displayAllNote()
