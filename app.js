var scores,roundScores,activePlayer,gaming;
initial();

function nextPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }
    else{activePlayer=0;}
    roundScores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}
function initial(){
    gaming=true;
scores=[0,0];
roundScores=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gaming){
     var dice=Math.floor(Math.random()*6)+1;  //random no
   // display dice result
    var diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src="dice-" + dice + '.png';
    // update scores and change users
    if(dice!==1){
        roundScores+=dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScores;

    }
    else{
        nextPlayer();
    }
}
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    // Update global score
    if(gaming){
scores[activePlayer]+=roundScores;
    // update UI 
document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

    // player won?
if(scores[activePlayer]>99){
    document.querySelector('#name-' + activePlayer).textContent="WINNER!";
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gaming=false;
}
else{
    nextPlayer();
}
    }
})

document.querySelector('.btn-new').addEventListener('click',function(){
    initial();

})