// button is clicked:The text from the input box is used to add a list item to the bottom of the list//
//element.addEventListener("type-of-event"/listening for, functionToExecute)
//https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial///
//here the button is the one being clicked so that makes it the element//
const button = document.getElementById("button");
// console.log(button); //make sure to use button as variable, not string, therefore no quotes//
const toDoList = document.getElementById("to-do-list");
function addNewItem() {
  const newItem = document.createElement("li"); //newItem is declared//
  const userInput = document.getElementById("textbox").value;
  document.getElementById("textbox").value = ""; //clears the box//
  newItem.innerHTML = userInput; //newItem access innHTML inside the tags//
  toDoList.appendChild(newItem); //newItem  insert a new node or reposition an existing node as the last child of a particular parent node, appenditem (item I am appending). where.appendchild(what)//
}
// button.addEventListener("click", function)//
button.addEventListener("click", addNewItem);

function removeItem(event) {
  //(event passed through)
  event.target.remove(); //target event property returns the element that triggered the event//
  //remove() because it's a method//
}

toDoList.addEventListener("click", removeItem); //variable used holds the value //
