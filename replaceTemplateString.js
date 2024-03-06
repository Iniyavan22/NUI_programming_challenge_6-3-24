
function replaceTemplateString(string,stringReplace){

    //check whether the input is passed or not
    if (string && stringReplace){
        // looping outer list of the nested list
        for(let i=0;i<stringReplace.length;i++){
            // checking whether two elements in the nested list is defined
            if (stringReplace[i][0] && stringReplace[i][1]){
                let subStringToReplace="#["+stringReplace[i][0]+"]";
                let subStringToReplace1="#["+stringReplace[i][1]+"]";
                // checking one of the element is present in the given string
                if (string.indexOf(subStringToReplace)!==-1){
                    string = string.replace(subStringToReplace,stringReplace[i][1]);
                }
                else if(string.indexOf(subStringToReplace1)!==-1){
                    string = string.replace(subStringToReplace1,stringReplace[i][0]);
                }
                else{
                    return "Word is not present in the given string";
                };
            }
            else {
                return "please enter the required parameters";
            };
        };
        return string;
    }
    else{
        return "argument is not passed";
    };
};


const inputString = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
const nestedList =[["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]];


if (inputString && nestedList){
    console.log(replaceTemplateString(inputString, nestedList));
}
else{
    return "please enter the required parameters";
};