const lists = document.querySelector(".alllist");
let idlist = 0;
let idtextlist = 0;
let idsouslist = 0;
let color = "";
const button = document.querySelector('#Couleur1');
button.addEventListener('click', function () {
    const bgbody = "#b6d8f2";
    const bgnav = "#f6f7cf";
    document.body.style.background = bgbody;
    document.querySelector('nav').style.background = bgnav;
    document.querySelector('h1').style.color = bgbody;
    document.querySelector('h1.titre').style.color = "black";
    document.querySelector('h1.titre').style.background = bgnav;
    document.querySelector('button#Ajouter').style.background = bgbody;
    document.querySelector('button.Ajouter').style.background = bgnav;
    document.querySelector('button#Ajouter').style.color = "black";
    document.querySelector('button.Ajouter').style.color = "black";
    color = button.id;
    colorlist(color);

});

const button2 = document.querySelector('#Couleur2');
button2.addEventListener('click', function () {
    const bgbody = "#b384a7";
    const bgnav = "#81657c";
    document.body.style.background = bgbody;
    document.querySelector('nav').style.background = bgnav;
    document.querySelector('h1').style.color = "white";
    document.querySelector('h1.titre').style.background = bgnav;
    document.querySelector('button#Ajouter').style.background = bgbody;
    document.querySelector('button.Ajouter').style.background = bgnav;
    document.querySelector('button#Ajouter').style.color = "white";
    document.querySelector('button.Ajouter').style.color = "white";
    color = button2.id;
    colorlist(color);
});

const button3 = document.querySelector('#Couleur3');
button3.addEventListener('click', function () {
    const bgbody = "url(img/bois3.jpg)";
    const bgnav = "url(img/bois4.png)";
    document.body.style.background = bgbody;
    document.querySelector('nav').style.background = bgnav;
    document.querySelector('h1').style.color = "white";
    document.querySelector('h1.titre').style.color = "white";
    document.querySelector('h1.titre').style.background = bgnav;
    document.querySelector('button#Ajouter').style.background = bgbody;
    document.querySelector('button.Ajouter').style.background = bgnav;
    document.querySelector('button#Ajouter').style.color = "black";
    document.querySelector('button.Ajouter').style.color = "white";
    color = button3.id;
    colorlist(color);
});

const button4 = document.querySelector('#Couleur4');
button4.addEventListener('click', function () {
    const bgbody = "#ebf2fa";
    const bgnav = "#a4bd01";
    document.body.style.background = bgbody;
    document.querySelector('nav').style.background = bgnav;
    document.querySelector('h1').style.color = "white";
    document.querySelector('h1.titre').style.background = bgnav;
    document.querySelector('button#Ajouter').style.background = bgbody;
    document.querySelector('button.Ajouter').style.background = bgnav;
    document.querySelector('button#Ajouter').style.color = "black";
    document.querySelector('button.Ajouter').style.color = "white";
    color = button4.id;
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
    buttonaddlist.textContent = ""
    buttonaddlist.setAttribute("onclick", `creattextlist("list-${idlist}")`)
    list.appendChild(buttonaddlist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = '';
    buttonsuptextlist.setAttribute("onclick", `suppression("list-${idlist}")`)
    list.appendChild(buttonsuptextlist);


    colorlist(color);
}

function check(ch, chid) {
    if (document.querySelector(`#${ch}`).className == "check") {
        document.querySelector(`#${ch}`).className = "no-check"
        document.querySelector(`#${chid}`).className = "no-check"
    } else {
        document.querySelector(`#${ch}`).className = "check"
        document.querySelector(`#${chid}`).className = "check"
    }
}
function creattextlist(listid) {
    idtextlist++;
    const listtext = document.querySelector(`#${listid}`);
    
    const textlist = document.createElement("div");
    textlist.setAttribute("id", `text-${idtextlist}`)
    textlist.setAttribute("open", "");
    textlist.classList.add("no-check");
    listtext.appendChild(textlist);
    
    const nomlist = document.createElement("p");
    nomlist.classList.add("nomlist");
    textlist.appendChild(nomlist);
    
    const check = document.createElement("button");
    check.classList.add("no-check");
    check.setAttribute("id", `check-${idtextlist}`)
    check.setAttribute("onclick", `check("text-${idtextlist},check-${idtextlist}")`)
    check.textContent = "";
    nomlist.appendChild(check);
    
    const textnom = document.createElement("p");
    textnom.classList.add("textnom");
    textnom.textContent = prompt("ajoute:");
    nomlist.appendChild(textnom);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = '';
    buttonsuptextlist.setAttribute("onclick", `suppression("text-${idtextlist}")`)
    nomlist.appendChild(buttonsuptextlist);
    if (textnom.textContent==null||textnom.textContent=='') {
        suppression(`text-${idtextlist}`,"yes")
    }
}
function creattextlistplus(listid) {
    idtextlist++;
    const listtext = document.querySelector(`#${listid}`);

    const textlist = document.createElement("details");
    textlist.setAttribute("id", `text-${idtextlist}`)
    textlist.setAttribute("open", "");
    textlist.classList.add("no-check");
    listtext.appendChild(textlist);

    const nomlist = document.createElement("summary");
    nomlist.classList.add("nomlist");
    textlist.appendChild(nomlist);

    const check = document.createElement("button");
    check.classList.add("no-check");
    check.setAttribute("id", `check-${idtextlist}`)
    check.setAttribute("onclick", `check("text-${idtextlist},check-${idtextlist}")`)
    check.textContent = "";
    nomlist.appendChild(check);

    const textnom = document.createElement("p");
    textnom.classList.add("textnom");
    textnom.textContent = prompt("ajoute:");
    nomlist.appendChild(textnom);

    const buttonaddtextlist = document.createElement("button");
    buttonaddtextlist.classList.add("add");
    buttonaddtextlist.textContent = "";
    buttonaddtextlist.setAttribute("onclick", `creatsouslist("text-${idtextlist}")`)
    nomlist.appendChild(buttonaddtextlist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = '';
    buttonsuptextlist.setAttribute("onclick", `suppression("text-${idtextlist}")`)
    nomlist.appendChild(buttonsuptextlist);
}
function creatsouslist(souslistid) {
    idsouslist++;

    const listsous = document.querySelector(`#${souslistid}`);

    const souslist = document.createElement("dd");
    souslist.setAttribute("id", `sous-${idsouslist}`)
    souslist.classList.add("souslist");
    souslist.textContent = prompt(`sous ajoute`)
    listsous.appendChild(souslist);

    const buttonsuptextlist = document.createElement("button");
    buttonsuptextlist.classList.add("sup");
    buttonsuptextlist.textContent = '';
    buttonsuptextlist.setAttribute("onclick", `suppression("sous-${idsouslist}")`)
    souslist.appendChild(buttonsuptextlist);
}
function colorlist(color) {

    const modifColorList = document.getElementsByClassName('list');
    for (let i = 1; i <= modifColorList.length; i++) {
        if (color == "Couleur1") {
            document.querySelector(`#list-${i}`).style.background = '#f6f7cf';
        } else if (color == "Couleur2") {
            document.querySelector(`#list-${i}`).style.background = '#81657c';
        } else if (color == "Couleur3") {
            document.querySelector(`#list-${i}`).style.background = '#F3E779';
        } else if (color == "Couleur4") {
            document.querySelector(`#list-${i}`).style.background = '#a4bd01';
        } else {
            document.querySelector(`#list-${i}`).style.background = '#E5E5E5';
        }
    }
}
function suppression(iddelete,choix) {
    if (choix=="yes") {
        document.getElementById(iddelete).remove();
    } else {
        if (confirm("Etes vous sur de vouloir supprimer?")) {
        document.getElementById(iddelete).remove();
    }
    }
}
