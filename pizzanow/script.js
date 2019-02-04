//enemy
//5 enemies will get added to #c1 #c2 and #c3
//c1 will move up 5px every 5seconds
//c2 will move up 5px every 3seconds
//c3 will move up 5px every 8seconds

const customer = document.querySelector('.middle')

let c1 = document.createElement('div')
let c2 = document.createElement('div')
let c3 = document.createElement('div')

const enemy1 = () => {
  c1.classList.add('c1')
  customer.appendChild(c1);

  const startTop = () => {
        c1.style.top = 0 + 'px';
      };

  const moveDown = () => {
    let i = 234;
    c1.style.top = `${i}px`;
    i += 5;
    };

   startTop();

   setTimeout(() => {
    moveDown()}, 2000);

   return c1;
};

const enemy2 = () => {
  c2.classList.add('c2')
  customer.appendChild(c2);

  const startTop = () => {
        c2.style.top = 0 + 'px';
      };

  const moveDown = () => {
    let i = 234;
    c2.style.top = `${i}px`;
    i += 5;
    };

   startTop();

   setTimeout(() => {
    moveDown()}, 5000);

   return c2;
};

const enemy3 = () => {
  c3.classList.add('c3')
  customer.appendChild(c3);

  const startTop = () => {
        c3.style.top = 0 + 'px';
      };

  const moveDown = () => {
    let i = 234;
    c3.style.top = `${i}px`;
    i += 5;
    };

   startTop();

   setTimeout(() => {
    moveDown()}, 3000);

   return c3;
};


enemy1();
enemy2();
enemy3();

// setTimeout(enemy1, 6000);

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
  let served = document.createElement('div');
  served.classList.add('served');

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

   if (x === 32 && move >= 0 && move < 70){
     s1.appendChild(served);
   } else if (x === 32 && move > 380 && move < 460){
      s2.appendChild(served);
   } else if (move > 740 && move < 860 && x === 32){
     s3.appendChild(served);
   }

   setTimeout(() => {
        served.remove();
      }, 1000);

};

body.addEventListener('keyup', movePlayer);


//win LOSE
//if there is an enemy- enemy will change image, change course and retreat. WIN!
//if the enemy reaches top 865px, you lose!
//MVP2 if there is no enemy, alert that there was no enemy there, you lose.
//MVP2 sees if there is an opponent there

//intro
//start button

//win page with restart button

//lose page with restart button
