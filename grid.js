const WIDTH = 512;
const RGB = 255;

let columns = 16;

let isColorSet = []; // Used for check in mouseover event
for (let i = 0; i < columns * columns; i++) {
	isColorSet.push = false;
}

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
			if (!isColorSet[i]) { // Randomize color if background is transparent
				let red, green, blue, alpha;
				red = Math.floor(Math.random() * RGB);
				green = Math.floor(Math.random() * RGB);
				blue = Math.floor(Math.random() * RGB);
				//alpha = Math.floor((Math.random() * 11) - 1) / 10;
				div.style.backgroundColor = `rgb(${red},${green},${blue})`;

				isColorSet[i] = true;
			} else { // Darken a preset color by 10%
				let color = RGB_Linear_Shade(-0.1, div.style.backgroundColor);
				div.style.backgroundColor = `${color}`;
			}
		});
		container.appendChild(div);
	}
}

function clearGrid() { // Remove tile nodes & reset color flags
	for (let i = 0; i < columns * columns; i++) {  
		let tile = document.querySelector(".tile");
  		tile.parentNode.removeChild(tile);

  		isColorSet[i] = false;
	} 
}

/* 
Micro Functions (Version 4)
https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js) 
*/
const RGB_Linear_Shade=(p,c)=>{
    var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
}