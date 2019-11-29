class Formatter {
  static capitalize(str){
      return str.charAt(0).toUpperCase()+str.slice(1);
    }
    static sanitize(str){
      return str.replace(/[^A-Za-z0-9 '-]/g, '')
    }
    static titleize(str){
    let exceptions=['the','a','an','but','of','and','for','at','by','from'];
    let newArr=str.split(' ');
    let newArr2=[];
    for(let i=0; i<newArr.length; i++){
      if(i === 0){
       newArr2.push(this.capitalize(newArr[i]));
      }
      else{
      if(exceptions.includes(newArr[i])){
         newArr2.push(newArr[i])
       }
       else {
         newArr2.push(this.capitalize(newArr[i]))
       }}
}
return newArr2.join(' ');
}
}
