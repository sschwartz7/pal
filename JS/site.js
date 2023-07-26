//entry point
function getValues() {
    let userString = document.getElementById("userString").value;
    userString = userString.replace(/ /g, "").toLowerCase();
    let revString= reverseString(userString);
    let answer = checkForPalindrome(userString, revString);
    displayString(answer, revString);
}

//logic
function reverseString(userString) {
    let revString = '';
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return (revString);
}

function checkForPalindrome(userString, revString) {
    let answer;
    for (let index = 0; index < userString.length; index++) {
        if (userString[index] != revString[index]) {
            answer = false;
        }
    }
    return (answer);
}

//display
function displayString(answer, revString) {
    if(answer == false){
        Swal.fire({
            title:'This is not a palindrome!',
            text:  revString,
            background: '#CD5C5C',
            confirmButtonColor: '#FF6347'
         });
    }else{
        Swal.fire({
            title:'This is a palindrome!',
            text:  revString,
            background: '#9DC183',
            confirmButtonColor: '#01796F'
         });
    }
}
