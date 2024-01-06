let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        count += 1;
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const draw = () =>{
    msg.innerText = `No One Is Winner Match Is Draw`;
    msgContainer.classList.remove("hide");
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
} 

const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pat1Val = boxes[pattern[0]].innerText;
        let pat2Val = boxes[pattern[1]].innerText;
        let pat3Val = boxes[pattern[2]].innerText;
        if(pat1Val != "" && pat2Val != "" && pat3Val != ""){
            if(pat1Val === pat2Val && pat2Val === pat3Val){
                
                showWinner(pat1Val);
            }
            if(count === 9){
                draw();
            }
        }
    }
};

resetBtn.addEventListener("click" , resetGame);
newGameBtn.addEventListener("click" , resetGame);