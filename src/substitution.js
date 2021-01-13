function substitution(input, alphabet, encode = true) {
    const classicAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let loweredInput = input.toLowerCase();
    let loweredAlphabet = alphabet;
    let finalString = "";
    //checks the length of the alphabet to ensure length is exactly 26.
    if(alphabet.length > 26 || alphabet.length < 26) {
        return false;
    }
    let alphabetArray = alphabet.split("");
    let filteredArray = [];
    //Tests for duplicates in the alphabet. Returns false if there are duplicates.
    for(let i = 0; i < alphabetArray.length; i++) {
        if(filteredArray.includes(alphabetArray[i])) {
            return false;
        }
        else{(filteredArray.push(alphabetArray[i]))}
    }
    if(encode == true) {    
    for(let i = 0; i < loweredInput.length; i++) {
        let inputIteration = loweredInput[i];
        if(inputIteration == " ") {
            finalString += inputIteration;
        }
        else{
            for(let j = 0; j < classicAlphabet.length; j++) {
                if(inputIteration == classicAlphabet[j]) {
                    finalString += loweredAlphabet[j];
                }
            }
        }
    }
}
    if(encode == false) {
        for(let i = 0; i < loweredInput.length; i++) {
            let inputIteration = loweredInput[i];
            if(inputIteration == " ") {
                finalString += inputIteration;
            }
            else{
                for(let j = 0; j < classicAlphabet.length; j++) {
                    if(inputIteration == loweredAlphabet[j]) {
                        finalString += classicAlphabet[j];
                    }
                }
            }
    }

}
console.log(finalString);
return finalString
}

module.exports = substitution;
