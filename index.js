class Formatter {
  //add static methods here
  static capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(str){
    let bannedWords = ['the','a','an','but','of','and','for','at','by','from'];
    let strArr = str.split(' ');
    let newArr =[];
    for(let i=0;i < strArr.length;i++){
      if(i === 0){
       newArr.push(this.capitalize(strArr[i]));
      }
      else{
        if(bannedWords.includes(strArr[i])){
          newArr.push(strArr[i])
        }
        else{
          newArr.push(this.capitalize(strArr[i]))
        }
      }
    }
    return newArr.join(' ');
  }

}
