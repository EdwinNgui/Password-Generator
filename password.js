let generateEl = document.querySelector("#generate-btn")
let pass1 = document.querySelector("#password1")
let pass2 = document.querySelector("#password2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//Generates password
function generatePassword(){
    let randomPass = ""
    for (i = 0; i < 15; i ++){
        randomPass += characters[(Math.floor(Math.random()*characters.length))]
    }
    return randomPass
}

const characterNoSpec = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function generatePasswordLimit(){
    let randomPass = ""
    for (i = 0; i < 15; i ++){
        randomPass += characterNoSpec[(Math.floor(Math.random()*characterNoSpec.length))]
    }
    return randomPass
}

//Updates the passwords
function updatePasswords(){
    const check = document.querySelector("#charOption")
    if (check.checked){
        pass1.textContent = generatePasswordLimit()
        pass2.textContent = generatePasswordLimit()
    }else{
        pass1.textContent = generatePassword()
        pass2.textContent = generatePassword()
    }
    updateButton()
}

//Only called on when generate passwords is used 1st time
function updateButton(){
    generateEl.textContent = "Generate more?"
}

//Allows for onclick copying
function copyText1(){
    navigator.clipboard.writeText(pass1.textContent);
}
function copyText2(){
    navigator.clipboard.writeText(pass2.textContent);
}