const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let score = 0;
let issAlive;


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



let isAlive = setInterval(function () {

    //how the score updates 
    score++;
    updateScore();

    //this is something i learned watching tutorials 

    //this grabs the CSS value "top" and then it turns it into a number rather than pixels, add console.log
    //to see what values its getting, this is so we can gets its y value

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // same for this aswell except iit grabs the x value rather than y 

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        
        gameOver = document.getElementById('gameOverOverlay');
        gameOver.style.display = "block";

        // Stop the cactus animation
        cactus.style.animationPlayState = "paused";

        score = 0;
        updateScore();

    }
}, 100);



// this allows the user to jump by pressing down on any key , will probably add a click function later on for mobile 
document.addEventListener('keydown', function (event) {
    jump();
});

