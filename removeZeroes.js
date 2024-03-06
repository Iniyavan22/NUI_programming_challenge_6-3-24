

function removeZeroes(inputString,shift){

    //check whether the input is passed or not
    if (inputString && shift){
        inputString =inputString.split("");

        if(shift === "trailing"){
            let lastZero;
            //looping backwards
            for(let i=inputString.length-1;i>0;i--){
                //updating the lastZeroes index
                if (inputString[i]==="0"){
                    lastZero=i;
                }
                else{
                    break;
                };
            };
            //based on the updation value slicing the list and converting it to string
            const outputString = inputString.slice(0,lastZero).join("");
            return outputString;
        }
        else if(shift === "leading"){
            let lastZero;
            //looping normally
            for(let i=0;i<inputString.length;i++){
                //updating the lastZeroes index
                if (inputString[i]==="0"){
                    lastZero =i+1;
                }
                else{
                    break;
                };
            };
            //based on the updation value slicing the list and converting it to string
            const outputString =inputString.slice(lastZero,inputString.length).join("");
            return outputString;
        };
    }
    else{
        return "argument not passed";
    };
};


const inputString ="000000123423423000";
const shift ="trailing";

if (inputString && shift && !Number.isNaN(inputString)){
    console.log(removeZeroes(inputString,shift));
}
else{
    console.log("please pass the required parameters");
};

 