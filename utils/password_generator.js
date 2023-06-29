// define generatePassword function
function generatePassword(options) {
  // check password length if legal
  if (!options.length)
    return 'Please enter password length.'
  
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection.push(...lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection.push(...upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection.push(...numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection.push(...symbols.split(''))
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generating password
  let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }
  // return the generated password
  return password
}

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = { generatePassword }