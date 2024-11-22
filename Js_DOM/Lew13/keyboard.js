const inputElement = document.getElementById('input-001')
inputElement.addEventListener('keyup', (event) => {
  console.log(event.code)
  console.log(event.target.value)
})
