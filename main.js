let btn = document.getElementById("btn");
let listContainer = document.getElementById("listContainer");
let inputField = document.getElementById("inputField");

btn.addEventListener("click", function(){
  var paragraph = document.createElement('p');   // creates new paragraph
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  listContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function(){
    listContainer.removeChild(paragraph);
  })
})