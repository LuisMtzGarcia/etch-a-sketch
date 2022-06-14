/**
 * Creates a grid of square divs.
 * @param {int} rows 
 * @param {int} cols 
 */
 function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

/**
 * Deletes all the previously created cells, effectively 'cleaning' the page.
 */
function cleanGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

const container = document.getElementById("container");

const size = document.getElementById("size");

size.addEventListener('click', function() {
    let gridSize = prompt("How big the grid?: ");
    cleanGrid();
    gridSize = parseInt(gridSize);
    makeRows(gridSize, gridSize);
    const cells = container.childNodes;

    let color = "red";

    cells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            cell.style['background-color'] = color;
        });
    });
})

