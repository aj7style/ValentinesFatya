let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

function increaseSize() {
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = (parseFloat(currentSize) * 1.2) + "px";
    yesButton.style.fontSize = newSize;
}

function showUraaa() {
    document.body.innerHTML = `
        <div class="ura-container">
            <h1>Uraaa!</h1>
            <img src="https://media.tenor.com/TEC6z0acIbUAAAAi/cute-bears-love.gif" alt="Cute Bears">
        </div>
    `;
    document.body.style.backgroundColor = "#fdcb6e";
}
