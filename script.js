//these are the constants i have used in js
const titel = document.getElementById('Title')
const firstname = document.getElementById('firstName')
const lastname = document.getElementById('lastName')
const email = document.getElementById('Email')
const checkbox = document.getElementsByClassName('form-check-input')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')



function validateForm(){
    errorElement.innerText='';
  var messages =[]
  if (titel.value === '--') {
    messages.push('You must select a Title')
  }
  if (firstname.value === '' || firstname.value == null) {
    messages.push('First Name required')
  } 
  if (lastname.value === '' || lastname.value == null){
    messages.push('Last Name required')
  }
  if (email.value === '' || email.value == null){
    messages.push('Email required')
  }


  var howmuch = 0;
  var container = document.getElementById('container');
  var checkbox = container.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach(function(item) {
  if(item.checked){howmuch += 1}
  });
  
  if(howmuch < 2){
    messages.push('Two to three intersts must be selected')
  } else if (howmuch > 3) {
    messages.push('You can only select three intrests max')
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(', ')
  }
  else {
    errorElement.innerText = 'Form is validated'
  }


}
