// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(Document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(Document.all);
// console.log(Document.all[10]);
// Document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(Document.images);


// GetElementById
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'Yellow';

// items.style.backgroundColor = '';

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value='SEND'

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTORALL
// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i =0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM
let itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousELementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'Green';

// createElement

// create a div
let newDiv = document.createElement('div');
// add Class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello 1';

// add attr
newDiv.setAttribute('title','Hello Div');

// create text node
let newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '20px'

container.insertBefore(newDiv, h1);


