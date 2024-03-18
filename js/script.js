function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// creo una funzione che non ha argomenti
function generateNewGridSquare(content){
    // definisco un nuovo elemento del dom e lo creo come <article></article>
    const newElement = document.createElement('article');
    newElement.innerHTML = '<span>' + content + '</span>';
 
    // aggiungo al nuovo elemento la classe .square
    newElement.classList.add('square');
 
    // ritorno il nuovo elemento creato
    return newElement;
}
 
 // # recupero dal DOM l'elemento section con id grid e
 // # lo assegno ad una nuova variabile globale gridElement
let buttonCreate= document.getElementById('create-button');
const gridElement = document.getElementById('grid');


buttonCreate.addEventListener('click', function(){
   gridElement.innerHTML='';
   let diffSquare =  document.querySelector('.form-select').value * 1;
   let numberSquares =[100,81,49];
   let classes=['ds-easy','ds-medium','ds-hard']
   let bombs = randomNoRepeat(1, numberSquares[diffSquare], 16)
    console.log(bombs);

    for (let i = 0; i < numberSquares[diffSquare]; i++) {
        // % creazione di un nuovo quadrato che assegno ad una nuova const newSquare
        const newSquare = generateNewGridSquare('ciao');
        newSquare.setAttribute('id', i+1);
        newSquare.classList.add(classes[diffSquare])
     
        newSquare.addEventListener('click', function(){
            if (bombs.includes(newSquare.getAttribute('id')*1)){
                newSquare.classList.add('bomb');
                newSquare.innerHTML="x";
                // gridElement.innerHTML='';

            } else{
                newSquare.classList.add('not-bomb');
                newSquare.innerHTML= "o";
            
            }
        });
     
        // % aggiungo il mio nuovo quadrato alla grid precedemente selezionata
        gridElement.append(newSquare);
     }
     

})

 
 
 function isEven(number){
    if (number % 2 ===0){
       return true;
    } else {
       return false;
    }
 }


 function randomNoRepeat(min, max, nBombs){
    let arrayBombs= [];
    let numero;
    i=0
    while (i<nBombs){
        numero = getRndInteger(min, max);
        if (arrayBombs.includes(numero) == false){
            arrayBombs.push(numero)
            i++
        }

    }
    return arrayBombs
 }

