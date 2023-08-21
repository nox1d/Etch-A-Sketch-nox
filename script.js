function resizeCanvas() {
    container.replaceChildren();
    let cellSize = ((1/pixel) * 100);
    console.log(cellSize);
    for (i = 0; i < gridSize; i++) {
        gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.width = cellSize + '%'
        gridCell.style.height = cellSize + '%'
        container.appendChild(gridCell);
    }
    for (let cell of container.children) {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('colored');
        });
    }
}

// Resize canvas button
const btn = document.getElementById('resize');
let pixel;
let gridSize = 16*16;
btn.addEventListener('click', () => {
    let resizePrompt = prompt('Enter the amount of pixel you want for each side (e.g. 16 -> 16x16), max = 100');

    if (resizePrompt === null) {
        return;
    } else if (!parseInt(resizePrompt) || parseInt(resizePrompt) < 1) {
        alert('Invalid, must be a positive number!');
        return;
    } else if (parseInt(resizePrompt) > 100) {
        alert('The amount you have entered is above 100, too large');
        return;
    }
    pixel = parseInt(resizePrompt);
    gridSize = pixel*pixel;
    resizeCanvas();
    return pixel;
});

// Default state
const container = document.getElementById('grid');

let gridCell;

for (i = 0; i < gridSize; i++) {
    gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    container.appendChild(gridCell);
}

for (let cell of container.children) {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('colored');
    });
}