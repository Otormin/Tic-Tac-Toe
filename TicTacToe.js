let message = document.getElementById("message")
let placementBtn0 = document.getElementById("placementBtn0")
let placementBtn1 = document.getElementById("placementBtn1")
let placementBtn2 = document.getElementById("placementBtn2")
let placementBtn3 = document.getElementById("placementBtn3")
let placementBtn4 = document.getElementById("placementBtn4")
let placementBtn5 = document.getElementById("placementBtn5")
let placementBtn6 = document.getElementById("placementBtn6")
let placementBtn7 = document.getElementById("placementBtn7")
let placementBtn8 = document.getElementById("placementBtn8")
let playAgainBtn = document.getElementById("playAgain-btn")
let quitBtn = document.getElementById("quit-btn")
let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0]
let announcement = document.getElementById("announcement")
let myModalForTie = document.getElementById("myModalForTie")
let spanForTie = document.getElementsByClassName("closeForTie")[0]
let announcementForTie = document.getElementById("announcementForTie")
let horizontal0 = document.getElementById("horizontal0")
let horizontal3 = document.getElementById("horizontal3")
let horizontal6 = document.getElementById("horizontal6")
let vertical0 = document.getElementById("vertical0")
let vertical1 = document.getElementById("vertical1")
let vertical2 = document.getElementById("vertical2")
let diagonal0 = document.getElementById("diagonal0")
let diagonal2 = document.getElementById("diagonal2")

let rounds = 0
let endGame = false

modal.style.display = "none"
myModalForTie.style.display = "none"

function retrievePlayerOneName(){
    let PlayerOneNameFromLocalStorage = JSON.parse(localStorage.getItem("PlayerOneName"))
    return PlayerOneNameFromLocalStorage
}
let PlayerOneNameFromLocalStorage = retrievePlayerOneName()


function retrievePlayerOneCharacter(){
    let PlayerOneCharacterFromLocalStorage = JSON.parse(localStorage.getItem("PlayerOneCharacter"))
    return PlayerOneCharacterFromLocalStorage
}
let PlayerOneCharacterFromLocalStorage = retrievePlayerOneCharacter()

function retrievePlayerTwoName(){
    let PlayerTwoNameFromLocalStorage = JSON.parse(localStorage.getItem("PlayerTwoName"))
    return PlayerTwoNameFromLocalStorage
}
let PlayerTwoNameFromLocalStorage = retrievePlayerTwoName()


function retrievePlayerTwoCharacter(){
    let PlayerTwoCharacterFromLocalStorage = JSON.parse(localStorage.getItem("PlayerTwoCharacter"))
    return PlayerTwoCharacterFromLocalStorage
}
let PlayerTwoCharacterFromLocalStorage = retrievePlayerTwoCharacter()

message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`

placementBtn0.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }

    rounds = rounds + 1

    // Remove the event listener
    placementBtn0.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn0.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn0.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }

    check()
    if(endGame){
        return
    }
})

placementBtn1.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn1.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn1.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn1.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn2.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn2.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn2.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn2.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn3.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn3.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn3.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn3.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn4.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn4.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn4.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn4.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn5.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn5.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn5.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn5.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn6.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn6.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn6.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn6.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn7.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1

    // Remove the event listener
    placementBtn7.removeEventListener("click", clickHandler);

    if(rounds % 2 === 1){
        placementBtn7.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn7.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

placementBtn8.addEventListener("click", function clickHandler(){
    if(endGame){
        return
    }
    
    rounds = rounds + 1;

    // Remove the event listener
    placementBtn0.removeEventListener("click", clickHandler);
    if(rounds % 2 === 1){
        placementBtn8.innerHTML = `${PlayerOneCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerTwoNameFromLocalStorage}'s turn`
    }
    else{
        placementBtn8.innerHTML = `${PlayerTwoCharacterFromLocalStorage}`
        message.innerHTML = `${PlayerOneNameFromLocalStorage}'s turn`
    }
    
    check()
    if(endGame){
        return
    }
})

function check(){
    let placementBtn0Value = placementBtn0.textContent;
    let placementBtn1Value = placementBtn1.textContent;
    let placementBtn2Value = placementBtn2.textContent;
    let placementBtn3Value = placementBtn3.textContent;
    let placementBtn4Value = placementBtn4.textContent;
    let placementBtn5Value = placementBtn5.textContent;
    let placementBtn6Value = placementBtn6.textContent;
    let placementBtn7Value = placementBtn7.textContent;
    let placementBtn8Value = placementBtn8.textContent;

    // Horizontal
    if(placementBtn0Value === PlayerOneCharacterFromLocalStorage && placementBtn1Value === PlayerOneCharacterFromLocalStorage && placementBtn2Value === PlayerOneCharacterFromLocalStorage){
        horizontal0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn0Value === PlayerTwoCharacterFromLocalStorage && placementBtn1Value === PlayerTwoCharacterFromLocalStorage && placementBtn2Value === PlayerTwoCharacterFromLocalStorage){
        horizontal0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    if(placementBtn3Value === PlayerOneCharacterFromLocalStorage && placementBtn4Value === PlayerOneCharacterFromLocalStorage && placementBtn5Value === PlayerOneCharacterFromLocalStorage){
        horizontal3.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload();
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn3Value === PlayerTwoCharacterFromLocalStorage && placementBtn4Value === PlayerTwoCharacterFromLocalStorage && placementBtn5Value === PlayerTwoCharacterFromLocalStorage){
        horizontal3.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    if(placementBtn6Value === PlayerOneCharacterFromLocalStorage && placementBtn7Value === PlayerOneCharacterFromLocalStorage && placementBtn8Value === PlayerOneCharacterFromLocalStorage){
        horizontal6.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn6Value === PlayerTwoCharacterFromLocalStorage && placementBtn7Value === PlayerTwoCharacterFromLocalStorage && placementBtn8Value === PlayerTwoCharacterFromLocalStorage){
        horizontal6.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    // Vertical
    if(placementBtn0Value === PlayerOneCharacterFromLocalStorage && placementBtn3Value === PlayerOneCharacterFromLocalStorage && placementBtn6Value === PlayerOneCharacterFromLocalStorage){
        vertical0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn0Value === PlayerTwoCharacterFromLocalStorage && placementBtn3Value === PlayerTwoCharacterFromLocalStorage && placementBtn6Value === PlayerTwoCharacterFromLocalStorage){
        vertical0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    if(placementBtn1Value === PlayerOneCharacterFromLocalStorage && placementBtn4Value === PlayerOneCharacterFromLocalStorage && placementBtn7Value === PlayerOneCharacterFromLocalStorage){
        vertical1.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn1Value === PlayerTwoCharacterFromLocalStorage && placementBtn4Value === PlayerTwoCharacterFromLocalStorage && placementBtn7Value === PlayerTwoCharacterFromLocalStorage){
        vertical1.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    if(placementBtn2Value === PlayerOneCharacterFromLocalStorage && placementBtn5Value === PlayerOneCharacterFromLocalStorage && placementBtn8Value === PlayerOneCharacterFromLocalStorage){
        vertical2.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload();
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn2Value === PlayerTwoCharacterFromLocalStorage && placementBtn5Value === PlayerTwoCharacterFromLocalStorage && placementBtn8Value === PlayerTwoCharacterFromLocalStorage){
        vertical2.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    //Diagonal
    if(placementBtn2Value === PlayerOneCharacterFromLocalStorage && placementBtn4Value === PlayerOneCharacterFromLocalStorage && placementBtn6Value === PlayerOneCharacterFromLocalStorage){
        diagonal2.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn2Value === PlayerTwoCharacterFromLocalStorage && placementBtn4Value === PlayerTwoCharacterFromLocalStorage && placementBtn6Value === PlayerTwoCharacterFromLocalStorage){
        diagonal2.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    if(placementBtn0Value === PlayerOneCharacterFromLocalStorage && placementBtn4Value === PlayerOneCharacterFromLocalStorage && placementBtn8Value === PlayerOneCharacterFromLocalStorage){
        diagonal0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerOneNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
    if(placementBtn0Value === PlayerTwoCharacterFromLocalStorage && placementBtn4Value === PlayerTwoCharacterFromLocalStorage && placementBtn8Value === PlayerTwoCharacterFromLocalStorage){
        diagonal0.style.display = "block"

        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcement.innerHTML = `${PlayerTwoNameFromLocalStorage} has won!!`
        modal.style.display = "block"
        
        span.addEventListener("click", function(){
            modal.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }

    //For a draw
    if ((placementBtn0Value === PlayerOneCharacterFromLocalStorage || placementBtn0Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn1Value === PlayerOneCharacterFromLocalStorage || placementBtn1Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn2Value === PlayerOneCharacterFromLocalStorage || placementBtn2Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn3Value === PlayerOneCharacterFromLocalStorage || placementBtn3Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn4Value === PlayerOneCharacterFromLocalStorage || placementBtn4Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn5Value === PlayerOneCharacterFromLocalStorage || placementBtn5Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn6Value === PlayerOneCharacterFromLocalStorage || placementBtn6Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn7Value === PlayerOneCharacterFromLocalStorage || placementBtn7Value === PlayerTwoCharacterFromLocalStorage) &&
        (placementBtn8Value === PlayerOneCharacterFromLocalStorage || placementBtn8Value === PlayerTwoCharacterFromLocalStorage)) 
    {
        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload()
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })

        announcementForTie.innerHTML = `Its a tie!!`
        myModalForTie.style.display = "block"
        
        spanForTie.addEventListener("click", function(){
            myModalForTie.style.display = "none"
        })
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                myModalForTie.style.display = "none"
            }
        }

        endGame = true
        if(endGame){
            return
        }
    }
}