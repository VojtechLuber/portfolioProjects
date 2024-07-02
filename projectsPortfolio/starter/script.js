'use strict';

let secret = Math.trunc(Math.random()*20)+1;
let score = 20
let highscore = 0


const displayMessage = function(String){
    document.querySelector('.message').textContent= String;
} 


document.querySelector('.again').addEventListener('click',function(){
    score = 20
    secret = Math.trunc(Math.random()*20)+1;

    displayMessage('Zacni hadat');
    document.querySelector('.score').textContent =score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value = 0;

    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width='15rem';

});

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('Nezadal jsi zadne cislo!');
    } else if (guess===secret) {
        displayMessage('Super uhodl jsi! VYHRALS');
          document.querySelector('.number').textContent = secret;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width= '30rem';
            if(highscore<score){
                highscore=score
                document.querySelector('.highscore').textContent = highscore;
            }
    } else if (guess !== secret) {
        if (score > 1) {
            displayMessage (
                guess > secret ? ' .. Secret is LOWER' : ' .. Secret is HIGHER'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage (':( sorry U loose the game :(');
            document.querySelector('.score').textContent = 0;
            document.querySelector('').style.backgroundColor = '#c5101b';
        }
    
       
    }
});
