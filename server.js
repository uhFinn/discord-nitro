const fs = require('fs')
let charset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
module.exports = (input) => {
    let list = []

    if(input <= 0){
        console.log(`DiscordNitro >  Input must be greater than 0, your input was: ${input}`)
        return [`DiscordNitro >  Input must be greater than 0, your input was: ${input}`]
    }
    if(input > 1000000){
        console.log(`Currently inputs may not be greater than 1,000,000 codes at a time, You tried to generate ${input} codes\nThe code limit will be increased in future updates!`)
        return ["Currently inputs may not be greater than 1,000,000 codes at a time"]
    }
    for(let i = 0; i < input; i++){
        let code = "";
        for(let e = 0; e < 16; e++){
            let index = Math.round(Math.random() * (charset.length - 1))
            let alphanumeric = charset[index]
            code += alphanumeric
        }
        list.push(`https://discord.gift/${code}`)
    }
    return list
}
