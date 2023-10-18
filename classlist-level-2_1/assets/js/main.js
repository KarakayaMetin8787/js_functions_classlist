function changeHeadline(){
    const list = document.body.querySelector("header h1");
    const sorting = document.body.querySelector("header ol");
    
    list.classList.add("styleOne");
    sorting.classList.add("styleTwo");
}

function resetHeadline(){
    const list = document.body.querySelector("header h1");
    const sorting = document.body.querySelector("header ol");
    
    list.classList.remove("styleOne");
    sorting.classList.remove("styleTwo");
}