 const open = document.getElementById('open');
 const close = document.getElementById('close');
 const container = document.getElementById('container');

 //Onclick the EventListener opens the container 
 open.addEventListener('click', () => {
     container.classList.add('active'); //id.classList.add()
 });
//Onclick the EventListener closes the container
 close.addEventListener('click', () => {
     container.classList.remove('active'); //id.classList.add()
 });