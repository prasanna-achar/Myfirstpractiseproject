let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.getElementById("msg");
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide");
}

const disablebox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "green";
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" &&pos2val != "" &&pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){ 
                showWinner(pos1val);
                disablebox();
            }

        }
    }
};

const showWinner = (winner) =>{
    console.log(winner);
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};


newGamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);