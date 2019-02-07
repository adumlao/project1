const path1 = document.querySelector('.path1')
const path2 = document.querySelector('.path2')
const path3 = document.querySelector('.path3')

let c1 = [];
let c2 = [];
let c3 = [];

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

let enemyMaker = setInterval(createEnemy, 3000);

const stopMakingEnemies = () => {

  if (c1.length + c2.length + c3.length > 4){
    clearInterval(enemyMaker);
    };

};
setInterval(stopMakingEnemies, 1000);


const moveDownAndLose = () => {

  c1.forEach( c1Div => {
    c1Div.style.top = `${c1Div.offsetTop + 15}px`;
    if (c1Div.style.top === `255px`){
      clearInterval(checkLose);
      clearInterval(enemyMaker);
      setTimeout(() => {
        location.replace('lose.html');
      }, 1500);
    }
  });

  c2.forEach( c2Div => {
    c2Div.style.top = `${c2Div.offsetTop + 20}px`;
    if (c2Div.style.top === `260px`){
      clearInterval(checkLose);
      clearInterval(enemyMaker);
      setTimeout(() => {
        location.replace('lose.html');
      }, 1500);
    }
  });

  c3.forEach( c3Div => {
    c3Div.style.top = `${c3Div.offsetTop + 25}px`;
    if (c3Div.style.top === `250px`){
      clearInterval(checkLose);
      clearInterval(enemyMaker);
      setTimeout(() => {
        location.replace('lose.html');
      }, 1500);
    }
  });

};
let checkLose = setInterval(moveDownAndLose, 500);


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
      player.style.left = '10px'
      move = 0;
    };
  } else if (x===39){
    player.style.left =`${move}px`;
    move += 30;
    if (move>810){
     player.style.left= '810px'
     move = 810;
     };
   };

};

const playerAttack = () => {

   const y = event.keyCode;

   let served = document.createElement('div');
    served.classList.add('served');

   if (y === 32 && move >= -25 && move < 70){
     s1.appendChild(served);
     if (c1.length > 0){
     c1[0].classList.add('dead');
     setTimeout(() => {
        let c1Enemy = c1.shift();
        c1Enemy.parentNode.removeChild(c1Enemy);
        }, 250);
     };
   } else if (y === 32 && move > 350 && move < 470){
      s2.appendChild(served);
      if (c2.length > 0){
      c2[0].classList.add('dead');
      setTimeout(() => {
        let c2Enemy = c2.shift();
        c2Enemy.parentNode.removeChild(c2Enemy);
        }, 250);
     };
   } else if (move > 740 && move < 860 && y === 32){
     s3.appendChild(served);
     if (c3.length > 0){
     c3[0].classList.add('dead');
     setTimeout(() => {
       let c3Enemy = c3.shift();
       c3Enemy.parentNode.removeChild(c3Enemy);
       }, 250);
     };
   }

   setTimeout(() => {
        served.remove();
      }, 300);

};

const checkWin = () => {

  const c1Array = document.querySelectorAll('.c1')
  const c2Array = document.querySelectorAll('.c2')
  const c3Array = document.querySelectorAll('.c3')

  if (c1Array.length === 0 && c2Array.length === 0 && c3Array.length === 0){
    clearInterval(enemyMaker);
    clearInterval(youWon);
    setTimeout(() => {
      location.replace('win.html');
    }, 750);
  };

};
let youWon = setInterval(checkWin, 3000);

document.addEventListener('keyup', movePlayer);
document.addEventListener('keyup', playerAttack);
