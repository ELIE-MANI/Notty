const noteJson = localStorage.getItem('notes')
const notes = JSON.parse(noteJson)
const notesContainer = document.querySelector('.notes-container')
const Categoryfilter= document.querySelector('#categoryFilter')

//Render notes

function renderNotes() {

  notesContainer.innerHTML = '';


  //if selected filteris all show all notes, if something else show only relevant notes
  const SelectedCategory = Categoryfilter.value;

  let filteredNotes = notes.filter((note) => {
  
  if(SelectedCategory === 'all'){
    return true;
  }  else{
    return note.category === SelectedCategory
  }

  })
  console.log("filtered category", filteredNotes)
 
  filteredNotes.forEach((note) => {
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
  });
}



function populateCategories (){
  //Extract the categories from the stored notes
  console.log(notes)

//categories should be unique
const categories= notes.map(note => note.category);
console.log(categories)

let uniqueCategories = new Set(categories)
console.log(uniqueCategories)

//loop through the categories and insert them into the categoryfilter select
uniqueCategories.forEach((category) =>{
  // inject to the html
const option = document.createElement('option')
option.value = category;
option.innerText =category;

Categoryfilter.appendChild(option);
})



/*
  // let categories = []
  let categories = notes.map ((note) => {return note.category}); //creating a new array

let uniqueCategories = new Set(categories);

uniqueCategories.forEach((cat) => {
  const option = document.createElement('option');
  option.value = cat;
  option.innerText = cat;

  Categoryfilter.appendChild(option);

})

*/
}

Categoryfilter.addEventListener('change', renderNotes)




renderNotes();
populateCategories ();