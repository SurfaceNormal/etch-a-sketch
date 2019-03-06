const columns = 32;
const width = 512;
const pixelSize = width / columns;

const container = document.querySelector('#container');
container.style.cssText = `border: 1px solid black; width: ${width}px; height: ${width}px; display: inline-grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows = repeat(${columns}, 1fr)`;


for (let j = 0; j < columns; j++) {
	for (let i = 0; i < columns; i++) {
		const div = document.createElement('div');
		div.style.cssText = `border: 1px solid gray`;
		
		div.addEventListener('mouseover', () => {
			div.style.background = 'black';
		});
		container.appendChild(div);
	}
}