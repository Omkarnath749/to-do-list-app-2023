const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
let todoArray = [];

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(text.value === ""){
        //alert("hello");

    }else {
        todoArray.push(text.value);
    }
    //console.log(todoArray);
    text.value = "";
    displayTodo();
});

function displayTodo() {

    if (todoArray === null) {
    todoArray = [];
    } else {
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <th scope="row">${ind+1}</th>
    <p class='w-full text-grey-darkest'>${list}</p>
    <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
    </div>`;
    
    });
    listBox.innerHTML = htmlCode;
    }
    }


function deleteTodo(ind) {
    todoArray.splice(ind, 1);
    displayTodo();
}

function edit(ind) {
    saveInd.value = ind;
    text.value = todoArray[ind];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener("click", () => {
    let id = saveInd.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    text.value = "";
    displayTodo();
});


function removeTodo(list) {
    todoArray = [];
    displayTodo();
}


    













