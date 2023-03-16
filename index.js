const button = document.querySelector('#Couleur1');
button.addEventListener('click', function () {
    document.body.style.background = "#b6d8f2";
    document.querySelector('nav').style.background = "#f6f7cf";
    document.querySelector('h1').style.color = "#b6d8f2";

});

const button2 = document.querySelector('#Couleur2');
button2.addEventListener('click', function () {
    document.body.style.background = "#b384a7";
    document.querySelector('nav').style.background = "#81657c";
    document.querySelector('h1').style.color = "white";
});

const button3 = document.querySelector('#Couleur3');
button3.addEventListener('click', function () {
    document.body.style.background = "url(img/bois3.jpg)";
    document.querySelector('nav').style.background = "url(img/bois4.png)";
    document.querySelector('h1').style.color = "white";
    document.getElementsByClassName('list').style.background = 'red';
});

const button4 = document.querySelector('#Couleur4');
button4.addEventListener('click', function () {
    document.body.style.background = "#ebf2fa";
    document.querySelector('nav').style.background = "#a4bd01";
    document.querySelector('h1').style.color = "white";
});