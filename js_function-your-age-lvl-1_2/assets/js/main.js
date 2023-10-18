function alter(){
    const ageYear = document.body.querySelector("form input");
    const pTag = document.body.querySelector("main p");
    pTag.textContent = "Du bist " + (2023 - ageYear.value) + " Jahre alt.";
}