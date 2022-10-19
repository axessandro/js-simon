// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ------------------------------------------------------------------

//  IMPORT DATA
// [*] import text-wrapper
// [*] import numbers-wrapper
const textWrapper = document.getElementById("text-wrapper");
const numbersWrapper = document.getElementById("numbers-wrapper");
const scoreWrapper = document.getElementById("score-wrapper");
const sameNumbers = document.getElementById("same-numbers");

//  DATA TO GEN
// [*] generate rndArray = randomArrayGen() 
// [*] generate inBothArray
const arrayCpu = randomArrayGen();
console.log(arrayCpu);
let inBothArray = [];

//  EXECUTION
// [*] randomArrayGen()o on html
for (let i = 0; i < arrayCpu.length; i++){
    const thisNumber = arrayCpu[i];
    const thisNumberWrapper = document.createElement("div");
    thisNumberWrapper.classList.add("rnd-numbers");
    thisNumberWrapper.append(thisNumber);
    numbersWrapper.append(thisNumberWrapper);
}

// [*] setTimeout (d-none, 6000)
setTimeout(function () {
    hideNumbers(textWrapper);
}, 6000)

// [*] setTimeout (ask-numbers, 6000)
setTimeout(function() {
    // [*] generate let arrayUser = []
    let arrayUser = arrayUserFiller();
    console.log(arrayUser);

    //  PROCESSING DATA
    for (let i = 0; i < arrayCpu.length; i++){
        const thisNumber = arrayCpu[i];
        if (arrayUser.includes(thisNumber)){
            inBothArray.push(thisNumber)
        }
    }

    scoreWrapper.innerHTML = `Your Score: ${inBothArray.length}`;
    for (let i = 0; i < inBothArray.length; i++){
        const thisNumber = inBothArray[i];
        const thisNumberWrapper = document.createElement("div");
        thisNumberWrapper.classList.add("matching-numbers");
        thisNumberWrapper.append(thisNumber);
        sameNumbers.append(thisNumberWrapper);
    }

}, 7000);


// -------------FUNCTIONS--------------------------------------------

//  text-wrapper add class d-none
function hideNumbers(textWrapper) {
    textWrapper.classList.add("d-none")
}

/**
 * Description: Generate filled array with 5 random numbers from 1 to 99
 * @returns {Array} = randomArrayFilled  
 */
function randomArrayGen() {
    const randomArrayFilled = [];
    while (randomArrayFilled.length < 5){
        const thisNumber = getRndInteger(1, 99);
        if (!randomArrayFilled.includes(thisNumber)){
            randomArrayFilled.push(thisNumber);
        }
    }
    return randomArrayFilled;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Description: fill userarray with prompt data
 * @param {Array} arrayUser
 * @returns {Array}
 */
function arrayUserFiller() {
    let arrayUser = [];
    while (arrayUser.length < 5) {
        const thisNumber = parseInt(prompt("Dimmi un numero"));
        arrayUser.push(thisNumber);
    }
    return arrayUser
}
