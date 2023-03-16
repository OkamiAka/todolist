const lists = document.querySelector(".alllist");
let idlist = 0;
let idtextlist = 0;
let idsouslist = 0;
let color = "";
const button = document.querySelector('#Couleur1');
button.addEventListener('click', function () {
    document.body.style.background = "#b6d8f2";
    document.querySelector('nav').style.background = "#f6f7cf";
    document.querySelector('h1').style.color = "#b6d8f2";    
    color=button.id;
    colorlist(color);

});

const button2 = document.querySelector('#Couleur2');
button2.addEventListener('click', function () {
    document.body.style.background = "#b384a7";
    document.querySelector('nav').style.background = "#81657c";
    document.querySelector('h1').style.color = "white";
    color=button2.id;
    colorlist(color);
});

const button3 = document.querySelector('#Couleur3');
button3.addEventListener('click', function () {
    document.body.style.background = "url(img/bois3.jpg)";
    document.querySelector('nav').style.background = "url(img/bois4.png)";
    document.querySelector('h1').style.color = "white";
    color=button3.id;
    colorlist(color);
});

const button4 = document.querySelector('#Couleur4');
button4.addEventListener('click', function () {
    document.body.style.background = "#ebf2fa";
    document.querySelector('nav').style.background = "#a4bd01";
    document.querySelector('h1').style.color = "white";
    color=button4.id;
    colorlist(color);
});
function creatlist() {
    idlist++;

    const list = document.createElement("div");
    list.setAttribute("id", `list-${idlist}`)
    list.classList.add("list");
    lists.appendChild(list);

    const titlelist = document.createElement("h2");
    titlelist.classList.add("titlelist");
    titlelist.textContent = prompt("Nom de la liste:");
    list.appendChild(titlelist);

    const buttonaddlist = document.createElement("button");
    buttonaddlist.classList.add("add");
    buttonaddlist.textContent = "+"
    buttonaddlist.setAttribute("onclick", `creattextlist("list-${idlist}")`)
    list.appendChild(buttonaddlist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = 'X';
    list.appendChild(buttonsuptextlist);

    colorlist(color);
}

function creattextlist(listid) {
    idtextlist++;
    const listtext = document.querySelector(`#${listid}`);

    const textlist = document.createElement("details");
    textlist.setAttribute("id", `text-${idtextlist}`)
    textlist.setAttribute("open","");
    textlist.classList.add("textlist");
    listtext.appendChild(textlist);

    const nomlist = document.createElement("summary");
    nomlist.classList.add("nomlist");
    nomlist.textContent = prompt("ajoute:");
    textlist.appendChild(nomlist);

    const buttonaddtextlist = document.createElement("button");
    buttonaddtextlist.classList.add("add");
    buttonaddtextlist.textContent = "+";
    buttonaddtextlist.setAttribute("onclick", `creatsouslist("text-${idtextlist}")`)
    nomlist.appendChild(buttonaddtextlist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = 'X';
    nomlist.appendChild(buttonsuptextlist);
}
function creatsouslist(souslistid){
    idsouslist++;

    const listsous = document.querySelector(`#${souslistid}`);

    const souslist = document.createElement("dd");
    souslist.setAttribute("id", `sous-${idsouslist}`)
    souslist.classList.add("souslist");
    souslist.textContent = prompt(`sous ajoute`)
    listsous.appendChild(souslist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = 'X';
    souslist.appendChild(buttonsuptextlist);
}
function colorlist(color) {

    const modifColorList = document.getElementsByClassName('list');
    for (let i = 1; i <= modifColorList.length; i++) {
        if (color == "Couleur1") {
            document.querySelector(`#list-${i}`).style.background = '#f6f7cf';
        }else if (color == "Couleur2") {
            document.querySelector(`#list-${i}`).style.background = '#81657c';
        }else if (color == "Couleur3") {
            document.querySelector(`#list-${i}`).style.background = '#F3E779';
        }else if (color == "Couleur4") {
            document.querySelector(`#list-${i}`).style.background = '#a4bd01';
        } else {
            document.querySelector(`#list-${i}`).style.background = 'gray';
        }
    }



}