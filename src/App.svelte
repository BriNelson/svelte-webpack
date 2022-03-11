<script>
  import img from "./todo-list-banner.jpeg"
  
  function component() {
  const element = document.createElement('div');

  
  element.innerHTML = _.join(['lodash js module', 'is being imported line 6 of app.svelte'], ' ');

  return element;
}

document.body.appendChild(component());

  let newTodo = ''
  let todoList=[
    {todo: "work" , competed: false},
    {todo: "play" , competed: false},
    {todo: "run" , competed: false},
  ]
function handleClick() {
todoList = [...todoList, {todo: newTodo, competed: false}]
    console.log(todoList)
    console.log('the click listener is working')
    newTodo = ''
  }
  function removeTodo(index) {
    todoList.splice(index, 1)
    todoList = todoList
  }
  function completeTodo(item) {

  item.competed = true
  console.log(todoList)
  todoList = todoList
  }

  function deleteCompleted(){
    todoList.forEach((element, index) => {if( element.competed == true){todoList.splice(index, 1)}})

    todoList = todoList
  }
</script>
<div class="appContainer">
  
<div class="container">
  <img src="{img}" alt="banner">
<form on:submit|preventDefault={handleClick}>
  <div class="row">
    <div class="col">
    <input class="form-control" type="text" bind:value={newTodo}>
    </div>
    <div class = "col">

    <button class="btn btn-primary" >Add Task</button>
  </div>
  
</div>
</form>
<button class="btn btn-primary" on:click={deleteCompleted} >remove completed</button>
<div class="list-group">

{#each todoList as item, index}

  <div class="d-flex flex-row list-group-item" class:status={item.competed}>
    <div class="me-5" > {item.todo}<button type="button" class="btn btn-light">Edit</button>
    </div><button type="button" class="btn btn-danger" on:click={()=>removeTodo(index)} >delete</button><button class='btn btn-success' on:click={()=>completeTodo(item)}>completed</button>
  </div>
{/each}
</div>
</div>
</div>

<style>
.status{
  background-color: rgb(240, 240, 240);
  color: grey;

}

</style>
