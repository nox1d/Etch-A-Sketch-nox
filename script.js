const container = document.getElementById('grid');

let gridSize = 16*16
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
