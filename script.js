function createGrid(amountBoxes) {

    setGridSizeButton.textContent = `Set Grid Size - ${amountBoxes}`

    boxSize = `calc(60vh / ${amountBoxes})`

    const container = document.querySelector('#sketch');
    container.replaceChildren();

    for (let index = 0; index < amountBoxes * amountBoxes; index++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.height = boxSize;
        box.style.width = boxSize;
        container.appendChild(box);
    }

    addBoxListeners();
}

function addBoxListeners() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                box.classList.add('hover');
            }
        })
    })
}

function addPageListeners() {
    setGridSizeButton.addEventListener('click', setGridSize);
    resetButton.addEventListener('click', () => {createGrid(gridSize)});

    document.addEventListener('mousedown', () => { isMouseDown = true; }, true);    
    document.addEventListener('mouseup', () => { isMouseDown = false; }, true);
}

function setGridSize() {
    gridSize = prompt('What size Grid would you like? Enter a number between 1 and 100');
    gridSize = parseInt(gridSize, 10);

    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    createGrid(gridSize);
}

let isMouseDown = false;
let gridSize = 16;
const setGridSizeButton = document.querySelector('button#setGridSize');
const resetButton = document.querySelector('button#reset');


createGrid(gridSize);
addPageListeners();