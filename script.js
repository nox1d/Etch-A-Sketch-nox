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
    colorCell();
}

let mode = 'default';
console.log(mode);

// Reset button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    generateCanvas();
    colorCell();
});

// Default mode button
const defaultBtn = document.getElementById('default');
defaultBtn.addEventListener('click', () => {
    mode = 'default';
    console.log(mode);
    colorCell();
});

// Rainbow mode button
const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
    mode = 'rainbow';
    console.log(mode);
    colorCell();
});

// Darken mode button
const darkenBtn = document.getElementById('darken');
darkenBtn.addEventListener('click', () => {
    mode = 'darken';
    console.log(mode);
    colorCell();
});

// Mode functions
const container = document.getElementById('grid');
let cells = container.children;

function colorMode() {
    if (mode === 'rainbow') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.classList.remove('colored');
        this.classList.add('rainbow');
        this.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
    } else if (mode === 'default') {
        this.classList.remove('rainbow');
        this.style['background-color'] = '';
        this.classList.add('colored');
    }
}


// 'Hover' function to color cells

function colorCell() {
    for (let cell of cells) {
        cell.addEventListener('mouseenter', colorMode);
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


let gridCell;

generateCanvas();
colorCell();