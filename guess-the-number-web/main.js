const response = document.querySelector('div.response')
  response.remove()

const mysteryNumber = Math.round(Math.random() * 100)


const cloneResponse = (inputValue, commentValue) => {
  const clone = response.cloneNode(true)
  document.body.append(clone)
  clone.querySelector('span.input').innerHTML = inputValue
  clone.querySelector('span.comment').innerHTML = commentValue
}

const submit = (x) => { 
  const input = document.querySelector('input')
  const inputNumber = parseFloat(input.value)

  if (isNaN(inputNumber)) {

    cloneResponse(input.value, `Ceci n'est pas un nombre`)

  }  else if (inputNumber < 0 || inputNumber > 100) {

    cloneResponse(input.value, `Le nombre doit être compris entre 0 et 100.`)

  } else if (inputNumber < mysteryNumber) {
    cloneResponse(input.value, `Trop petit.`)

  } else if (inputNumber > mysteryNumber) {
    cloneResponse(input.value, `Trop grand.`)

  } else if(inputNumber === mysteryNumber) {
    cloneResponse(input.value, `Ouaiiiiis bravo champion !!!`)
    
  }
  input.value = ''
}

document.querySelector('button#submit').onclick = () => {
  submit()
}

document.body.onkeydown =(event) => {
  if (event.key === 'Enter'){
    submit()
  }
}
