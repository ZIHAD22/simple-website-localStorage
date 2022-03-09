// global variable
const takeNoteField = document.getElementById('note-describe')
const showAllNote = document.getElementById('result')
const message = document.getElementById('message')
// display All note
const displayAllNote = async () => {
  const loginInfo = localStorage.getItem('login')
  const guestUser = sessionStorage.getItem('guest')
  console.log(guestUser)
  console.log(loginInfo)
  if (loginInfo || !guestUser) {
    const data = getNote()
    if (Object.keys(data).length !== 0) {
      message.innerHTML = `
    <div id="message">
    <h2 class="text-center my-5 pr-3">Your Note</h2>
    </div>
      `
      showAllNote.textContent = ''
      let i = 0
      for (const note in data) {
        const div = document.createElement('div')
        div.classList.add('col-md-3')
        div.classList.add('col-sm-6')
        div.innerHTML = `
                <div class="row">
                <div class="col-md-6">
                  <label for="note-describe" class="form-label text-secondary"
                    >Note:${++i}</label
                  >
                </div>
                <div class="col-md-6 text-end">
                  <i
                    onclick="deleteNote('${note}')"
                    id="delete"
                    class="fas fa-trash text-secondary"
                  ></i>
                </div>
              </div>

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
  } else {
    location.assign(
      'https://zihad22.github.io/simple-website-localStorage/index.html',
    )
  }
}

// display or hide function
const displayOrHide = (id, className, existName) => {
  const element = document.getElementById(id)
  element.classList.add(className)
  existName && element.classList.remove(existName)
}
// show input for take note
const showNoteInput = () => {
  displayOrHide('show-note', 'd-block', 'd-none')
  displayOrHide('take-note', 'd-none')
}

// submit note
const submitNote = () => {
  const note = takeNoteField.value
  if (note) {
    pushToLocalStorage(note)
    displayOrHide('show-note', 'd-none', 'd-block')
    displayOrHide('take-note', 'd-block', 'd-none')
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

// delete indivisual note
const deleteNote = (id) => {
  const note = getNote()
  let withOutDeletedNote = {}
  // console.log(note[id])
  for (const idOf in note) {
    if (id !== idOf) {
      withOutDeletedNote[idOf] = note[idOf]
    }
  }
  let mainNoteStringify = JSON.stringify(withOutDeletedNote)
  localStorage.setItem('note', mainNoteStringify)
  displayAllNote()
}

// display function call
displayAllNote()
