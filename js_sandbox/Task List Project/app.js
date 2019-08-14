// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// let taskTitle = document.getElementById('task-title')

// // Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = 'white';
// taskTitle.style.padding = '8px';
// // document.getElementById('task-title').style.display = 'none';

// // Change Content
// taskTitle.textContent = 'Task List for BoW WoW';
// taskTitle.innerText = 'My List o\'\ Things';
// taskTitle.innerHTML = '<span>Task List</span>'

// document.querySelector();

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';

// document.querySelector('li:nth-child(3)').style.color = 'green';

// document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// document.querySelector('li:nth-child(even)').style.background = 'grey';


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// // Specifiying local areas instad of globaly 
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// // console.log(lis);

// // console.log(lis[0]);
// // lis[0].style.color = 'red';
// // // console.log(items[0]);
// // // items[0].style.color = 'red';
// // lis[3].textContent = 'Hello';

// // Convert HTML Collection into array

// lis = Array.from(lis);

// // lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li);
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// })

// console.log(lis);
 
// ________________---------------------------

// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// };


// console.log(items);


// Traversing the Dom, Up and Down with Parents and Children

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// Get Children element nodes
// val = list.children;
// val = list.children[0];
// list.children[0].textContent = 'Hello';
// // Children of Children

// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;


// Count Child Elements
// val = list.childElementCount;

// Get Parent Node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //  Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

//  Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// val = listItem.previousElementSibling.previousElementSibling;



// console.log(val);


// ----------------------------------------
// Creating ELements

// const li = document.createElement('li');

// // Add Class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add Attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link Element
// const link = document.createElement('a');

// // Add classes 
// link.className = 'delete item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // add cursor behavor on hover
// link.style.cursor = 'pointer';
// console.log(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// Replace Element

// Create Element
// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';

// // Add text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get Old Heading
// const oldHeading = document.getElementById('task-title');

// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // remove element

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove();

// // remove child element
// list.removeChild(lis[3]);

// // Classes and Attribute
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');

// console.log(val);

//Event Listener

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('hello world');

//   e.preventDefault();
// })


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   // console.log('clicked');


//   let val;

//   val = e;

// // Event Target element
// val = e.target;
// val = e.target.id;
// val = e.target.className;
// val = e.target.classList;

// e.target.innerText = 'Hello';

// val = e.type;
// val = e.timeStamp;

// // Coords event relative to the window
// val = e.clientY;
// val = e.clientX;

// // Coords relative to element
// val = e.offsetY;
// val = e.offsetX;

//   console.log(val);
// }


// //  Mouse Events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);

// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse UP
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
// card.addEventListener('mouseenter', runEvent);

// // Mouse Enter
// card.addEventListener('mouseleave', runEvent);

// // Mouse Over
// card.addEventListener('mouseover', runEvent);

// // Mouse out
// card.addEventListener('mouseout', runEvent);

// MouseMove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);


// heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 128)`;
// } 

//  Keyboard Form Inputs

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// taskInput.value = '';

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);

// // For Focus
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent); 

// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);


// // Input Event
// taskInput.addEventListener('input', runEvent);


// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;


  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
// }



// Event Bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });


// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// Event Delegation

// const deItem = document.querySelector('.delete-item');

// deItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   if(e.target.parentElement.className === 'delete-item secondary-content'){
//   console.log('delete item');
//   }
// }

// if(e.target.parentElement.classList.contains('delete-item')) {
//   console.log('delete item');
//   e.target.parentElement.parentElement.remove();
//   }
// }

// Session Storage set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// // Set Session storage
// // sessionStorage.setItem('name', 'John');

// // remove from storage
// // localStorageStorage.removeItem('name');

// // Get from Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //Clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})