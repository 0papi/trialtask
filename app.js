// get selector
const button = document.querySelector('.clickBtn');
const inputField = document.querySelector('.userInput');
const searchContainer = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput')

// create fetch input function
const fetchInput = function(e) {
  const input = inputField.value;
  if(input !== '') {
    userData(input); 
    inputField.value = '';
    inputField.focus(); 
    searchContainer.style.display = 'block';
  } else {
    showAlert('Please input something', 'error'); 
    searchContainer.style.display = 'none';
  }

  e.preventDefault();
}

// userData function === display tasks 
const userData = function(input) {   
   // create paragraph element
    const para = document.createElement('p');
    // add classList
    para.classList.add('para');

    // add text content
    para.innerHTML = input;

    // main parent
    const main = document.getElementById('main');
    main.appendChild(para);
}

// showAlert function 
const showAlert = function(msg, className) {
  // create element
  const div = document.createElement('div');
  // add class name
  div.classList.add(`${className}`);

  // add text
  div.innerHTML = `${msg}`;
  // find parent element
  const parent = document.querySelector('.container');
  // sub parent
  const subParent = document.querySelector('.form')
  parent.insertBefore(div, subParent);

  // setTimeout of 3000 and remove alert
  setTimeout(() => removeAlert(), 2000);
}

// remove alert function
const removeAlert = function() {
  const alerts = document.querySelectorAll('.error');

  alerts.forEach(function(alert){
    alert.remove();
  })
}; 


// search
const searchData = function() {
    const searchString = searchInput.value.toLowerCase();
    // get newly created notes
    const notes = Array.from(document.querySelectorAll('.para'));
    // filter notes
   const filteredArr = notes.filter((note) => {
    return note.textContent.toLowerCase().includes(searchString);
    })
    filteredArr.forEach((arr) =>{
      userData(arr.textContent)
    });


    
}; 




// add event listener to search input
searchInput.addEventListener('keyup', searchData);

// add event listener 
button.addEventListener('click', fetchInput);