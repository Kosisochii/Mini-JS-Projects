const text = 'My viewers on Twitch are the best!!!';

//The code below allows the text show up letters by letters from 0 till the end
let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index); //The text is sliced from 0 to index
    index++;  //In which index++ increases gradually revealing the texts out
    if (index > text.length){ //But if the index is greater than text.length, restart it from 0
        index = 0;  //It restarts the text all over again once the above condition is met.
    }
}
setInterval(writeText, 100); //We want 'each' letters of the text to write every 100ms
