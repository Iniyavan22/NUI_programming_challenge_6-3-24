

function findMissingNumbers(inputArray){

    // check whether input array is passed or not
    if(inputArray){
        // creating a map stores a key as one of the element in the array and value as the distance between two elements
        const referenceDictionary ={};
        inputArray.sort(function(a,b){return a-b});
        // previous count will be the 0th index and currentCount will be one preceding the previous count
        let previousCount =0;
        let currentCount =1;
        //looping till the current count
        while (currentCount<inputArray.length){
            if (inputArray[currentCount]-inputArray[previousCount] > 1){
                // mapping one of the element as key and value will be distance between two elements minus 1 that shows how many elements are missing
                //example [7,9] key-> 7 value->1
                referenceDictionary[inputArray[previousCount]]=inputArray[currentCount]-inputArray[previousCount] -1;
            };
            previousCount+=1;
            currentCount+=1;
        }

        const outputArray=[];
        // iterating the map to push the elements in the output array
        for(let item in referenceDictionary){
            for(let i=1;i<referenceDictionary[item]+1;i++){
                outputArray.push(parseInt(item)+i);
            };
        };
        
        return outputArray;

    }
    else{
        return "argument not passed";
    };
};


const inputArray=[7, 10, 12, 9];

if (inputArray){
    console.log(findMissingNumbers(inputArray));
}
else{
    console.log("please enter the required parameters");
};