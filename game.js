function fall() {
    velocity += gravity;
    planeY += velocity;
    plane.style.top = planeY + "px";
    movePipes();
    frameCount++;
    if (frameCount % spawnRate == 0) {
        createPipe();
    }

    if (checkCollision()) {
        gameOver();
        return;
    }
    const isOutOfBound = planeY > game.clientHeight || planeY < 0;
    if (isOutOfBound) {
        gameOver();
    }
}
function gameOver() {
    clearInterval(gameInterval);
    start.style.display = "block";
    start.style.backgroundColor = "red";
    start.textContent = "Game Over!";
    planeY = 180;
    plane.style.top = planeY + "px";
    game.querySelectorAll(".pipe").forEach((pipe) => pipe.remove());
    score = 0;
    document.getElementById("score-display").textContent = "Score: " + score;
}

function checkCollision() {
    let planeRect = plane.getBoundingClientRect();

    for (let pipe of pipes) {
        let topRect = pipe.top.getBoundingClientRect();
        let bottomRect = pipe.bottom.getBoundingClientRect();

        if (
            rectOverlap(planeRect, topRect) ||
            rectOverlap(planeRect, bottomRect)
        ) {
            return true;
        }
    }
    return false;
}

function rectOverlap(rect1, rect2) {
    return !(
        rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top
    );
}
game.addEventListener("click", function () {
    velocity = jumpStrength;
});
export { fall, checkCollision, gameOver };