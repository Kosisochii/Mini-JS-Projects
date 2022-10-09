const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

//You can test several mouse events like 'click' or 'mouseover'
btn.addEventListener('click', () =>{   //When using addEventListener we don't use 'onclick' for click event calling
    nav.classList.toggle('active'); //The 'active' here is not a keyword but rather a new CSS class selector
    btn.classList.toggle('active'); //The 'active' here is also not a keyword
});
/*The active above just takes the CSS .active class specified in both nav and btn.
Any word can replace it if you choose to.*/