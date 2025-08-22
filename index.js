const noteJson = localStorage.getItem('notes')
const notes = JSON.parse(noteJson)
const notesContainer = document.querySelector('.notes-container')
const Categoryfilter= document.querySelector('#categoryFilter')

//Render notes

function renderNotes() {
  notes.forEach(createandInsertNoteCard);
}

function createandInsertNoteCard(note) {

const noteCard = document.createElement('div');
noteCard.classList.add('notes-card');

const noteBody = document.createElement('p');
noteBody.innerText = note.body;

const noteCategory = document.createElement('p');
noteCategory.classList.add('cat');
noteCategory.innerText = note.category;

noteCard.appendChild(noteBody);
noteCard.appendChild(noteCategory);

notesContainer.appendChild(noteCard);
}

function populateCategories (){
  // let categories = []
  let categories = notes.map ((note) => {return note.category}); //creating a new array

let uniqueCategories = new Set(categories);

uniqueCategories.forEach((cat) => {
  const option = document.createElement('option');
  option.value = cat;
  option.innerText = cat;

  Categoryfilter.appendChild(option);

})


}

// creating a separate function to insert to the map ()
//function pluckCategory(note) {
  //return note.category;
//}

renderNotes();
populateCategories ();