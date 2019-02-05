//enemy
//3 enemies will get added to #c1 #c2 and #c3
//c1 will move up 5px every 5seconds
//c2 will move up 5px every 3seconds
//c3 will move up 5px every 8seconds


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

const moveEnemy = () => {
  c1.style.top = `${i}px`;
  i += 10;

  c2.style.top = `${j}px`;
  j += 5;

  c3.style.top = `${k}px`;
  k += 15;
};

//one set setInterval(function () {
//update position of enemies and check for Lost
//keep an object of bad guys
//if killed, take out of dom and remove from array of objects
const interval = () => {
  c1.style.top = `${i}px`;
  i += 10;
  c2.style.top = `${j}px`;
  j += 5;
  c3.style.top = `${k}px`;
  k += 15;

  if (c1.style.top === `230px`){
    console.log('You Lost!')
    clearInterval(thisInterval);
  } else if (c2.style.top === `235px`){
     console.log('You Lost!')
     clearInterval(thisInterval);
  } else if (c3.style.top === `240px`){
    console.log('You Lost!')
    clearInterval(thisInterval);
   };
};

let thisInterval = setInterval(interval, 1000);

const checkLost = () => {
  if (i > 240){
    console.log('You Lost!')
  } else if (j > 240){
     console.log('You Lost!')
  } else if (k > 240){
    console.log('You Lost!')
   };
};

//defense
//add event listeners to .player
//when left arrow is clicked, moves left
//when right arrow is clicked, moves right
//when the spacebar is clicked
//if at 35px or 4255px or 816px
//append a new element '.served' to the respective station
//set timeout so after 1 second, .served disappears

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
     clearInterval(thisInterval);
   } else if (y === 32 && move > 380 && move < 460){
      s2.appendChild(served);
      let c2Dead = c2.classList.add('dead');
      setTimeout(() => {
        path2.removeChild(c2);
      }, 1000);
      clearInterval(thisInterval);
   } else if (move > 740 && move < 860 && y === 32){
     s3.appendChild(served);
     let c3Dead = c3.classList.add('dead');
     setTimeout(() => {
       path3.removeChild(c3);
     }, 1000);
       clearInterval(thisInterval);
   }

   setTimeout(() => {
        served.remove();
      }, 1000);

};

const playGame = () => {
  createEnemy();
  moveEnemy();
  body.addEventListener('keyup', movePlayer);
  body.addEventListener('keyup', playerAttack);

};

playGame();

//win LOSE
//DONE if there is an enemy- enemy will change image and disapper.
//DONE if the enemy reaches top 865px, you lose!

//win function
//if c1 and c2 and c3 arrays are 0, you // WARNING:

//MVP2 sees if there is an opponent there
//MVP2 if there is no enemy, alert that there was no enemy there, you lose.

//intro
//start button

//win page with restart button

//lose page with restart button
