const boxes = document.querySelectorAll('.box');
const box = document.getElementsByClassName("box");

[...boxes].forEach((element) => {
    element.onclick = () => {
        console.log(element.dataset['number']);
    }
});

window.onload = () => {
    let randomNum = Math.floor(Math.random() * (64 - 1 + 1) + 1);
    console.log(randomNum);

    for(let i = 0; i <= boxes.length - 1; i++){
        let numOne = boxes[i].dataset['number'];
        if(numOne == randomNum){
            boxes[i].innerHTML = "filled";

        }

    }

}
