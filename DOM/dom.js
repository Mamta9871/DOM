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
// // console.log(headerTitle);
// // // headerTitle.textContent = 'Hello';
// // // headerTitle.innerText = 'Goodbye';
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'LimeGreen';
// items[3].style.fontWeight = 'bold';

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

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR

let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value='SEND'

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'Green';


// QUERY SELECTORALL
let titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for(let i =0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'LimeGreen';
    even[i].style.backgroundColor = '#ccc';
}