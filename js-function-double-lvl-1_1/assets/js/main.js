function double(){
    const outputNumber = document.body.querySelector("form input");
    const pTag = document.body.querySelector("main > p");
    pTag.textContent = Number(outputNumber.value) * 2;
}
