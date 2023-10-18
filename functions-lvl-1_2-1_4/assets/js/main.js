// -------------------------- functions 1_2 --------------------

function intro2(paramName){
    const name = "SuperCoder:in";
    console.log("Hi " + name + ". Mein Name ist " + paramName);
}

intro2("Metin Karakaya");

// ---------------------------- functions 1_3 -------------------

function intro3(name, stadt, alter){
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}

intro3("Metin Karakaya", "Düsseldorf", "36");

// ---------------------------- functions 1_5 ----------------------

function math(a,b){
    console.log("Multiplikation von " + a + " und " + b + ": " + a * b);
    console.log("Dividion von " + a + " und " + b + ": " + a / b);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

//---------------------------- functions Vertiefung 1_4 -------------

function hero(heroName, heroPower, heroEnemy){
    const name = "Mein:e Lieblingsheld:in ist: " + heroName + "\n";
    const power = "Er/sie hat die Fähigkeit: " + heroPower + "\n";
    const enemy = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy;
    console.log(name + power + enemy);
}

hero("Ironman", "Hightech-Anzug", "Mandarin");