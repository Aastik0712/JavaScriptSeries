let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let NewGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count=0;
const winPaterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];
const resetGame = () =>{
    turno=true;
    Enabledbox();
    msgContainer.classList.add("hide");
    boxes.forEach(box => box.innerText = "");
}
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled = true;
        checkwinner();
        count++;

        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
        gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const Disabledbox = () =>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
const Enabledbox = () =>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const checkwinner = () => {
    for(let pattern of winPaterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showwinner(pos1Val);
            }
        }
    }
};
const showwinner = (winner) =>{
    msg.innerHTML=`Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    Disabledbox();
}
NewGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
