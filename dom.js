// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.head);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
//  var headerTitle=document.getElementById('header-title');
//  var header=document.getElementById('main-header');

// //  console.log(headerTitle);
// // // headerTitle.textContent='Hello';
//  console.log(headerTitle.innerText);
//  headerTitle.textContent='hello world';
// // headerTitle.innerText='goodbye';
// // headerTitle.innerHTML='<h1>Helllo</h1>';
// //headerTitle.style.borderBottom="solid 3px #000";
// header.style.borderBottom='Solid 3px #000';
// console.log(document.getElementById);
// var items=document.getElementsByClassName('list-group-item');
//  console.log(items);
//  console.log(items[1]);
//  //items[1].textContent='Hello 2';
//  //items[1].style.fontWeight='bold';
//  //items[1].style.backgroundColor='yellow';
// //  for(var i=0;i<items.length;i++){
// //     items[i].style.backgroundColor='#f4f4f4';
// //  }
// items[3].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//         items[i].style.fontWeight='bold';
//      } 
//var li=document.getElementsByTagName('li');
// li[1].textContent='Hello';
// for(var i=0;i<li.length;i++){
//         li[i].style.backgroundColor='#f4f4f5';
//      }
//console.log(document.getElementsByTagName(li[4]));

//quesryselector

// var header=document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// var thirdItem=document.querySelector
// ('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';

// var titles=document.querySelectorAll('.title');
// console.log(titles);

// titles[1].style.color='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//traversing the dom
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor="#f4f4f4";

//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';


// console.log(itemList.firstChild);
// console.log(itemList.lastChild);
// itemList.firstElementChild.textContent='Hello';



//console.log(itemList.nextSibling);

// console.log(itemList.previousSibling);

//  console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='green';

// creatElement

//create a div
// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello Div');

// //create text node
// newDivtext=document.createTextNode('hello');
// newDiv.appendChild(newDivtext);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv,h1);

//add hello befor li

// var parentNode =document.getElementById('items');

// parentNode.innerHTML='<li>hello</li>'+parentNode.innerHTML;
// console.log(parentNode);



//add item and delete button in li part

var form=document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

//filter item
filter.addEventListener('keyup',filterItems);

//form submit event

//form.addEventListener('submit', addItem);
form.addEventListener('submit', addItem,addItem);


// deletem item

itemList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input
    var newItem=document.getElementById('item').value;
    var newItem1=document.getElementById('description').value;
    //create li elemnt
    var li=document.createElement('li');

    //add class

   li.className='list-group-item';

   //add text node with input value

   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(newItem1))
   //create del btn

   var deletebtn=document.createElement('button');

   //add class  to del button

   deletebtn.className='btn btn-danger btn-sm float-right delete';

   //append text node
   deletebtn.appendChild(document.createTextNode('X'));
 
   //append button to li

   li.appendChild(deletebtn);

   //append li to list

   itemList.appendChild(li);

}

// remove Item

function removeItem(e){
   if(e.target.classList.contains('delete')){
       if(confirm('are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
   }
}


//filter functiom

function filterItems(e){
    //  convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');

    //convert to an array
   // Array.from(items).forEach(function(description)){
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || description.toLowerCase().indexOf(description)!= -1){
            item.style.display ='block';
        }else{
            item.style.display='none';
        }
    });
   
}