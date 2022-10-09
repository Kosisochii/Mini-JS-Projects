const container = document.getElementById('container');

const img = document.querySelector('img');

container.addEventListener('mousemove',(e) => {
    const x = e.clientX - e.target.offsetLeft; //Coordinates region been touched in the pics
    const y = e.clientY - e.target.offsetTop; //Coordinates region been touched in the pics

    img.style.transformOrigin = `${x}px ${y}px`; //Region where the zoom transformation starts from
    img.style.transform = 'scale(2)'; //The  scale(2) is the zoom in
});

//Reset it to default on mouseleave
container.addEventListener('mouseleave',(e) => {
    img.style.transformOrigin = `center center`;
    img.style.transform = 'scale(1)'; //At default scale
});
