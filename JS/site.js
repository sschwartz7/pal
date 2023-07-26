//entry point
function getValues() {
    let userString = document.getElementById("userString").value;
    let regex = /[^a-z0-9]/gi; //anything that is not a letter or a number
    userString = userString.replace(regex, "").toLowerCase();
    let palindromeObj = checkForPalindrome(userString);
    displayResults(palindromeObj);
}

//logic
function checkForPalindrome(userString) {
    let revString = '';
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    };
    let palindromObj ={isPalindrome: (revString == userString), reversedString: revString};
    return palindromObj;
}

//display
function displayResults(palindromeObj) {
    if(palindromeObj.isPalindrome == false){
        Swal.fire({
            title:'This is not a palindrome!',
            text: palindromeObj.revString,
            background: '#CD5C5C',
            confirmButtonColor: '#FF6347'
         });
    }else{
        Swal.fire({
            title:'This is a palindrome!',
            text: palindromeObj.revString,
            background: '#9DC183',
            confirmButtonColor: '#01796F'
        });
    }
}
