const dino = document.getElementById('dino');
let score = 0;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

function updateScore() {
    let scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}

let isAlive = setInterval(function () {
    score++;
    updateScore();

    

}, 100);




document.addEventListener('keydown', function (event) {
    jump();
});

