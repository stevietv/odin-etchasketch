function createGrid(amountBoxes) {

    const container = document.querySelector('#sketch');

    boxSize = `calc(60vh / ${amountBoxes})`

    for (let index = 0; index < amountBoxes * amountBoxes; index++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.height = boxSize;
        box.style.width = boxSize;
        container.appendChild(box);        
    }

}


function addListeners() {
    const boxes = document.querySelectorAll('.box');
    console.log(boxes.length)

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