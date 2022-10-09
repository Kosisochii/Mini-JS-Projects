const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
});


/*TOGGLE ON/OFF BACKGROUND IMAGE
HTML:
<button id='toggle'>Toggle</button>

CSS:
.bgImgClass{
    background-image: url(pics.jpg), url(pics2.jpg);
}

JS:
let toggle = document.getElementById('toggle');
toggle.addEventListener('click', function(){
    document.body.classList.toggle('bgImgClass')
}) */