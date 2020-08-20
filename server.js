const fs = require('fs')
let charset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
let input = 200000
let code = ""
let list = []

console.log((input / 100) / 1000 + " seconds remaining")

if(input <= 0) return console.log("Input must be greater than 0")
//if(input > 1000) return console.log("Input can not be greater that 1,000 at a time")
var i  
for(i = 0; i < input; i++){
    var e 
    for(e = 0; e < 16; e++){
        let num = Math.round(Math.random() * (charset.length - 1))
        let alphanumeric = charset[num]
        code = `${code}${alphanumeric}`
        if(e == 15){
            list.push(`https://discord.gift/${code}`)
            code = ""
        }
    }
}

setTimeout(function(){
    console.log(list);
    let writelist = list.join('\n');
    fs.writeFile('./codedump.txt', writelist, function (err) {
        if (err) return console.log(err);
    });
}, input / 100);