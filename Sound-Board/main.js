const sounds = ['boo','gasp','tada'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    //Notice below we didn't call 'button' element but rather 'btn' which it's been assigned to.
    btn.classList.add('btn'); //Also this part of the code enables us to be able to style the button.

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn); //This is so the button can be added to the DOM
});

//The code below stops song when another one is played.
function stopSongs(){
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; //This will restart the previous pressed song button rather can continue from where it was paused at.
    });
}