function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25 || shift == undefined) {
        return false;
    }
    if(encode == false) {
        shift = -shift;
    }
    input = input.toLowerCase();
    

    let characterIndex = 0;
    let finalString = "";
    for(let i = 0; i < input.length; i++) {
        let inputCode = input.charCodeAt(i);
        characterIndex = inputCode + shift;

        if((inputCode < 65  || inputCode > 122)
         ||
        (inputCode > 90 && inputCode < 97)) {            
            finalString += input[i]} 
        
        else {
             
            if((inputCode + shift) <= 96) {
                
                let wrapAround = 97 - (inputCode + shift);
                inputCode = 123 - wrapAround;
            }
            else if((inputCode + shift) >= 123) {
                let wrapAround = 123 - (inputCode + shift);
                inputCode = 97 - wrapAround;
            }
            
            else {inputCode += shift;}
             
             finalString += String.fromCharCode(inputCode)
        }
    }
    return finalString;
    }

    



module.exports = caesar;
