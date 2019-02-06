const path1 = document.querySelector('.path1')
const path2 = document.querySelector('.path2')
const path3 = document.querySelector('.path3')

let c1 = [];
let c2 = [];
let c3 = [];

let enemyMaker;

let createEnemy = () => {
  const enemy1 = document.createElement('div')
  enemy1.className = 'c1'
  path1.append(enemy1);
  c1.push(enemy1);

  const enemy2 = document.createElement('div')
  enemy2.className = 'c2'
  path2.append(enemy2);
  c2.push(enemy2);

  const enemy3 = document.createElement('div')
  enemy3.className = 'c3'
  path3.append(enemy3);
  c3.push(enemy3);
};


const moveDownAndLose = () => {

  c1.forEach( c1Div => {
    c1Div.style.top = `${c1Div.offsetTop + 10}px`;
    if (c1Div.style.top === `230px`){
      clearInterval(thisInterval);
      clearInterval(enemyMaker);
      // setTimeout(() => {
      //   location.replace('lose.html');
      // }, 500);
    }
  });

  c2.forEach( c2Div => {
    c2Div.style.top = `${c2Div.offsetTop + 5}px`;
    if (c2Div.style.top === `235px`){
      clearInterval(thisInterval);
      clearInterval(enemyMaker);
      // setTimeout(() => {
      //   location.replace('lose.html');
      // }, 500);
    }
  });

  c3.forEach( c3Div => {
    c3Div.style.top = `${c3Div.offsetTop + 15}px`;
    if (c3Div.style.top === `240px`){
      clearInterval(thisInterval);
      clearInterval(enemyMaker);
      // setTimeout(() => {
      //   location.replace('lose.html');
      // }, 500);
    }
  });

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
let thisInterval = setInterval(moveDownAndLose, 500);


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
     c1[0].classList.add('dead');
     setTimeout(() => {
      let c1Enemy = c1.shift();
      c1Enemy.parentNode.removeChild(c1Enemy);
     }, 1000);
   } else if (y === 32 && move > 380 && move < 460){
      s2.appendChild(served);
      c2[0].classList.add('dead');
      setTimeout(() => {
      let c2Enemy = c2.shift();
      c2Enemy.parentNode.removeChild(c2Enemy);
      }, 1000);
   } else if (move > 740 && move < 860 && y === 32){
     s3.appendChild(served);
     c3[0].classList.add('dead');
     setTimeout(() => {
     let c3Enemy = c3.shift();
     c3Enemy.parentNode.removeChild(c3Enemy);
     }, 1000);
   }

   setTimeout(() => {
        served.remove();
      }, 1000);

};

const checkWin = () => {
  const c1Array = document.querySelectorAll('.c1')
  const c2Array = document.querySelectorAll('.c2')
  const c3Array = document.querySelectorAll('.c3')

  if (c1Array.length === 0 && c2Array.length === 0 && c3Array.length === 0){
    console.log('win');
    clearInterval(enemyMaker);
    clearInterval(youWon);
  };
};
let youWon = setInterval(checkWin, 5000);

const playGame = () => {
  enemyMaker = setInterval(createEnemy, 4000);

  document.addEventListener('keyup', movePlayer);
  document.addEventListener('keyup', playerAttack);
};

playGame();
