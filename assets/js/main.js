console.log("test");

/* 
    sortieren a-z

    forEach 

    function myDrinks
        jeder extra in einer Zeile 
        + ausgabe in html

*/


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

console.table(getraenke);

function myDrinks() {
    const body = document.querySelector("body");

    getraenke.sort();
    getraenke.forEach((element, index) => { 
        body.innerHTML +=` <p> ${index+1}:   ${element} </p> ` });


    console.table(getraenke);
    console.log(getraenke);

    document.write(getraenke);

}


myDrinks();