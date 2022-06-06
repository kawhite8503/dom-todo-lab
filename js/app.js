//cashed element references



const form = document.querySelector('form')
const textBox = document.querySelector('#text-box')
const submitButton = document.querySelector('#submit-button')
const todoList = document.querySelector('#todo-list')
const resetBtn = document.querySelector('#reset-button')

resetBtn.setAttribute('hidden', true)

submitButton.addEventListener('click', function(evt){
  evt.preventDefault()
  init()
})
resetBtn.addEventListener('click', function(evt){
  resetList()
})



function resetList() {
  todoList.remove()
}
//creates new list item
function init(){
  const li = document.createElement('li')
  li.textContent = textBox.value
  while (textBox.value !== "") {
  todoList.appendChild(li)
  textBox.value = ''
  resetBtn.removeAttribute('hidden', false)
}
}