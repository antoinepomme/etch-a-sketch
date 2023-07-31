const grid = document.querySelector(".grid");

let gridSize = 400;
let squareSize = 19;
grid.style.width = (Math.sqrt(gridSize) * squareSize) + "px";
console.log((Math.sqrt(gridSize)))

function createGrid (gridSize) {
    for (i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.boxSizing = "border-box";
        square.style.border = "solid grey 1px"
        grid.append(square);
    }
}

createGrid(gridSize);