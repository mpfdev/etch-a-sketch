const container = document.querySelector('.container');
const btnReset = document.querySelector('#reset');

for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.classList.add('box');
    container.appendChild(div);
}

const allBlocks = document.querySelectorAll('.box');

allBlocks.forEach(block => 
    block.addEventListener('mouseenter', (e) => {
        block.classList.add('hover');
    })
    );

console.log(allBlocks);

btnReset.addEventListener('click', () => {
    allBlocks.forEach(block => {
        block.classList.remove('hover');
    })
})