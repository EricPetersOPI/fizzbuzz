const fs = require('fs')

// const hardCodedData = [1, 2, 3,'a',4]

// fs.readFile('fizzbuzz.txt', 'utf8', function(err, data) {
//     if(err) throw err
//     let dataToCheck = data.split(',')
//     fuzzbizz(dataToCheck)
// })

let newArray = []
const fuzzbizz = data => {
    data.map(x => {
        const numCheck = checkForNumber(Number(x))
        if(numCheck) {
        const fizz = checkFizz(x)
        const buzz = checkBuzz(x)
        if (fizz === 'Fizz' && buzz === 'Buzz') {
            newArray.push('FizzBuzz')
        } else {
            newArray.push(fizz)
            newArray.push(buzz)
        }
    } else {
        newArray.push('Invalid Item')
        }
        return newArray
    }
    )
    console.log('newArray', newArray)
}

const checkFizz = fizz => {
    const check = fizz % 3
    if (check === 0) {
        return 'Fizz'
    } else return `Divided ${fizz} by 3`
}

const checkBuzz = buzz => {
    const check = buzz % 5
    if (check === 0) {
        return 'Buzz'
    } else return `Divided ${buzz} by 5`
}

const checkForNumber = numero => {
    if(!isNaN(numero)) return true
    else return false
}

// fuzzbizz(hardCodedData)
module.exports = fuzzbizz