const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {createNotification();}); //On click event it creates notification

function createNotification(){
    const notif = document.createElement('div'); //Creates a div element (i.e. nodename)

/*After the element is created, use the element.appendChild() method to insert it to the document. */
    container.appendChild(notif); 
    
/*To create a div with text, use the innerText/innerHTML properties of the element object, in this case 'notif'.*/
    notif.innerText = 'This challenge is crazy!!!';

/*The classList.add() adds CSS class named 'toast' to the notif constant */
    notif.classList.add('toast');

/*The setTimeout() method calls a function after a specified number of milliseconds. The function is only
executed once. */
    setTimeout(() => {notif.remove();}, 3000);
}

/*If you need to repeat execution, use the setInterval() method. The setInterval() method will continue calling 
the function until clearInterval() is called, or the window is closed. Use the clearTimeout() method to prevent
the function from running.*/