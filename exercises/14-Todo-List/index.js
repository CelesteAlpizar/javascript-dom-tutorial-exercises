let add = document.querySelector("#addToDo");
add.addEventListener("keyup", function(e){
    if (e.keyCode === 13){
        var tarea = document.createElement("li");
        tarea.innerHTML = add.Value;
        console.log(tarea.innerHTML);
        var myList = document.querySelector("ul");
        myList.appendChild()
    }

});













// //uhdsuiyegfrk

// const button = document.createElement("button");
// button.type = "button";
// button.innerText = "Add Task";
// document.body.appendChild(button);

// button.addEventListener("click", () => {
// 	var addToDoInput = document.getElementById("#addToDo").value;

// 	// Boton agregar

// 	var listItem = document.createElement("li"); // Create li element.
// 	var addToDo = document.createElement("p"); // Create p element.
// 	var text = document.createTextNode(addToDoInput); // Create text for list item.
// 	addToDo.appendChild(text); // Append text to p element.
// 	listItem.appendChild(addToDo); // Append p to list item.
// });

// //   // Create a delete button
// //   var deleteButton = document.createElement("button");
// //   deleteButton.innerHTML = "Delete";
// //   deleteButton.setAttribute("class", "btn delete");
// //   // Your code here
