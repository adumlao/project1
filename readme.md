# [http://pizzanow.surge.sh/]


## Project Description

### Pizza, Now!
  * Game Concept: You run the best pizzeria in town! However, in order to stay #1, you have to keep your rating at 5 stars by making sure the foodbloggers get their pizza in a timely manner.
  * Use the left and right arrow keys to get to the specific counter and use the spacebar to serve a slice.  
  * After you have served all the foodbloggers during the lunch rush, you'll get to keep your title as the best place pizza place in New York!

## User Stories

**Pizza, Now!** is a game where the player runs around the pizza counter so that he can serve all the customers during the lunch rush before they get to him and complain.  

## Wireframes

### Intro Page Wireframe:
![intro page wireframe](https://i.imgur.com/RuRIgYN.png "Intro Page Wireframe")



### Main Play Page Wireframe:
![main play wireframe](https://i.imgur.com/g1ktOvZ.png "Main Play Page Wireframe")



### Win/Lose Page Wireframe:
![win lose wireframe](https://i.imgur.com/EanuBJf.png "Win/Lose Page Wireframe")



## Priority Matrix

### MVP
#### Main Play Page
1. Javascript / Game Logic : 12 hrs (day 1 and 2)
  * player movability function - move left and right
  * player attack function - change station element
  * enemy moves down at a set setInterval
  * win functionality - all enemies defeated
  * lose functionality - enemy reaches the player line
  * create more opponents
  * add a start button
  * add reset button
2. Graphics / CSS : 8 hrs (day 2 and 3)
  * create a player and player station
  * create attack state graphic

### PostMVP
1. Intro Page (3 hrs - day 3)
  * move start button here
2. Win-Lose Page (3 hrs- day 4)
  * move reset button here


## Additional Libraries

### All images are royalty-free and taken from [https://www.freepik.com].
  * Chef image courtesy of luis_molinero
  * Blogger image courtesy of borjandreu

## Code Snippet

The code snippet below is a function that checks to see if the player is at a specific pizza station, if the space bar is pressed, it loads a pie onto the tray.  This function also checks if there is a customer coming down to complain, and if there is a customer, a pie gets served, the customer disappears, and the pie gets taken away from the tray.

```
const playerAttack = () => {

   const y = event.keyCode;

   let served = document.createElement('div');
    served.classList.add('served');
    //if the player is at a specific station and presses the keyboard
   if (y === 32 && move >= -25 && move < 70){
     s1.appendChild(served); //a pie gets loaded on the tray
     if (c1.length > 0){ //if there is a customer coming down
     c1[0].classList.add('dead'); //that customer will get served pizza
     setTimeout(() => {
        let c1Enemy = c1.shift();
        c1Enemy.parentNode.removeChild(c1Enemy);
        }, 250); //after 250ms, that customer will get taken out of the array so that the next customer coming down can be served
     };
   };

   setTimeout(() => {
        served.remove();
      }, 300);// after 300ms, the pie that was just served is taken out of the tray

};
```

## Issues and Resolutions

#### Getting the enemy to move down every 3 seconds
`**ERROR**: Enemy gets stuck after moving down from the first pixel iterated and does not move down after`                               
`**RESOLUTION**:Adding a set interval.`
```
let checkLose = setInterval(moveDownAndLose, 500);

```

#### Cannot create more than one enemy at a given path
`**ERROR**: for loop does not seem to generate more enemies`                               
`**RESOLUTION**: Creating an empty array, adding the created divs to that array, and looping through it.`
```
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
```
#### After an enemy is cleared out of the array, it is still present in the DOM- it is still the first object in the array even though it has been cleared, therefore you can't serve the next customer coming down.
`**ERROR**: ```c1[0].remove()``` does not work in getting the served customer out of the DOM.`                               
`**RESOLUTION**: Reworking the Syntax:`
```
let c1Enemy = c1.shift();
c1Enemy.parentNode.removeChild(c1Enemy);
```
