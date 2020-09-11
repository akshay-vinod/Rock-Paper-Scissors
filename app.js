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
        //if it is a tie
        if (playerChoice === computerChoice) {
            const winnerUpdate = document.querySelector(".winner");
            winnerUpdate.textContent = "It is a tie";
        }
        else if (playerChoice === "rock") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "scissors") {

                winnerUpdate.textContent = "Player Wins";
                pScore++;
                document.querySelector(".player p").textContent = pScore;
            }
            else {
                winnerUpdate.textContent = "Computer Wins";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
            }
        }
        else if (playerChoice === "paper") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "rock") {

                winnerUpdate.textContent = "Player Wins";
                pScore++;
                document.querySelector(".player p").textContent = pScore;
            }
            else {
                winnerUpdate.textContent = "Computer Wins";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
            }
        }
        else if (playerChoice === "scissors") {
            const winnerUpdate = document.querySelector(".winner");
            if (computerChoice === "paper") {

                winnerUpdate.textContent = "Player Wins";
                pScore++;
                document.querySelector(".player p").textContent = pScore;
            }
            else {
                winnerUpdate.textContent = "Computer Wins";
                cScore++;
                document.querySelector(".computer p").textContent = cScore;
            }
        }

    }
    showMatch();
    playmatch();


};
game();