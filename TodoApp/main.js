let userFormDOM = document.querySelector('#userForm');
let todoInputDOM = document.querySelector('#todo');
let submitButtonDOM = document.querySelector('#ekle');

const toastDOM = document.querySelector("#toast");

const ALERT =() => `<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
<div class="d-flex">
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
</div>`


console.log(userFormDOM);
console.log(todoInputDOM);
console.log(submitButtonDOM);

submitButtonDOM.addEventListener('click', handleClick);

let todos = [];

function handleClick (e)  {
    e.preventDefault();
    let todo = todoInputDOM.value;
    console.log(todo);
    checkInput(todo);

}


function checkInput(todo) {
   

    if (todo) {
        addItem(todo);
        toastDOM.innerHTML = ALERT();

        userFormDOM.reset();
      }else if (todo === "") {
        toastDOM.innerHTML = ALERT();
      }else if (todo == parseInt(todo)) {
        toastDOM.innerHTML = ALERT("Please enter a valid username", "danger");
      }
      else{
        toastDOM.innerHTML = ALERT;
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
        toastDOM.innerHTML = ALERT(`${todo} deleted!`,"danger");
    });
  };
  

