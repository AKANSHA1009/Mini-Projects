
//Selecting Element
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//Adding Event listener
todoForm.addEventListener('submit', function (e){
    e.preventDefault();


const taskText = todoInput.value.trim();
if (taskText === '') return;

// Creating element
const li = document.createElement('li');

const span = document.createElement ('span');
span.textContent = taskText;
li.appendChild(span);


span.addEventListener('click', () => {
    li.classList.toggle('completed');
});

// creating delete button  and adding event listener
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete this Task';
deleteBtn.classList.add('delete');
li.appendChild(deleteBtn);

deleteBtn.addEventListener('click', () =>{
li.remove();
});

todoList.appendChild(li);

todoInput.value = '';
});



//Changing Quotes below the page
// Selecting the <p> tag inside the footer
const footerText = document.querySelector('.footer p');

// Select the button
const button = document.getElementById('changeTextBtn');

// Array of texts to cycle through
const quotes = [
   ' “When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho',
    '"Do or do not. There is no try" -Yoda, The Empire Strikes Back',
    '"No task is so humble that it does not offer an outlet for individuality." - William Feather',
    '"Dont focus on the victory, focus on the task."-Erik spoelstra',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    '"Life is what happens when you\'re busy making other plans."',
    '"In the middle of every difficulty lies opportunity."',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    '"The best way to predict your future is to create it."'
  ];
  
  // Variable to track the current quote index
  let currentIndex = 0;
  
  // Add an event listener to the button
  button.addEventListener('click', () => {
    // Increment the index to show the next quote
    currentIndex = (currentIndex + 1) % quotes.length; // Cycle back to 0 when reaching the end
    footerText.textContent = quotes[currentIndex];
  });