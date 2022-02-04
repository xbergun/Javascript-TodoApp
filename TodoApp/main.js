let userFormDOM = document.querySelector('#userForm');
let todoInputDOM = document.querySelector('#todo');
let submitButtonDOM = document.querySelector('#ekle');

const alertDOM = document.querySelector("#alert");

const ALERT =(message,className) => `<div class="mt-2 text-center alert alert-${className} alert-dismissible fade show" role="alert"> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


console.log(userFormDOM);
console.log(todoInputDOM);
console.log(submitButtonDOM);

submitButtonDOM.addEventListener('click', handleClick);

let items = [];

function handleClick (e)  {
    e.preventDefault();
    let todo = todoInputDOM.value;
    console.log(todo);
    checkInput(todo);

}


function checkInput(todo) {
   

    if (todo) {
        addItem(todo);
        alertDOM.innerHTML = ALERT(`${todo} added!`,"success");

        userFormDOM.reset();
      }else if (todo === "") {
        alertDOM.innerHTML = ALERT("Please enter a todo", "danger");
      }else if (todo == parseInt(todo)) {
        alertDOM.innerHTML = ALERT("Please enter a valid username", "danger");
      }
      else{
        alertDOM.innerHTML = ALERT;
      }
}
    

let userListDom = document.querySelector('#userList');

console.log(userListDom);

const addItem = (todo) => {
    let liDOM = document.createElement("li",);
  
    liDOM.innerHTML = `${todo} 
     <span class="badge bg-primary">${todo.length}</span>
  
  `;
   
    liDOM.classList.add("list-group-item", "list-group-item-action","text-center",);
    userListDom.appendChild(liDOM);

    liDOM.addEventListener('click', function() {
        this.remove();
        alertDOM.innerHTML = ALERT(`${todo} deleted!`,"danger");
    });
  };
  

