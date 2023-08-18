const container = document.getElementById('grid');

let gridSize = 16*16

for (i = 0; i < gridSize; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    container.appendChild(gridCell);
}