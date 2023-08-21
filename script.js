/*
1)Queryselector
2)Functions : init() , rolldice()


*/
//Current score Element of player 0
var player0_cur_score  = document.getElementById("current--0");

//current score variable of Player 0
let score = 0;


//Total Score Element of Player 0
var totalscore_player0_element = document.querySelector("#score--0");

//total scorevariable of player 0
var totalscore_player0 = 0; Number( totalscore_player0_element.value);
console.log( typeof totalscore_player0)

//dice-Image-Element:
var diceElement = document.querySelector(".dice");

//rolldice-button:
var rolldice_btn_element = document.querySelector(".btn--roll");

//hold-button:
var hold_btn_element = document.querySelector(".btn--hold");

function init() {
     totalscore_player0_element.textContent = 0;
     totalscore_player0 = Number( totalscore_player0_element.textContent);
     console.log(typeof totalscore_player0);

}
 init();

function rolldice() {
    var randomnumber = Math.trunc(Math.random() * 6) + 1;

  diceElement.src = `dice-${randomnumber}.png`;
  if (randomnumber === 1){
    // GAME - OVER !
    score = 0;
    player0_cur_score.textContent = score;

    // change colors to showcase that this player's turn has ended


  
    //shift control from one player to other 


  }
  else {
    score += randomnumber;
    player0_cur_score.textContent = score;

  }
}

function hold() {
    //add current Score to global score
    totalscore_player0 += score; 

     console.log(totalscore_player0);
      
     totalscore_player0_element.textContent = totalscore_player0;

    //set the value of score back to zero for next turn
    score = 0;
    //change text content in Current Score element from "0" to ""
    player0_cur_score.textContent =score;

}



//roll-dice-event-Listener

rolldice_btn_element.addEventListener("click",rolldice);

hold_btn_element.addEventListener("click",hold);
