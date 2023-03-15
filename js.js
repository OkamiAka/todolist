const lists = document.querySelector(".alllist");
let idlist = 0;
function creatlist() {
    idlist++;
    
    const list = document.createElement("div");
    list.setAttribute("id",`list-${idlist}`)
    list.classList.add("list");
    lists.appendChild(list);
    
    const titlelist = document.createElement("h2");
    titlelist.classList.add("titlelist");
    titlelist.textContent = prompt("Nom de la liste:");
    list.appendChild(titlelist);
    
    const buttonaddlist = document.createElement("button");
    buttonaddlist.classList.add("add");
    buttonaddlist.textContent="+"
    buttonaddlist.setAttribute("onclick",`creattextlist("list-${idlist}")`)
    list.appendChild(buttonaddlist);
}
function creattextlist(listid){
    const listtext = document.querySelector(`#${listid}`);
    
    const textlist = document.createElement("details");
    textlist.classList.add("textlist");
    listtext.appendChild(textlist);
    
        const nomlist = document.createElement("summary");
        nomlist.classList.add("nomlist");
        nomlist.textContent = prompt("ajoute:");
        textlist.appendChild(nomlist);
}



//     const nomlist = document.createElement("summary");
//     nomlist.classList.add("nomlist");
//     nomlist.textContent = "test";
//     textlist.appendChild(nomlist);