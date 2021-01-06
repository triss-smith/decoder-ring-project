function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25) {
        return false;
    }
    input = input.toLowerCase()
    

    let characterIndex = 0;
    let finalString = "";
    for(let i = 0; i < input.length; i++) {
        let inputCode;
        if((input.charCodeAt(i) === 96 && shift < 0))
            {inputCode = 122;
            shift += 1}

        if(input[i] === " ") {finalString += " "} 
        
        else {
            
            
        characterIndex = inputCode + shift;
        finalString += String.fromCharCode(characterIndex);
        }
    }
    console.log(finalString);
    return finalString;
}

module.exports = caesar;
