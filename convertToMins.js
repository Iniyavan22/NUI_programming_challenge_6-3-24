

function convertHourToMinutes(inputString){
    
    // check whether input array is passed or not
    if(inputString){
        inputString =inputString.split(":");
        const formatCheck = inputString.length -1;
        let hours=0;
        let mins =0;
        let totalMins =0;
        // it checks only one ":"  is present in the string
        if (formatCheck===1){
            //it checks both sides of string is typeof number
            if (!Number.isNaN(inputString[0]) && !Number.isNaN(inputString[1])){
                hours=parseInt(inputString[0]) *60;
                mins =parseInt(inputString[1]);
                totalMins = hours + mins;
                //checks whether the final addition of the hours and mins is number
                if (!Number.isNaN(totalMins)){
                    return totalMins;
                }
                else{
                    return "Hours is in incorrect format";
                };
            };
        }
        else{
            return "Hours format is in incorrect format";
        };
    }
    else{
        return "argument is not passed";
    };
};

let inputString ="9:30";

if(inputString){
    console.log(convertHourToMinutes(inputString));
}
else{
    console.log("please enter the required parameter");
};