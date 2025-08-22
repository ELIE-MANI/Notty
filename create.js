//check if there are existing notes in local storage and set notes array to that, if not ,an empty array 
let notes = JSON.parse(localStorage.getItem('notes')) || [];

//let notes = []
//const fetchedNotesJson = localStorage.getItem('notes');
//const fetchedNotes = JSON.parse(fetchedNotesJson); 

//if (fetchedNotes !== null){
//  notes = fetchedNotes
//}

// notes = [{"body":"bla bla", "category": "random"}, {"body":"bla bla", "category":"Life"}]

const addNoteForm = document.querySelector('#note-form')
const categoryinput = document.querySelector('#category')
const noteinput = document.querySelector('#note')

addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(noteinput.value, categoryinput.value);

//add notes to array
const noteObject = {"category": categoryinput.value, "body": noteinput.value };
notes.push(noteObject);

//store our notes
localStorage.setItem('notes', JSON.stringify(notes))

// Render our notes


//Clear form input
categoryinput.value = "";
noteinput.value = "";
location.href ='index.html'

})