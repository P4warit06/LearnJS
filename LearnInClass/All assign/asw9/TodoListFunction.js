class Todo {
  constructor(id, description) {
    ;(this.id = id), (this.description = description)
  }
  getTodo() {
    return { id: this.id, description: this.description }
  }
  setDescription(NewDescription) {
    this.description = NewDescription
  }
}

function TodoList() {
  const todos = []
  function addTodo(description) {
    const id = todos.length + 1
    const todo = new Todo(id, description)
    todos.push(todo)
    return todos.length
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todos) => todos.id === searchId)
  }
  function removeTodo(removeId) {
    const index = this.findIndexTodo(removeId) // ถ้าไม่พบรายการที่ตรงกันจะคืนค่า -1
    if (index !== -1) {
      //ถ้าพบรายการที่ตรงกัน หรือก็คือ Index != ไม่เท่ากับ -1
      todos.splice(index, 1)
    }
  }
  function getTodo() {
    return todos
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodo
  }
}

const todoList = new TodoList()
todoList.addTodo('Learn JavaScript')
todoList.addTodo('Build a Todo App')

console.log(todoList.getTodo()) // Logs the array of todos
console.log(todoList.findTodo(1)) // Finds the Todo with id 1
todoList.removeTodo(1) // Removes the Todo with id 1
console.log(todoList.getTodo()) // Logs the updated array
