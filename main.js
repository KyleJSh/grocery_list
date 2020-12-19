let btn = document.getElementById("btn");
let listContainer = document.getElementById("listContainer");
let inputField = document.getElementById("inputField");

btn.addEventListener("click", function(){
  var paragraph = document.createElement('p');   // creates new paragraph
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;   // pass input field value into paragraph
  listContainer.appendChild(paragraph);
  inputField.value = "";   // removes value from input field upon submission
  paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";   // strikesthrough item with one click
  })
  paragraph.addEventListener("dblclick", function(){
    listContainer.removeChild(paragraph);     // removes item with double click
  })
})