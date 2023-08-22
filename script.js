function generateCanvas() {
    container.replaceChildren();
    let cellSize = ((1/pixel) * 100);
    for (i = 0; i < gridSize; i++) {
        gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.width = cellSize + '%'
        gridCell.style.height = cellSize + '%'
        container.appendChild(gridCell);
    }
}

function resizeCanvas() {
    generateCanvas();
    colorCell(mode);
}

let mode = 'default';
console.log(mode);

// Reset button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    generateCanvas();
    colorCell(mode);
});

// Rainbow mode button
const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
    mode = 'rainbow'
    console.log(mode);
    colorCell(mode);
});

// 'Hover' function to color cells

function colorCell(mode) {
    if (mode === 'default') {
        for (let cell of container.children) {
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('colored');
            });
        }
    } else if (mode === 'rainbow') {
        for (let cell of container.children) {
            cell.addEventListener('mouseenter', () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                cell.classList.add('rainbow');
                cell.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
            });
        }
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

// for (let cell of container.children) {
//     cell.addEventListener('mouseenter', () => {
//         cell.classList.add('colored');
//     })
// }
colorCell(mode);