const lists = document.querySelector(".alllist");
let idlist = 0;
let idtextlist = 0;
let idsouslist = 0;
let color = "";
let nombreList = 0;
const button = document.querySelector("#Couleur1");
button.addEventListener("click", function () {
  const bgbody = "#e2e9c0";
  const bgnav = "#a7001e";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = bgbody;
  document.querySelector("h1.titre").style.color = "black";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "black";
  document.querySelector("button.Ajouter").style.color = "black";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = button.id;
  colorlist(color);
});

const button2 = document.querySelector("#Couleur2");
button2.addEventListener("click", function () {
  const bgbody = "#b384a7";
  const bgnav = "#81657c";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "white";
  document.querySelector("button.Ajouter").style.color = "white";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = button2.id;
  colorlist(color);
});

const button3 = document.querySelector("#Couleur3");
button3.addEventListener("click", function () {
  const bgbody = "url(img/bois3.jpg)";
  const bgnav = "url(img/bois4.png)";
  document.body.style.background = bgbody;
  document.body.style.backgroundSize = "cover";
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("nav").style.backgroundSize = "cover";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1.titre").style.color = "white";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = "#F3E779";
  document.querySelector("button.Ajouter").style.background = "#F3E779";
  document.querySelector("button#Ajouter").style.color = "black";
  document.querySelector("button.Ajouter").style.color = "black";
  document.querySelector("nav").style.borderColor = "#ffffff";
  document.querySelector("h1.titre").style.borderColor = "#ffffff";
  color = button3.id;
  colorlist(color);
});

const button4 = document.querySelector("#Couleur4");
button4.addEventListener("click", function () {
  const bgbody = "#ebf2fa";
  const bgnav = "#a4bd01";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "black";
  document.querySelector("button.Ajouter").style.color = "white";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = button4.id;
  colorlist(color);
});

const button5 = document.querySelector("#Couleur5");
button5.addEventListener("click", function () {
  const bgbody = "#a7e0e0";
  const bgnav = "#4a919e";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = bgbody;
  document.querySelector("h1.titre").style.color = "";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "";
  document.querySelector("button.Ajouter").style.color = "";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = button5.id;
  colorlist(color);
});

const buttonWild = document.querySelector("#CouleurWild");
buttonWild.addEventListener("click", function () {
  const bgbody = "#d8d8d8";
  const bgnav = "#F7146B";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = bgbody;
  document.querySelector("h1.titre").style.color = "";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "";
  document.querySelector("button.Ajouter").style.color = "";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = buttonWild.id;
  colorlist(color);
});

const buttonSombre = document.querySelector("#CouleurSombre");
buttonSombre.addEventListener("click", function () {
  const bgbody = "black";
  const bgnav = "grey";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = bgbody;
  document.querySelector("h1.titre").style.color = "black";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "white";
  document.querySelector("button.Ajouter").style.color = "black";
  document.querySelector("nav").style.borderColor = "#FFFFFF";
  document.querySelector("h1.titre").style.borderColor = "#FFFFFF";
  color = buttonSombre.id;
  colorlist(color);
});

const buttonDef = document.querySelector("#CouleurDef");
buttonDef.addEventListener("click", function () {
  const bgbody = "white";
  const bgnav = "#E5E5E5";
  document.body.style.background = bgbody;
  document.querySelector("nav").style.background = bgnav;
  document.querySelector("h1").style.color = "black";
  document.querySelector("h1.titre").style.color = "black";
  document.querySelector("h1.titre").style.background = bgnav;
  document.querySelector("button#Ajouter").style.background = bgbody;
  document.querySelector("button.Ajouter").style.background = bgnav;
  document.querySelector("button#Ajouter").style.color = "black";
  document.querySelector("button.Ajouter").style.color = "black";
  document.querySelector("nav").style.borderColor = "black";
  document.querySelector("h1.titre").style.borderColor = "black";
  color = buttonDef.id;
  colorlist(color);
});

function creatlist() {
  idlist++;

  const list = document.createElement("div");
  list.setAttribute("id", `list-${idlist}`);
  list.classList.add("list");

  const para = document.createElement("p");
  para.classList.add('text');
  list.appendChild(para)
  lists.appendChild(list);

  const titlelist = document.createElement("h2");
  titlelist.classList.add("titlelist");
  titlelist.textContent = prompt("Nom de la liste:");
  para.appendChild(titlelist);

  const buttonaddlist = document.createElement("button");
  buttonaddlist.classList.add("add");
  buttonaddlist.setAttribute("onclick", `creattextlist("list-${idlist}")`);
  para.appendChild(buttonaddlist);

  const buttonsuptextlist = document.createElement("button");
  buttonsuptextlist.classList.add("sup");
  buttonsuptextlist.setAttribute("onclick", `suppression("list-${idlist}","list")`);
  para.appendChild(buttonsuptextlist);

  colorlist(color);

  const nume = document.createElement("p");
  nume.classList.add("nume");
  list.appendChild(nume);

  const numelist = document.createElement("p");
  numelist.textContent = ++nombreList + "/";
  nume.appendChild(numelist);

  const numealllist = document.createElement("p");
  numealllist.textContent = nombreList;
  numealllist.classList.add("allnume");
  numealllist.setAttribute("id", `nume-${nombreList}`);
  nume.appendChild(numealllist);

  numeall(nombreList);

  list.style.animationName = "startlist";
  list.style.animationDuration = "2s";
}

function numeall(id) {
  const allList = document.getElementsByClassName("list");
  for (let i = 1; i <= allList.length; i++) {
    document.querySelector(`#nume-${i}`).textContent = id;
  }
}

function check(ch, chid) {
  if (document.querySelector(`#${ch}`).className == "check") {
    document.querySelector(`#${ch}`).className = "no-check";
    document.querySelector(`#${chid}`).className = "no-check";
  } else {
    document.querySelector(`#${ch}`).className = "check";
    document.querySelector(`#${chid}`).className = "check";
  }
}
function creattextlist(listid) {
  idtextlist++;
  const listtext = document.querySelector(`#${listid} p`);

  const textlist = document.createElement("div");
  textlist.setAttribute("id", `text-${idtextlist}`);
  textlist.setAttribute("open", "");
  textlist.classList.add("no-check");
  listtext.appendChild(textlist);

  const nomlist = document.createElement("p");
  nomlist.classList.add("nomlist");
  textlist.appendChild(nomlist);

  const check = document.createElement("button");
  check.classList.add("no-check");
  check.setAttribute("id", `check-${idtextlist}`);
  check.setAttribute(
    "onclick",
    `check("text-${idtextlist},check-${idtextlist}")`
  );
  nomlist.appendChild(check);

  const textnom = document.createElement("p");
  textnom.classList.add("textnom");
  textnom.textContent = prompt("ajoute:");
  nomlist.appendChild(textnom);

  const buttonsuptextlist = document.createElement("button");
  buttonsuptextlist.classList.add("sup");
  buttonsuptextlist.setAttribute("onclick", `suppression("text-${idtextlist}")`
  );
  nomlist.appendChild(buttonsuptextlist);
  if (textnom.textContent == null || textnom.textContent == "") {
    suppression(`text-${idtextlist}`, "yes");
  }
}
function creattextlistplus(listid) {
  idtextlist++;
  const listtext = document.querySelector(`#${listid}`);

  const textlist = document.createElement("details");
  textlist.setAttribute("id", `text-${idtextlist}`);
  textlist.setAttribute("open", "");
  textlist.classList.add("no-check");
  listtext.appendChild(textlist);

  const nomlist = document.createElement("summary");
  nomlist.classList.add("nomlist");
  textlist.appendChild(nomlist);

  const check = document.createElement("button");
  check.classList.add("no-check");
  check.setAttribute("id", `check-${idtextlist}`);
  check.setAttribute(
    "onclick",
    `check("text-${idtextlist},check-${idtextlist}")`
  );
  check.textContent = "";
  nomlist.appendChild(check);

  const textnom = document.createElement("p");
  textnom.classList.add("textnom");
  textnom.textContent = prompt("ajoute:");
  nomlist.appendChild(textnom);

  const buttonaddtextlist = document.createElement("button");
  buttonaddtextlist.classList.add("add");
  buttonaddtextlist.setAttribute(
    "onclick",
    `creatsouslist("text-${idtextlist}")`
  );
  nomlist.appendChild(buttonaddtextlist);

  const buttonsuptextlist = document.createElement("button");
  buttonsuptextlist.classList.add("sup");
  buttonsuptextlist.setAttribute(
    "onclick",
    `suppression("text-${idtextlist}")`
  );
  nomlist.appendChild(buttonsuptextlist);
}
function creatsouslist(souslistid) {
  idsouslist++;

  const listsous = document.querySelector(`#${souslistid}`);

  const souslist = document.createElement("dd");
  souslist.setAttribute("id", `sous-${idsouslist}`);
  souslist.classList.add("souslist");
  souslist.textContent = prompt(`sous ajoute`);
  listsous.appendChild(souslist);

  const buttonsuptextlist = document.createElement("button");
  buttonsuptextlist.classList.add("sup");
  buttonsuptextlist.setAttribute(
    "onclick",
    `suppression("sous-${idsouslist}")`
  );
  souslist.appendChild(buttonsuptextlist);
}
function colorlist(color) {
  const modifColorList = document.getElementsByClassName("list");
  for (let i = 1; i <= modifColorList.length; i++) {
     if(color === "Couleur1") {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "rgb(167, 0, 30)";
    } else if (color === "Couleur2") {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "#81657c";
    } else if (color === "Couleur3") {
      document.querySelector(`#list-${i}`).style.background = "#F3E779";
      document.querySelector(`#list-${i}`).style.borderColor = "black";
    } else if (color === "Couleur4") {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "#a4bd01";
    } else if (color == "Couleur5") {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "#4a919e";
    } else if (color === "CouleurWild") {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "#F7146B";
    } else if (color === "CouleurSombre") {
      document.querySelector(`#list-${i}`).style.borderColor = "#FFFFFF";
      document.querySelector(`#list-${i}`).style.background = "grey";
    } else {
      document.querySelector(`#list-${i}`).style.borderColor = "black";
      document.querySelector(`#list-${i}`).style.background = "#E5E5E5";
    }
  }
}
function suppression(iddelete, choix) {
  if (choix === "yes") {
    document.getElementById(iddelete).style.display = "none";
  } else {
    if (confirm("Etes vous sur de vouloir supprimer?")) {
      document.getElementById(iddelete).style.display = "none";
    }
  } if (choix === "list") {
    numeall(--nombreList);
  }
}
