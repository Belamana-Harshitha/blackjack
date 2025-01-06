
let player={
    name:"Harshitha",
    chips:1000
}
    let cards=[];
    let sum=0;
    let hasblackJack=false;
    let isAlive=false;
    let message="";
    let playerEl=document.getElementById("player-el");
    playerEl.textContent=player.name+": $"+player.chips;

    let messageEl=document.getElementById("message-el");
    let sumEl=document.getElementById("sum-el");
    let cardsEl= document.querySelector("#cards-el");
    console.log(cards);

    function getRandomCard(){
        let randomInt=Math.floor(Math.random()*13)+1;
        if(randomInt===1){
            return 11;
        }else if(randomInt>10){
            return 10;
        }
        return randomInt;
    }
function startGame(){
    isAlive=true;
    let  firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum=firstCard+secondCard;
    renderGame();
}    
function renderGame(){
    sumEl.textContent="Sum: "+sum;
    cardsEl.textContent="Cards: " ;
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" " ;
    }
    if(sum <=20){
        message="Do you want to draw a new card? ";
        isAlive=true;
    }else if(sum === 21){
        message="Wohoo! You've got Blackjack!"
        hasblackJack=true;
        isAlive=true;
    }else{
        message= "You're out of the game! ";
        isAlive=false;
    }
    messageEl.textContent=message;
}
function newCard(){
    if(isAlive===true && hasblackJack===false){
    console.log("Drawing a new card from the deck!");
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    console.log(cards);
    startGame();
    }
}