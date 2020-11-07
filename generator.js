

let caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
//selects variables(first is an empty array which will later be used to group other arrays to depending on what user chooses.)



function generatePassword() {

    let passwordString = "";

    //variables for questions.
    let useLowerCase = confirm("Do you want to include lowercase characters?");
    let useUpperCase = confirm("Do you want to include uppercase characters?");
    let useNumeric = confirm("Do you want to include numeric characters?");
    let useSpecial = confirm("Do you want to include special characters?");
    
    //if user answers all questions with false then alert and redo questioning.
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Please select one type of character");
        useLowerCase = confirm("Do you want to include lowercase characters?");
        useUpperCase = confirm("Do you want to include uppercase characters?");
        useNumeric = confirm("Do you want to include numeric characters?");
        useSpecial = confirm("Do you want to include special characters?");
    }
    
    
    //last question
    let passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    //if answer is less than 8 or over 128 or tyoe is not a number or has no value - alert.
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        //ask question again.
        passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 



    //if variables are confirmed push var array into the empty group array - caseArray.
    if (useLowerCase==true){
        caseArray.push(lowerCaseChar);
    }
    if (useUpperCase==true){
        caseArray.push(upperCaseChar)
    }
    if (useNumeric==true){
        caseArray.push(numericChar)   
    }
    if (useSpecial==true){
        caseArray.push(specialChar)
    }


    for(let i = 0; i < passwordLength; i++){
    //loop number that the user chooses. 

        let randomCharArrayNum = parseInt(Math.floor (Math.random() * caseArray.length)); 
        //generate randdom number between 0-1, round down to nearest whole number, times by the number of items in the group array. (convert the strong to a number)
        //added to character array.

        let selectedCharArray = caseArray[randomCharArrayNum]; 
        //make new array of selected items from group array.
        


        let randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
        //variable to store random number based on length of selected array


        let randomChar = selectedCharArray[randomCharNum];
    
    
        passwordString += randomChar; 
        //add and assign result to password string variable.   
    }

    passwordEntry.textContent = passwordString;   
    //print password to text. 
}

//add event of click to button.

let generateButton = document.getElementById("generateButton");
generateButton.addEventListener('click', generatePassword);




