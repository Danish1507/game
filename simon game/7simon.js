// let gameSeq = [];
// let userSeq =[];

// let started = false;
// let level =0;
// let h2 = document.querySelector("h2");

// document.addEventListener ("keypress",function(){
//     if(started == false){
//         console.log("game started");
//         started = true;

//         levelUp();
//     }
// });

// function btnFlash(btn){

// }
// function levelUp(){
//     level++;
//     h2.innerText = `Level ${level}`;

//     btnFlash();
// }
let gameSeq = [];
 let userSeq =[];
let btns = ["red","green","yellow","blue"];
 let started = false;
 let level =0;
 let h2=document.querySelector("h2");
 document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
 });
 function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
 }
 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
 }
function levelUp(){ 
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
 let idx = Math.floor(Math.random()*3);
 let randColor = btns[idx];
 let randbtn = document.querySelector(`.${randColor}`);   
   gameSeq.push(randColor);
   console.log(gameSeq);
    gameflash(randbtn);
} 
let body = document.querySelector("body");
function checkAns(idx){
    // console.log("curr level: ",level);
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> press any key to start again the game`;
       body.style.backgroundColor = "red";
       setTimeout( function()  {
        body.style.backgroundColor = "white";
       }, 200);
        reset();
    }
}
function btnPress() {   
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
   
}