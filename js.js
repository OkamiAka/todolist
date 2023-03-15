const lists = document.querySelector(".alllist");
let idlist = 0;
let idtextlist = 0;
let idsouslist = 0;
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
    buttonsuptextlist.textContent = "sup";
    // buttonsuptextlist.setAttribute("onclick", `creatsouslist("text-${idtextlist}")`)
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
}



//     const nomlist = document.createElement("summary");
//     nomlist.classList.add("nomlist");
//     nomlist.textContent = "test";
//     textlist.appendChild(nomlist);