let reset = document.querySelector("#reset_button");
let boxes = document.querySelectorAll(".box");
var winners = document.querySelector(".winner");
let turnO = true;
let winingptr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const winertracker = () => {
    for (let winner of winingptr) {
        //console.log(winner[0], winner[1], winner[2]);

        let val1 = boxes[winner[0]].innerText;
        let val2 = boxes[winner[1]].innerText;
        let val3 = boxes[winner[2]].innerText;
        console.log(val1, val2, val3);
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                all_box_disable();
                return true;
            }
        }

    }
}


const all_box_disable = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO) {
            box.innerText = 'x';
            turnO = false;
            box.disabled = true;
            let winner1 = winertracker();
            if (winner1 === true) {
                winners.innerText = "Winner is X ";
                winners.style.backgroundColor = "black";

            }

        } else {
            box.innerText = 'o';
            turnO = true;
            box.disabled = true;
            let winner2 = winertracker();
            if (winner2 === true) {
                winners.innerText = "Winner is O ";
                winners.style.backgroundColor = "black";

            }

        }
    });
});



reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";


    });
    winners.innerText = "";
    winners.style.backgroundColor = "transparent";

});