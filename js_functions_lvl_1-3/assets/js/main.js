function calculate(){
    const personA = document.body.querySelector("form input:nth-of-type(1)");
    const personB = document.body.querySelector("form input:nth-of-type(2)");
    const pTag = document.body.querySelector("main p");
    pTag.textContent = "Die Differenz der beiden Alter beträgt " + (Math.abs(personA.value - personB.value)) + " Jahre.";
}