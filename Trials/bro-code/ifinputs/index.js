const myText  = document.getElementById("myText");
const mySubmit  = document.getElementById("mySubmit");
const resultElement  = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
    
    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if (age == 0){
        resultElement.textContent = `You cant enter. You were just born!`;
    }
    else if (age<0){
        resultElement.textContent = `Kindly be serious, how is your age below 0!`;
    }
    else if (age >= 18) {
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else{
        resultElement.textContent = `You are not old enough to enter this site`;
    }
}