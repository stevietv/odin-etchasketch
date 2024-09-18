function createGrid(amountBoxes) {

    const container = document.querySelector('#sketch');

    for (let indexY = 0; indexY < amountBoxes; indexY++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let indexX = 0; indexX < amountBoxes; indexX++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.textContent = indexX + 1;
            row.appendChild(box);
        }

        container.appendChild(row);
    }

}


function addListeners() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hover');
        })
        //,
        // box.addEventListener('mouseleave', () => {
        //     setTimeout(function() {
        //         box.classList.remove('hover');
        //     }, 1000);
        // })
    })

}



createGrid(16);
addListeners();