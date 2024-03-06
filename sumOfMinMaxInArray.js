function sumMinMax(integerArray){

    //check whether the input is passed or not
    if (integerArray){
        let minValue = integerArray[0];
        let maxValue = integerArray[0];

        // looping every element to update the minValue and maxValue by comparing each element in the array
        for(let i=1;i<integerArray.length;i++){
            if (minValue> integerArray[i]){
                minValue = integerArray[i];
            };
            if (maxValue < integerArray[i]){
                maxValue = integerArray[i];
            };
        };

        //finally summing it 
        const sumOfMinAndMax = minValue +maxValue;

        return sumOfMinAndMax;
    }
    else{
        return "argument not passed";
    };

};



const integerArray =  [-4, 2, -1, 11, 16];


if (integerArray){
    console.log(sumMinMax(integerArray));
}
else{
    console.log("please enter the required parameters");
};