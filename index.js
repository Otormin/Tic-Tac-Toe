let PlayerOneNameInput = document.getElementById("PlayerOneNameInput")
let PlayerOneCharacterInput = document.getElementById("PlayerOneCharacterInput")
let PlayerTwoNameInput = document.getElementById("PlayerTwoNameInput")
let PlayerTwoCharacterInput = document.getElementById("PlayerTwoCharacterInput")
let submitButton = document.getElementById("submitBtn")
let PlayerOneNameError = document.getElementById("PlayerOneNameError")
let PlayerOneCharacterError = document.getElementById("PlayerOneCharacterError")
let PlayerTwoNameError = document.getElementById("PlayerTwoNameError")
let PlayerTwoCharacterError = document.getElementById("PlayerTwoCharacterError")
let SameCharacterError = document.getElementById("SameCharacterError")


function validation(){
    PlayerTwoCharacterError.style.display = "none";
    SameCharacterError.style.display = "none";

    if(!PlayerOneNameInput.value){
        PlayerOneNameError.style.display = "block"
        return false
    }
    if(PlayerOneCharacterInput.selectedIndex === 0){
        PlayerOneCharacterError.style.display = "block"
        return false
    }
    if(!PlayerTwoNameInput.value){
        PlayerTwoNameError.style.display = "block"
        return false
    }
    if(PlayerTwoCharacterInput.selectedIndex === 0){
        PlayerTwoCharacterError.style.display = "block"
        return false
    }
    if(PlayerOneCharacterInput.selectedIndex === 1 && PlayerTwoCharacterInput.selectedIndex === 1){
        SameCharacterError.style.display = "block"
        return false
    }
    if(PlayerOneCharacterInput.selectedIndex === 2 && PlayerTwoCharacterInput.selectedIndex === 2){
        SameCharacterError.style.display = "block"
        return false
    }

    return true
}

function saveName(){
    localStorage.setItem("PlayerOneName", JSON.stringify(PlayerOneNameInput.value))
    localStorage.setItem("PlayerTwoName", JSON.stringify(PlayerTwoNameInput.value))
}
function saveCharacter(){
    localStorage.setItem("PlayerOneCharacter", JSON.stringify(PlayerOneCharacterInput.value))
    localStorage.setItem("PlayerTwoCharacter", JSON.stringify(PlayerTwoCharacterInput.value))
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    if(validation()){
        saveName()
        saveCharacter()
        window.location.href = "TicTacToe.html"
    }
})