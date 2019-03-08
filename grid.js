let columns = 16;
const WIDTH = 512;
const RGB = 255;

const container = document.querySelector('#container');

drawBorder();
drawGrid();

// Erase grid & redraw in new dimensions
const reset = document.querySelector('button');
reset.addEventListener('click', () => {
	clearGrid();

	// Check user given value for a proper integer
	let dimensions;
	do {
		dimensions = prompt("What N x N grid size would you like?");
	} while(isNaN(dimensions));

	columns = parseInt(dimensions, 10);

    drawBorder();
    drawGrid();
});

function drawBorder() { // Draw boundary box; reset grid dimensions
	container.style.cssText = `border: 1px solid black; width: ${WIDTH}px; height: ${WIDTH}px; display: inline-grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows = repeat(${columns}, 1fr)`;
}

function drawGrid() { // Draw initial grid & add coloring mouseover events to each tile
	for (let i = 0; i < columns * columns; i++) {
		let div = document.createElement('div');
		div.classList.add('tile');
		div.style.cssText = `border: 1px solid gray`;
		
		div.addEventListener('mouseover', () => {
			//div.style.background = 'black';
			let red, green, blue, alpha;
			red = Math.floor(Math.random() * RGB);
			green = Math.floor(Math.random() * RGB);
			blue = Math.floor(Math.random() * RGB);
			alpha = Math.floor((Math.random() * 11) - 1)/ 10;
			div.style.background = `rgba(${red},${green},${blue},${alpha})`;
		});
		container.appendChild(div);
	}
}

function clearGrid() {
	for (let i = 0; i < columns * columns; i++) {  
		let tile = document.querySelector(".tile");
  		tile.parentNode.removeChild(tile);
	} 
}