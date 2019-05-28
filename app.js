
//Created by Mohsin Iqbal

var score,roundScore,activePlayer,dice,gameplaying; 
init();
// score=[0,0];
// roundScore=0;
// activePlayer=0;

//  document.querySelector('#current-'+activePlayer);
//  document.querySelector('.dice').style.display='none';
//  document.getElementById('score-0').textContent='0';
// document.getElementById('score-1').textContent='0';
//  document.getElementById('current-0').textContent='0';
// document.getElementById('current-1').textContent='0';
// // document.querySelector('#current-'+activePlayer).innerHTML='<h1>'+dice+'</h1>';
// document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gameplaying)
   {
    var  dice=Math.floor(Math.random()*6)+1;
   var diceDOM=document.querySelector('.dice');
   diceDOM.style.display='block';
   diceDOM.src='dice-'+dice+'.png';
   if(dice!=1)
   {
     roundScore+=dice;
     document.querySelector('#current-'+activePlayer).textContent=roundScore;
   }
   else{
            nextPlayer();

   }

   }
   
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    score[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
    if(score[activePlayer]>=10)
    {
        document.querySelector('#name-'+activePlayer).textContent='Winner';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gameplaying=false;
    } 
    else{
        nextPlayer();
    } 
    
}
)

document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplaying=true;

 document.querySelector('#current-'+activePlayer);
 document.querySelector('.dice').style.display='none';
 document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player 1 ';
document.getElementById('name-1').textContent='player 2 ';
// document.querySelector('#current-'+activePlayer).innerHTML='<h1>'+dice+'</h1>';
document.querySelector('.dice').style.display='none';
}


function nextPlayer()
{
    roundScore=0;
            document.getElementById('current-0').textContent='0';
             document.getElementById('current-1').textContent='0';
            if(activePlayer==0)
            {
                activePlayer=1;
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
                document.querySelector('.dice').style.display='none';
            }
            else{
                    activePlayer=0;
                    document.querySelector('.player-1-panel').classList.remove('active');
                    document.querySelector('.player-0-panel').classList.add('active');
                    document.querySelector('.dice').style.display='none';
            }
}
