"use strict";

const todoList = ['uxlash','ovqat yeyish']
list()
function list() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `<p>${todo}</p>`
        todoListHTML += html
    }

    console.log(todoListHTML)
//
    document.querySelector('.todo-list').innerHTML = todoListHTML
}
function gettodo(){
    const inputElement = document.querySelector('.get-todo')

    const name = inputElement.value
    todoList.push(name)
    console.log(todoList)

    inputElement.value = ''
    list()
}
