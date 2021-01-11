function polybius(input, encode = true) {
    let alphabet = ["a","b","c","d","e","f","g","h","i/j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let polybiusSquare = [11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55]
    let loweredInput = input.toLowerCase();
    let finalString = "";
    if(encode === true) {
        for(let i = 0; i < loweredInput.length; i++) {
            if(loweredInput[i] === " ") {
                finalString += " ";
            }
            else if(loweredInput[i] === "i" || loweredInput[i] === "j") {
                finalString += 24;
            }
            else {
                for(let j = 0; j < alphabet.length; i++) {
                    if(alphabet[j] === loweredInput[i]) {
                        finalString += polybiusSquare[j]
                    }
                }
            }
        }
    }
    if(encode === false) {
        for(let i = 0; i < loweredInput.length; i++) {
            if(loweredInput[i] === " ") {
                finalString += " ";
            }
            else if(loweredInput[i] === 24) {
                finalString += "i/j";
            }
            else {
                for(let j = 0; j < polybiusSquare.length; j++) {
                    if(loweredInput[i] === polybiusSquare[j]) {
                        finalString += alphabet[j];
                    }
                }
            }
        }
    }
    return finalString;
}

module.exports = polybius;
