var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

ul.addEventListener("click", markDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// add delete button to all existing li elements.
for ( var i = 0 ; i < listItems.length; i++) {
	addDeleteButtons(listItems[i]);
}

// function to add delete button and event listener.
function addDeleteButtons(parent){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", function() {
		this.parentNode.remove();
	});
	parent.appendChild(deleteButton);
}

// Creates new li element and adds delete listener to new delete button
function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
	deleteButton.addEventListener("click", function() {
    ul.removeChild(li);
  });
}

// Checks the length of the user input.
function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(event) {
	event.target.classList.toggle("done");
}
