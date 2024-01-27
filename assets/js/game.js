/*jshint esversion: 6 */

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let score = 0;
let isAlive;


// this function makes the character "jump" by adding then remvoing the class jump
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

// this function grabs the score id and then inserts it into the score tag for it to then be icremented and updated in the next
//function called isAlive()
function updateScore() {
    let scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}





function restartGame() {
    // Reset cactus animation and position
    cactus.style.animationPlayState = "running";
    cactus.style.left = "580px";

    let gameOver = document.getElementById('gameOverOverlay');
    gameOver.style.display = "none";
    // Store the current score in the history array
    
    // Continue the game
    isAlive = setInterval(function () {

        //how the score updates
        score++;
        updateScore();

        //what i learned watching tutorials

        //grabs the "top" value and stores it into a variable essentialy grabing the dinos y value
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        //does the same thing but with the x value
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            // Collision

            // Display the final score
            let finalScoreElement = document.getElementById('finalScore');
            finalScoreElement.textContent = `Final Score: ${score}`;

            gameOver.style.display = "block";

            // Pause the cactus animation
            cactus.style.animationPlayState = "paused";




            // Reset the score
            score = 0;
            updateScore();

            // Stop the game interval
            clearInterval(isAlive);
        }
    }, 100);
}


// this allows the user to jump by pressing down on any key
document.addEventListener('keydown', function (event) {
    jump();
});

//this will allow mobile player to play by adding a on "click" function
document.addEventListener('click', function (event) {
    jump();
});
// Start the game when the page loads
restartGame();

