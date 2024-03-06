

function checkInRange(inputArray,checkNumber){

    // check whether input array is passed or not
    if (inputArray){
        //sorting the array by comparing each elements
        inputArray.sort(function(a,b){return a-b});
        //checking the input array has only two elements
        if (inputArray.length === 2){
            //comparing 1 and 2 element in the input array whether it falls in range
            if (inputArray[0]<checkNumber && inputArray[1]>checkNumber){      
                return true;
            }
            else{
                return false;
            };
        }
        else{
            return "range array has multiple elements";
        };
    }
    else{
        return "argument is not passed";
    };

};

let inputArray = [1,10];

let checkNumber=9;

if (inputArray && checkNumber){
    console.log(checkInRange(inputArray,checkNumber));
}
else{
    console.log("please enter the required parameters");
};