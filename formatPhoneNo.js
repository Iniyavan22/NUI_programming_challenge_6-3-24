

function formatPhoneNo(phoneNumber){

    
    // check whether input array is passed or not
    if (phoneNumber){
        //converting to string and then making it as an array
        const phoneNumberArray =phoneNumber.toString().split("");
        if(phoneNumberArray.length===10){
            phoneNumberArray.splice(0,0,"(");
            phoneNumberArray.splice(4,0,")");
            phoneNumberArray.splice(8,0,"-");

            return phoneNumberArray.join("");
        }
        else{
            return "check whether you have entered 10 digits";
        };
    }
    else{
        return "please pass the argument";
    };

    

};


const phoneNumber= 9840164723;

if (phoneNumber && !Number.isNaN(phoneNumber)){
    console.log(formatPhoneNo(phoneNumber));
}
else{
    console.log("please enter the required parameters");
};