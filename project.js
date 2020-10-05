function ageInDays(){
var birth = prompt("what is your birth year");
var result = (2020 - birth)*365;
console.log(result);
document.getElementById("p2").innerHTML = (`Your age in days : ${result}`);
}
function reset(){
    document.getElementById("p2").innerHTML = "Your result will display here "
}

function generate(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-pic');
    image.src = "./cat.gif";
    div.appendChild(image);
}



function gam3(choice){
var human,computer;
human = choice.id;
//console.log(human);
computer = checkComp();
//console.log(computer);
//result(human,computer);
frontEnd(human,computer);


// generating random number
function randomNumber(){
    return Math.floor(Math.random()*3);
}
// using that random number to pick one of that 
function checkComp(){
    number = randomNumber();
    let arr = ['paper' , 'rock' , 'scissor'];
    return arr[number];
}
// result

function result (human , computer){
var results = 1
if (human==computer){
     console.log("draw");
     results = 0.5;
}

if (human=="rock" && computer=="paper"){
    console.log("you loss");
    results = 0;
}
if (human=="rock" && computer=="scissor"){
    console.log("you won");
    results = 1;
}
if (human=="scissor" && computer=="paper"){
    console.log("you won");
    results = 1;
}
if (human=="scissor" && computer=="rock"){
    console.log("you loss");
    results = 0;
}

if (human=="paper" && computer=="rock"){
   console.log("you won");
   results = 1;
}
if (human=="paper" && computer=="scissor"){
   console.log("you loss");
   results = 0;
}

return results;

}

/*
function playAgain()
{
    location.reload();
}

*/
function frontEnd(humanChoice,compChoice){
    // removing
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

     var imageData = {
         rock : "./rock.png",
         paper : "./paper.png",
         scissor : "./scissor.png"
    }
    var putMessage = result(humanChoice,compChoice);
    // i wanna place these objects to constructor function
    var finalMessage = {
        0 : "You loss Match",
        1 : "You won",
        0.5 :"Match Draw"
    }
    var finalColor = {
        0 : "#FF0000",
        1 : "#00FF00",
        0.5 : "#800080"
    }
    var finalShadow = {
        0 : "0px 13px 16px 0px rgba(255, 50, 50, 0.75)",//red
        1 : "0px 13px 16px 0px rgba(46, 255, 50, 1)",//green
        0.5 : "0px 13px 16px 0px rgba(122, 48, 175, 1)"//purole
    }
    console.log(finalMessage["0"])//finalmessage.0 or finalmessage[0] will not work 

//    // constructor way 
//     function objec(zero,one,two) {//error in passing parameters like 0,1,0.5
//         this.zero = zero;
//         this.one = one;
//         this.two = two;
//     }
//     var finalMessage = new objec("you loss","you won","match draw");
//     var finalColor = new objec("#FF0000","#00FF00","#800080");

//     console.log(finalMessage["0"])





    var humanDiv = document.createElement('div');
    var comDiv = document.createElement('div');
    var resultDiv = document.createElement('div');
    //var buttonDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanChoice] + "' height =200 width = 200  style='box-shadow:" + finalShadow[putMessage] + "'>";
    comDiv.innerHTML =   "<img src='" + imageData[compChoice] + "' height =200 width = 200 style='box-shadow: "+finalShadow[putMessage]+"'>";
    resultDiv.innerHTML = "<h1 style ='color:" + finalColor[putMessage] + "; margin-top:75px '>" + finalMessage[putMessage] +  "</h1>"
    //buttonDiv.innerHTML = "<button onlick ='" + playAgain() + "'>" + "Play Again" + "</button>";

    document.getElementById('flex-pic-3').appendChild(humanDiv); 
    document.getElementById('flex-pic-3').appendChild(resultDiv); 
    document.getElementById('flex-pic-3').appendChild(comDiv); 
    //document.getElementById('flex-pic-3').appendChild(buttonDiv); 
    }
    
}

// changing colors

var c = document.getElementsByTagName("button");
var afterResetBackground = [];
var afterResetColor = [];
var afterResetImage = []
for(let i = 0;i<c.length;i++){
afterResetBackground[i] = getComputedStyle(c[i])['background-color'];
afterResetColor[i] = getComputedStyle(c[i])["color"];
afterResetImage[i] = getComputedStyle(c[i])["background-image"]; 
}
    //console.log(copy[0]);
function changeColor(colorp){
    
    for(let i = 0;i<c.length;i++){
       c[i].style.backgroundImage = "none";
    }
    //console.log(colorp.value)
    if(colorp.value=="red" || colorp.id == "red")
    red();
    if(colorp.value=="palegreen" || colorp.id == "palegreen")
    palegreen();
    if(colorp.value=="yellow" || colorp.id == "yellow")
    yellow();
    if(colorp.value=="cyan" || colorp.id == "cyan")
    cyan();
    if(colorp.value=="Reseet")
    reseet();
}
function red(){
        for(let i=0;i<c.length;i++)
          {
              c[i].style.backgroundColor = "red";
              c[i].style.color = "white";
              c[i].style.border = "3px solid palegreen";

          }
}
function palegreen(){
    for(let i=0;i<c.length;i++)
          {
              c[i].style.backgroundColor = "palegreen";
              c[i].style.color = "black";
              c[i].style.border = "3px solid orange";

          }
}
function yellow(){
    for(let i=0;i<c.length;i++)
          {
              c[i].style.backgroundColor = "yellow";
              c[i].style.color = "red";
              c[i].style.border = "3px solid orange";
          }
}
function cyan(){
    for(let i=0;i<c.length;i++)
          {
              c[i].style.backgroundColor = "cyan";
              c[i].style.color = "grey";
              c[i].style.border = "3px solid red";
          }
}
function reseet(){
    for(let i=0;i<c.length;i++)
    {
         c[i].style.backgroundColor = afterResetBackground[i];
         c[i].style.color = afterResetColor[i];
         c[i].style.backgroundImage = afterResetImage[i];
         c[i].style.border = "none";
    }
}
    // fifth project starts here


    // by me from array method

    
let bigObject = {
    "you"  : {"Result" : "#blackjackResult", "Image" : "#yourN","score" : 0 },
    "dealer" : {"Result" : "#bootResult", "Image" : "#bootN","score" : 0},
    "cards"  : ["2","3","4","5","6","7","8","9","10","A","J","Q","K"] ,
    "value" : {"2" : 2,"3" : 3,"4" : 4,"5" : 5,"6" : 6,"7" : 7,"8" : 8,"9" : 9,"10":10,"A":1,"J" : 10,"K" : 10,"Q" : 10},
    "stand" : false,
    "hit" : false
};

const VALUE = bigObject["value"];
const YOU = bigObject["you"];
const DEALER = bigObject["dealer"];
const hitSound = new Audio("./swish.m4a");
const hitSound1 = new Audio("./swish.m4a");
const standSound = new Audio("./cash.mp3");
const lossSound = new Audio("./aww.mp3");
let specialCas = false;
// we can also take place these counts to the bigObject
let countWins = 0;
let countLoss = 0;
let countDrwas = 0;

// adding onclick funtion from js 
document.querySelector("#dealB").addEventListener("click",deal)

function hit()
{
    //making sure that the stand button has not now clicked
    if(bigObject["stand"] == false){
    showCards(YOU);
    bigObject["hit"] = true;
    if(YOU["score"]>21)
      {
        specialCase("you");
      }
    }
}
function sleep(ms)
{
    return new Promise( resolve => setTimeout(resolve,ms))
}
async function stand()
{
    if(bigObject["hit"] == true && specialCas == false){
    do{
       bigObject["stand"] = true;
      showCards(DEALER);
      await sleep(1000)
    }
    while(DEALER["score"] < 16);
    decider("you");
    }
}
// we have place true condition first beacuse when we place after the await funtion
// it dose not true the conditon withn the time so user can also press hit button
// but now it will first change the condition and then move to tha await funtion
function deal()
{
    console.log("hu")
    if (bigObject["stand"]==true && bigObject["hit"]==true){
    let image1 = document.querySelector("#yourN").querySelectorAll("img");
    let image2 = document.querySelector("#bootN").querySelectorAll("img");
    for (let i=0;i<image1.length;i++)
    {
        image1[i].remove();
    }
    for (let i=0;i<image2.length;i++)
    {
        image2[i].remove();
    }
    document.querySelector(YOU["Result"]).textContent= 0;
    document.querySelector(DEALER["Result"]).textContent= 0;

    document.querySelector(YOU["Result"]).style.color= "coral";
    document.querySelector(DEALER["Result"]).style.color = "coral";

    document.querySelector("#Win").textContent= "Lets Play";
    document.querySelector("#Win").style.color = "coral";
    document.querySelector("#Win").style.border = "none";

    //document.querySelector(YOU["score"])= 0; this will not work beacuse query selector performs 
    //funtions like what to do with id like change color chnage context if you want to change the value of 
    // something change it in a direct way like below:

    YOU["score"] = 0;
    DEALER["score"] = 0;
    
    // state of the funtion is now in its initial mode
    bigObject["stand"] = false;
    bigObject["hit"] = false;
    specialCas = false;
}
}

function randomCards()
{ 
   let index = Math.floor(Math.random()*13);
   return bigObject["cards"][index];
}
function showCards(active)
{
    if (active["score"]<=21){
    let card = randomCards();
    let imageS = document.createElement("img");
    //imageS,src = "./"+ card +".png";
    imageS.src = `./${card}.png`;
    document.querySelector(active["Image"]).appendChild(imageS);
    updateScore(active,card);
    hitSound.play();
    }
    //else {bust()};
}
function updateScore(active,card)
{

    if(active["score"]<=21){
        if(card == "A" && active["score"]<=10){
            VALUE["A"] = 11;
        }
        else VALUE["A"] = 1;
     active["score"] += VALUE[card];
     document.querySelector(active["Result"]).textContent = active["score"];
    }
    if(active["score"]>21) {
        document.querySelector(active["Result"]).textContent = "Bust...!";
        document.querySelector(active["Result"]).style.color = "black";
        //my method for winning logic
        // stand();
        // stand();
        // document.getElementById("Win").textContent =  active["name"] + " " + "LOSS";
        // document.getElementById("Win").style= "color:red; padding: 10px;border: 4px solid red" ;
    }
}

function winerLogic()
{
    console.log(YOU["score"],DEALER["score"])
    let winner;
    if (YOU["score"]<=21)
    {
        if(YOU["score"] > DEALER["score"] || DEALER["score"] > 21)
        {
            winner = YOU;
            console.log("you win");
        }
        else if (YOU["score"]<DEALER["score"]) 
        {
        winner = DEALER;
        console.log("you loss");
        }
    }
    else if( YOU["score"] == DEALER["score"]) 
    {
        console.log("DRa");
    }

    else if (YOU["score"]>21 )//&& DEALER["score"]<=21)
    {
        console.log("You LOss");
        winner = DEALER;
    }
    //  else (YOU["score"] >21 && DEALER["score"]>21)
    //  {
    //      console.log("draw")
    // }
    console.log("winner is :" ,winner)
    return winner;
}
function decider(selec){
    let winner = winerLogic();
    let message;
    if(winner  == YOU)
    {
       message = selec +" "+ "WiN";
       messageColor = "green"
       standSound.play();
       countWins++;
    }
    else if(winner  == DEALER)
    {
       message =  selec+ " " + "LOSS";
       messageColor = "red";
       lossSound.play();
       countLoss++;
    }
    else{
        message  = "draw";
        messageColor = "black";
        countDrwas++;
    }
    document.querySelector("#Win").textContent = message;
    document.getElementById("Win").style= "color:"+ messageColor +"; padding: 10px;border: 4px solid red" ;
    document.querySelector("#winB").textContent = countWins;
    document.querySelector("#lossB").textContent = countLoss;
    document.querySelector("#drawB").textContent = countDrwas;

}
async function specialCase(selec)
{
    showCards(DEALER);
    await sleep(500);
    showCards(DEALER);
    decider(selec);
    bigObject["stand"] = true;
    specialCas = true;
}
//showCards(YOU);
// const hitSound = new Audio("./swish.m4a")
// function hit()
// {
//  let yourRand = Math.floor(Math.random()*imageArray.length);
//  countPonits(yourRand,"blackjackResult");
//  let yourImg1 = document.createElement("img");
//  yourImg1.src = imageArray[yourRand];
//  //yourImg1.innerHTML = "<img src =' " +imageArray[yourRand] +" '>";
//  document.getElementById("yourN").appendChild(yourImg1);
//  hitSound.play();
// }
// function stand()
// {
//     let removeImg1 = document.querySelector("#yourN").querySelectorAll("img");
//     let removeImg2 = document.querySelector("#bootN").querySelectorAll("img");

//     for(let i=0;i<removeImg1.length;i++)
//     {
//         removeImg1[i].remove();
//     }
//     for(let i=0;i<removeImg2.length;i++)
//     {
//         removeImg2[i].remove();
//     }
      
// }
// function deal()
// {
//     let yourRand1 = Math.floor(Math.random()*imageArray.length);
//     let yourRand2 = Math.floor(Math.random()*imageArray.length);
//     let yourRand3 = Math.floor(Math.random()*imageArray.length);

//  //   countPonits(yourRand,"bootResult");

//     let yourImg1 = document.createElement("img");
//     let yourImg2 = document.createElement("img");
//     let yourImg3 = document.createElement("img");

//     yourImg1.src = imageArray[yourRand1];
//     yourImg2.src = imageArray[yourRand2];
//     yourImg3.src = imageArray[yourRand3];

//     //yourImg1.innerHTML = "<img src =' " +imageArray[yourRand] +" '>";
//     document.getElementById("bootN").appendChild(yourImg1); 
//     document.getElementById("bootN").appendChild(yourImg2); 
//     document.getElementById("bootN").appendChild(yourImg3); 

// }



function guide()
{
    let x = document.querySelector(".container-5")
    x.style = "height : 1170px";

    document.querySelector("#li1").textContent = "You have to select minimun 2 cards by clicking hit button"
    document.querySelector("#li2").textContent = "You have to go for more and more hits untill you guess you have highest number less than 21"
    document.querySelector("#li3").textContent = "Each card has its number(value) wriiten on it but 'A'  behaves differently like for less than 10 it will give the value of 11 But if you already have sum of greater than 10 than it will give only 1 value "
    document.querySelector("#li4").textContent = "If You busted mean if you have total sum of greater than 21 you will loss tha game "
    document.querySelector("#li5").textContent = "Once you are sure you have good sum less than 21 then press stand button after that you will not be able to press hit again and now computer will check your fate "
    document.querySelector("#li6").textContent = "After the result you can now press the deal button in this way you will be able to play again"
    document.querySelector("#li7").textContent = "Confused ! ... Lets Play some games ...... have fun ..!!!"
    document.querySelector("#li8").textContent = "On 29th August Hamsof  added two player function ...."

    // changing list style wuth li ul with queryselector
    let y = document.querySelectorAll("ul li")
    console.log(y);
    // y.style direct will not work we have to loop it
    for (let i=0;i<y.length;i++)
    {
    y[i].style = "list-style-type : square";
    }
}


// player 2
function player1()
{
    if(bigObject["stand"] == false){
        showCards(YOU);
        bigObject["hit"] = true;
        if(YOU["score"]>21)
          {
            specialCase("player 1: ");
          }
        }
}
function player2()
{
    console.log("hh")
    if(bigObject["hit"] == true && specialCas == false)
    {
     bigObject["stand"] = true;
    showCards(DEALER);
    if(YOU["score"]<DEALER["score"])
    {
        decider("Player1 :");
    }
    if(DEALER["score"]>21)
    {
        decider("Player1 :");
    }
    if(YOU["score"]==21 && DEALER["score"]==21)
    {
        decider("Player1 :");
    }

    }
}
