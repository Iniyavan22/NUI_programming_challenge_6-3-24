

// Encoder function
function encode(inputString,shift){

    //check whether the input is passed or not
    if(inputString && shift){
        let outputString = "";
        
        for(let character of inputString){
            //converting to ascii value
            let characterCode=character.charCodeAt();
            //increment the ascii val
            characterCode+=shift;
            //converting again to character
            outputString+=String.fromCharCode(characterCode);
            
        };
        return outputString;
    }
    else{
        return "argument not passed";
    };

};




// Decoder function
function decode(inputString,shift){

    //check whether the input is passed or not
    if(inputString && shift){
        let outputString = "";
        for(let character of inputString){
            //converting to ascii value
            let characterCode=character.charCodeAt();
            //increment the ascii val
            characterCode-=shift;
            //converting again to character
            outputString+=String.fromCharCode(characterCode);
        };
        return outputString;
    }
    else{
        return "argument is not passed";
    };

};



const inputString = "hello";
const shift =2;


console.log(encode(inputString,shift));
console.log(decode(inputString,shift));