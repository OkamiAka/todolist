const lists = document.querySelector(".alllist");
function list(){
    const list = document.createElement("div");
    list.classList.add("list");
    lists.appendChild(list);
}
list();