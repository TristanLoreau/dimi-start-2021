console.log('Hello user !')
console.log('Try to guess the mystery number.')
console.log('Use "submit(x) to submit a number.')

const mysteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
    if (x < mysteryNumber) {
        console.log('Too small :).')
        document.body.style.backgroundColor ='#25ff40'
        document.body.innerHTML ='<h1>Too small</h1>'

    }
    if (x > mysteryNumber) {
            console.log('Too big :)')
            document.body.style.backgroundColor ='#ff1818'
            document.body.innerHTML ='<h1>Too big</h1>'

    }

    if (x == mysteryNumber) {
                console.log('Congratulations !')
                document.body.style.backgroundColor ='#ffe007'
                document.body.innerHTML ='<h1>Bravo</h1>'
    }
}

const cheat =() => {
    console.log(`The mystery number is ${mysteryNumber}`)
}