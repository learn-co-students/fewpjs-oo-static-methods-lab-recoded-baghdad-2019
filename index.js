class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
  return str.replace( /[^A-Za-z0-9 '-]/g, '' )
}
  static titleize(str){
    let solution = ''
    let words  = str.split(' ')
    solution += words[0][0].toUpperCase() + words[0].slice(1) 
    let excludedWords = ['the','a','an','but','of','and','for',
      'at', 'by', 'from']
    for (let word of words.slice(1)){
      if (excludedWords.includes(word)){
        solution += ' ' + word
      }
      else{
        solution += ' ' + word[0].toUpperCase() + word.slice(1)
      }
    }
    return solution
  }
}