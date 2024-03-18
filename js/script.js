function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// creo una funzione che non ha argomenti
function generateNewGridSquare(content){
    const newElement = document.createElement('article');
    newElement.innerHTML = '<span>' + content + '</span>';
    newElement.classList.add('square');
    return newElement;
}
 
 // # recupero dal DOM l'elemento section con id grid e
 // # lo assegno ad una nuova variabile globale gridElement
let buttonCreate= document.getElementById('create-button');
const gridElement = document.getElementById('grid');

buttonCreate.addEventListener('click', function(){
    gridElement.innerHTML='';
    let clicks = 0 ;
    let diffSquare =  document.querySelector('.form-select').value * 1;
    let numberSquares =[9,100,81,49];
    let classes=['ds-easy','ds-medium','ds-hard']
    let bombs = randomNoRepeat(1, numberSquares[diffSquare], 4)
    console.log(bombs);
    const result= document.createElement('p');
    result.classList.add('d-none');

    for (let i = 0; i < numberSquares[diffSquare]; i++) {
        const newSquare = generateNewGridSquare();
        newSquare.setAttribute('id', i+1);
        newSquare.classList.add(classes[diffSquare])

     
        newSquare.addEventListener('click', function(){
            if (bombs.includes(newSquare.getAttribute('id')*1)){
                newSquare.classList.add('bomb');
                newSquare.innerHTML="x";
                // gridElement.innerHTML='';
                // gameOver(numberSquares[diffSquare]);
                result.innerHTML=`Hai perso, hai totalizzato un punteggio di ${clicks}`;
                result.classList.remove('d-none')


            } else{
                newSquare.classList.add('not-bomb');
                newSquare.innerHTML= "o";
                clicks++
                if(clicks == (numberSquares[diffSquare]- 4)){
                    result.innerHTML=`Hai vinto, hai totalizzato un punteggio di ${clicks}`;
                result.classList.remove('d-none')
                }
            
            }
        });
     
        // % aggiungo il mio nuovo quadrato alla grid precedemente selezionata
        gridElement.append(newSquare, result);
     }
     

})

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

//  function gameOver(nBoxes){
//     for(i=0; i< nBoxes; i++ ){
//         variabile = document.getElementById(i+1)
//         variabile.removeEventListener('click', gino)
//     }
    
    
//  }

