const squaresPerRow = 16;
const rows = 16;

const container = document.querySelector('#container');
container.style.cssText = 'display: inline-grid; grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';

for (let j = 0; j < rows; j++) {
	for (let i = 0; i < squaresPerRow; i++) {
		const div = document.createElement('div');
		div.style.cssText = 'padding: 15px; border: 1px solid black; margin: 0';
		container.appendChild(div);
	}
}