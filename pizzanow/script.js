const path1 = document.querySelector('.path1')
const path2 = document.querySelector('.path2')
const path3 = document.querySelector('.path3')

let c1 = document.createElement('div')
let c2 = document.createElement('div')
let c3 = document.createElement('div')

let createEnemy = () => {
  c1.classList.add('c1')
  path1.appendChild(c1);

  c2.classList.add('c2')
  path2.appendChild(c2);

  c3.classList.add('c3')
  path3.appendChild(c3);
};

let i = 0;
let j= 0;
let k =0;

const interval = () => {
  c1.style.top = `${i}px`;
  i += 10;
  c2.style.top = `${j}px`;
  j += 5;
  c3.style.top = `${k}px`;
  k += 15;

  if (c1.style.top === `230px`){
    clearInterval(thisInterval);
    setTimeout(() => {
      location.replace('lose.html');
    }, 500);
  } else if (c2.style.top === `235px`){
     clearInterval(thisInterval);
     setTimeout(() => {
       location.replace('lose.html');
     }, 500);
  } else if (c3.style.top === `240px`){
    clearInterval(thisInterval);
    setTimeout(() => {
      location.replace('lose.html');
    }, 500);
   };

   if (path1.childElementCount === 0){
     i = 0;
   };
   if (path2.childElementCount === 0){
     j = 0;
   };
   if (path3.childElementCount === 0){
     k = 0;
   };
};
let thisInterval = setInterval(interval, 500);


const player = document.querySelector('.player');
const body = document.querySelector('body');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');

move = 30;

const movePlayer = () => {
  const x = event.keyCode;

  if (x===37){
    player.style.left = `${move}px`;
    move -= 30;
     if (move<0){
      player.style.left = '0px'
      move = 0;
    };
  } else if (x===39){
    player.style.left =`${move}px`;
    move += 30;
    if (move>840){
     player.style.left= '840px'
     move = 840;
     };
   };
};

const middle = document.querySelector('middle');

const playerAttack = () => {
    const y = event.keyCode;

    let served = document.createElement('div');
    served.classList.add('served');

   if (y === 32 && move >= 0 && move < 70){
     s1.appendChild(served);
     c1.classList.add('dead');
     setTimeout(() => {
     path1.removeChild(c1);
     }, 1000);
   } else if (y === 32 && move > 380 && move < 460){
      s2.appendChild(served);
      c2.classList.add('dead');
      setTimeout(() => {
      path2.removeChild(c2);
      }, 1000);
   } else if (move > 740 && move < 860 && y === 32){
     s3.appendChild(served);
     c3.classList.add('dead');
     setTimeout(() => {
     path3.removeChild(c3);
     }, 1000);
   }

   setTimeout(() => {
        served.remove();
      }, 1000);

};

const win = () => {
  if (path1.childElementCount === 0 && path2.childElementCount === 0 && path3.childElementCount === 0){
    clearInterval(youWon);
    setTimeout(() => {
      location.replace('win.html');
    }, 500);
  }
};
let youWon = setInterval(win, 1000);

const playGame = () => {
  createEnemy();

  document.addEventListener('keyup', movePlayer);
  document.addEventListener('keyup', playerAttack);
};

playGame();
