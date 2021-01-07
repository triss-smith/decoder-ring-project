function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25) {
        return false;
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
             if(input[i] === "a" && shift < 0) {
                 inputCode = 123;
                }
            if(input[i] === "z" && shift > 0) {
                inputCode = 97;
            }
             inputCode += shift;
             finalString += String.fromCharCode(inputCode)
        }
    }
    console.log(finalString);
    return finalString;
    }

    



module.exports = caesar;
