
// scrivere un programma che esegue un ciclo da 1 a 100
// ad ogni iterazione appendere un elemento html al container con stili diversi in base a:
// multipli di 3, multipli di 5, multipli di 3 e di 5

const row = document.querySelector('.row');
for(let i = 1; i < 101; i++){
  const box = document.createElement('div');
  box.className = 'box';
  row.append(box)
  box.innerHTML = i;
  console.log(box);

  if(!(i % 3)){
    box.innerHTML = 'fizz';
    box.classList.add('greenwater');
  }
  if(!(i % 5)){
    box.innerHTML = 'fizz';
    box.classList.add('choco');
  }
  if((!(i % 5)) && (!(i % 3))){
    box.innerHTML = 'fizz';
    box.classList.add('rossorosa');
  }
  console.log(i);
}