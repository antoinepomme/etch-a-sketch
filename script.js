const grid = document.querySelector(".grid");

let gridWidth = 40;
let gridHeight = 30;
let squareSize = 19;
grid.style.width = (gridWidth * squareSize) + "px";
grid.style.height = (gridHeight * squareSize) + "px";

function createGrid (gridSize) {
    for (i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.boxSizing = "border-box";
        square.style.borderTop = "solid #AAAAAA 1px"
        square.style.borderRight = "solid #AAAAAA 1px"
        square.onmouseover = () => {
            square.style.backgroundColor = "pink";
        };
        grid.append(square);
    }
}

createGrid(gridWidth * gridHeight);
const button = document.querySelector("button");
button.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridWidth * gridHeight);
});