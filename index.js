class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    let arrOfwords = string.split(" ")
    let arrOfCaptil = arrOfwords.map(e => {
      if (e == arrOfwords[0] || e != "the" && e != "a" && e != "an" && e != "but" && e != "of" && e != "and" && e != "for" && e != "at" && e != "by" && e != "from") {
        return this.capitalize(e)
      } else { return e }
    })

    return arrOfCaptil.join(" ")
  }
}