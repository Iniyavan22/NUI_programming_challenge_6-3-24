
function multiplyNumbers(inputArray){

    // check whether input array is passed or not
    if(inputArray){
        let outputArray=[];
        // number of times to be multiplied
        let iteration = inputArray[1];
        // check whether iteration is greater than 0
        if(inputArray[1]>0){
            for(let i=1;i<iteration+1;i++){
                outputArray.push(i*inputArray[0]);
            };
            return outputArray;
        }
        else{
            return "number of times to be multiplied is less than 0";
        };
    }
    else{
        return "argument  not passed";
    };

};


let inputArray = [8,7];

if (inputArray){
    console.log(multiplyNumbers(inputArray));
}
else{
    console.log("please enter the required pameter");
};