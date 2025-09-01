let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let turnO = true;
let msg = document.querySelector(".msg");
let win = document.querySelector("#win");
let newBtn = document.querySelector("#new");

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    win.innerText = `Congratulations , Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}
const checkWinner = (() => {
    for (let pattern of winner) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos3);
            }
        }
    }
})
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);