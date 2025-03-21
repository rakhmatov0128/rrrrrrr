`use strict`;
const todoList = [`uxlash`,`yurish`,`ovqatlanish`]
const todoListHTML = ``
 for (let i = 0; i< todoList.length; i++) {
     const todo = todoList[i]
     const html = `<p>${todo}</p>`
    todoListHTML + html
 }

console.log(todoListHTML)
document.querySelector(`.todo-list`).innerHTML = todoListHTML
function gettodo(){
    const todo = document.querySelector(`.get-todo`)
    const name = todo.value
    todoList.push(name)
    todo.value = ``

    console.log(todoList)
}
