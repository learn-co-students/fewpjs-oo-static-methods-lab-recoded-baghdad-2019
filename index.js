class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  } 
  static sanitize(str){
   return str.replace(/[^a-zA-Z0-9 '-]/g,"");
  } 
  static titleize(sentence){
    let except=['the','a','an','but','of','and','for','at','by','from']
    let strs=sentence.split(' ')
    let result=[];
   for ( let i=0; i<strs.length;i++){
      if (i===0){
        result.push(this.capitalize(strs[i]))
      }else{
        if (except.includes(strs[i])){
          result.push(strs[i])
        }else{
          result.push(this.capitalize(strs[i]))
        }
      }
    }
    return result.join(" ");
  }
}