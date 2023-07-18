let player = {
    name: "Sid",
    chips: 10000000
}
let cards=[]
let sum=0
let hasBlackJack = false
let isAlive = false
let massage=""
let massageEl = document.getElementById("massage-el")
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")
 
playerEl.textContent=player.name + ": $" +player.chips

function getRandomCard() {
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber===1) 
        return 11
    
    else if(randomNumber>10)
        return 10
    else
    return randomNumber        
}


function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum+=(firstCard+secondCard)
    renderGame()
}


function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
        cardsEl.textContent+=cards[i] + " "
if(sum <= 20) {
    massage = "Do you want to draw a new card"
}
else if(sum===21) {
    massage = "You got BlackJack"
    hasBlackJack=true
}
else {
    massage = "You have lost"
    isAlive=false
}
massageEl.textContent=massage
console.log(massageEl)
} 

function newCard() {
    if(isAlive===true && hasBlackJack===false) {
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

