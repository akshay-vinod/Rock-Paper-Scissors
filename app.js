const game = () => {
    let pScore = 0;
    let cScore = 0;
    //start the game
    const showMatch = () => {
        const playbtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const match = document.querySelector(".match");
        playbtn.addEventListener('click', () => {
            intro.classList.add("fadeOut");
            match.classList.remove("fadeOut");
        });

    };
    //start match
    const playmatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach((option) => {
            option.addEventListener('click', function () {
                //random computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //to find who wins
                winner(option.textContent, computerChoice);
                //update image
                playerHand.src = `./assets/${option.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;

            })
        })


    };
    const winner = (playerChoice, computerChoice) => {
        //if it's a tie
        if (playerChoice === computerChoice) {
            const winnerUpdate = document.querySelector(".winner");
            winnerUpdate.textContent = "It is a tie";
        }
        else if (playerChoice === "rock") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "scissors") {

                winnerUpdate.textContent = "Player Scored";
                pScore++;
                document.querySelector(".player p").textContent = pScore;
                if (pScore === 10) {
                    reset();
                }

            }
            else {
                winnerUpdate.textContent = "Computer Scored";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
                if (cScore === 10) {
                    reset();
                }

            }
        }
        else if (playerChoice === "paper") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "rock") {

                winnerUpdate.textContent = "Player Scored";
                pScore++;
                document.querySelector(".player p").textContent = pScore;
                if (pScore === 10) {
                    reset();
                }

            }
            else {
                winnerUpdate.textContent = "Computer Scored";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
                if (cScore === 10) {
                    reset();

                }

            }
        }
        else if (playerChoice === "scissors") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "paper") {

                winnerUpdate.textContent = "Player Scored";
                pScore++;
                document.querySelector(".player p").textContent = pScore;

                if (pScore === 10) {
                    reset();
                }

            }
            else {
                winnerUpdate.textContent = "Computer Scored";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
                if (cScore === 10) {
                    reset();
                }

            }
        }

    }
    const reset = () => {
        if (pScore === 10) {
            const winnerUpdate = document.querySelector(".winner");
            const modal = document.querySelector(".modal");
            const newgamebtn = document.querySelector(".modal-body button");
            const span = document.getElementsByClassName("close")[0];
            winnerUpdate.textContent = "Player wins";
            //disable btn clicks
            document.querySelector(".options").classList.add("avoid-clicks");
            //update modal Text
            document.querySelector(".modal h4").textContent = "You Won The Game"
            // When the user clicks the button, open the modal
            modal.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            span.addEventListener("click", () => {
                modal.style.display = "none";
            });
            // When the user clicks anywhere outside of the modal, close it
            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
            //when uer click new game
            newgamebtn.addEventListener("click", () => {
                location.reload();
            })


        }
        else {
            const winnerUpdate = document.querySelector(".winner");
            const modal = document.querySelector(".modal");
            const newgamebtn = document.querySelector(".modal-body button");
            const span = document.getElementsByClassName("close")[0];
            winnerUpdate.textContent = "Computer Wins";
            //disable btn clicks
            document.querySelector(".options").classList.add("avoid-clicks");
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            span.addEventListener("click", () => {
                modal.style.display = "none";
            });
            // When the user clicks anywhere outside of the modal, close it
            window.addEventListener("click", (event) => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
            //when uer click new game
            newgamebtn.addEventListener("click", () => {
                location.reload();
            });
        }
    }
    const newGame = () => {

    }
    showMatch();
    playmatch();



};
game();
