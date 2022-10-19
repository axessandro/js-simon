// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ------------------------------------------------------------------

//  IMPORT DATA
// [] import text-wrapper
// [] import numbers-wrapper

//  DATA TO GEN
// [] generate let arrayUser = []
// [] generate rndArray = randomArrayGen() 

//  EXECUTION
// [] randomArrayGen()o on html
// [] setTimeout (d-none, 6000)
// [] setTimeout (ask-numbers, 6000)

//  PROCESSING DATA
// [] dataProcessor(arrayUser, randomArraygen) 

// -------------FUNCTIONS--------------------------------------------

// [] function d-none (text-wrapper)
//  text-wrapper add class d-none

// [] function ask-numbers (arrayUser)
    //  while (userArray.length < 5)
        //  generate const thisNumber = parseInt.prompt("dimmi un numero")
        //  push thisNumber into arrayUser
        //  i++

// [] function randomArrayGen()
    //  generate let randomArrayFilled []
    //  while (randomArrayFilled.length < 6)
        //  generate const thisNumber = mathrandom(1,99) 
        //  push thisNumber into array if not dupplicate
        //  i++
    //  @result = randomArrayFilled

// [] function dataProcessor (arrayuser, arraycpu)
    //  
