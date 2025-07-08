let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
let mes=document.querySelector("#msg");
let cscore=document.querySelector("#compscore");
let uscore=document.querySelector("#userscore");
const genCompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return(options[randIdx]);

}

const showwinner=(userWin,computerch,userch)=>{
if(userWin){
   uscore.innerText++;
    mes.innerText="you win";
    mes.style.backgroundColor="yellow";
    
   
}
    else
    {
         cscore.innerText++;
    mes.innerText="you lose";
 mes.style.backgroundColor="blue";

}
}
const drawgame=()=>{
    console.log("game was draw");
    mes.innerText="Game was draw.Play again";
     mes.style.backgroundColor="red";
}
const playgame = (userchoice)=>{
console.log("user choice =",userchoice);
const compchoice=genCompchoice();
console.log("comp choice= ",compchoice)
if(userchoice===compchoice)
    drawgame();
else{
    let userwin=true;
    if(userchoice==="rock")
    {
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
{
    userwin=compchoice==="scissor"?false:true;
}
     else
     {
     userwin=compchoice==="rock"?false:true;
     }

showwinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice)=>{
console.log(choice);
choice.addEventListener("click",()=>{
    const choiceId =choice.getAttribute("id");

playgame(choiceId);
});
});