
class Formatter {
    //add static methods here
    static capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        let s = string
        s = s.replace('-', 'QQQQQQ')
        s = s.replace("'", 'WWWW')
        s = s.replace(" ", 'EEEE')
        s = s.replace(/\W/g, '')
        s = s.replace('QQQQQQ', '-')
        s = s.replace('WWWW', "'")
        s = s.replace('EEEE', " ")
        return s
    }

    static titleize(string) {
        let s = string
        s = s.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1));

        let newArray = s;
        function arrayFunction() {
            for (let i = 0; i < newArray.length; i++) {
              if(i>=1){
                if (newArray[i] === 'The' || newArray[i] === 'A' || newArray[i] === 'An' || newArray[i] === 'But' || newArray[i] === 'Of' || newArray[i] === 'And' || newArray[i] === 'For' || newArray[i] === 'At' || newArray[i] === 'By' || newArray[i] === 'From') {
                    newArray[i] = newArray[i].charAt(0).toLowerCase() + newArray[i].substring(1);
                }}

            }
            newArray=newArray.join(' ');
        }
        arrayFunction();
        return newArray
    }
}
