function polybius(input, encode = true) {
    let alphabet = ["a","b","c","d","e","f","g","h","i/j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let polybiusSquare = [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55];
    let loweredInput = input.toLowerCase();
    let finalString = "";
    let spaceCount = 0;
    if(encode == true) {
        
        for(let i = 0; i < loweredInput.length; i++) {
            if(loweredInput[i] === " ") {
                finalString += " ";
                spaceCount++;
            }
            else if(loweredInput[i] === "i" || loweredInput[i] === "j") {
                finalString += 42;
            }
            else {
                for(let j = 0; j < alphabet.length; j++) {
                    if(alphabet[j] === loweredInput[i]) {
                        finalString += polybiusSquare[j];
                    }
                }
            }
        }
    }
    if(encode == false) {
        for(let i = 0; i < loweredInput.length; i+=2) {
            if(loweredInput[i] === " ") {
                finalString += " ";
                spaceCount++;
                i--;
            }
            else if((loweredInput[i] + loweredInput[i+1]) == "42") {
                finalString += "i/j";
            }
            else {
                for(let j = 0; j < polybiusSquare.length; j++) {
                    if((loweredInput[i] + loweredInput[i+1]) == polybiusSquare[j]) {
                        finalString += alphabet[j];          
                    }
                }
            }
           
        } 
        if(!(((finalString.length - spaceCount) % 2) == 0)) {
        return false;
        }
    }
    
    return finalString;
}

module.exports = polybius;
