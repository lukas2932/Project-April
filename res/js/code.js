const boxes = document.getElementsByClassName("box");
const main = document.getElementById("main");
const enemyBoats = document.getElementById("enemyBoats");

const box_0 = document.getElementById("box_0");
const box_1 = document.getElementById("box_1");
const box_2 = document.getElementById("box_2");
const box_3 = document.getElementById("box_3");
const box_4 = document.getElementById("box_4");
const box_5 = document.getElementById("box_5");
const box_6 = document.getElementById("box_6");
const box_7 = document.getElementById("box_7");
const box_8 = document.getElementById("box_8");
const box_9 = document.getElementById("box_9");
const box_10 = document.getElementById("box_10");
const box_11 = document.getElementById("box_11");
const box_12 = document.getElementById("box_12");
const box_13 = document.getElementById("box_13");
const box_14 = document.getElementById("box_14");
const box_15 = document.getElementById("box_15");
const box_16 = document.getElementById("box_16");
const box_17 = document.getElementById("box_17");
const box_18 = document.getElementById("box_18");
const box_19 = document.getElementById("box_19");
const box_20 = document.getElementById("box_20");
const box_21 = document.getElementById("box_21");
const box_22 = document.getElementById("box_22");
const box_23 = document.getElementById("box_23");
const box_24 = document.getElementById("box_24");
const box_25 = document.getElementById("box_25");
const box_26 = document.getElementById("box_26");
const box_27 = document.getElementById("box_27");
const box_28 = document.getElementById("box_28");
const box_29 = document.getElementById("box_29");
const box_30 = document.getElementById("box_30");
const box_31 = document.getElementById("box_31");
const box_32 = document.getElementById("box_32");
const box_33 = document.getElementById("box_33");
const box_34 = document.getElementById("box_34");
const box_35 = document.getElementById("box_35");
const box_36 = document.getElementById("box_36");
const box_37 = document.getElementById("box_37");
const box_38 = document.getElementById("box_38");
const box_39 = document.getElementById("box_39");
const box_40 = document.getElementById("box_40");
const box_41 = document.getElementById("box_41");
const box_42 = document.getElementById("box_42");
const box_43 = document.getElementById("box_43");
const box_44 = document.getElementById("box_44");
const box_45 = document.getElementById("box_45");
const box_46 = document.getElementById("box_46");
const box_47 = document.getElementById("box_47");
const box_48 = document.getElementById("box_48");
const box_49 = document.getElementById("box_49");
const box_50 = document.getElementById("box_50");
const box_51 = document.getElementById("box_51");
const box_52 = document.getElementById("box_52");
const box_53 = document.getElementById("box_53");
const box_54 = document.getElementById("box_54");
const box_55 = document.getElementById("box_55");
const box_56 = document.getElementById("box_56");
const box_57 = document.getElementById("box_57");
const box_58 = document.getElementById("box_58");
const box_59 = document.getElementById("box_59");
const box_60 = document.getElementById("box_60");
const box_61 = document.getElementById("box_61");
const box_62 = document.getElementById("box_62");
const box_63 = document.getElementById("box_63");
const box_64 = document.getElementById("box_64");
const box_65 = document.getElementById("box_65");

const smallShip = document.getElementById("smallShip");
const mediumShip = document.getElementById("mediumShip");
const longShip = document.getElementById("longShip");

const info = document.getElementById("info");

const start_button = document.getElementById("start_button");

let selected = false;

let counter_one = 3;
let counter_two = 2;
let counter_three = 1;

let counter_ai_one = 3;
let counter_ai_two = 2;
let counter_ai_three = 1;

window.onload = () => {
    smallShip.innerHTML = counter_one;
    mediumShip.innerHTML = counter_two;
    longShip.innerHTML = counter_three;

    smallShip.onclick = () => {
        let s_interval = setInterval(() => {
            if(counter_one <= 0){
                smallShip.style.display = "none";
                main.style.zIndex = "-1";
                clearInterval(s_interval);
            }
        },1)
        if(!selected){
            smallShip.style.border = "5px solid yellow";
            main.style.zIndex = "1";
            selected = true;
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    let is_selected_1 = window.getComputedStyle(box)
                    if(is_selected_1.backgroundColor === "rgb(0, 0, 0)" || is_selected_1.backgroundColor === "rgb(45, 84, 255)" || is_selected_1.backgroundColor === "rgb(255, 165, 0)"){
                        info.innerHTML = "This box is already taken."
                    }else if(is_selected_1.backgroundColor === "rgb(255, 255, 255)" || is_selected_1.backgroundColor === "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgb(0, 0, 0)"
                        counter_one--;
                        smallShip.innerHTML = counter_one;
                    }
                }
            })
        }
        else{
            smallShip.style.border = "none";
            selected = false;
            main.style.zIndex = "-1";
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    box.style.backgroundColor = "white";
                }
            })
        }
    }
    // || 

    mediumShip.onclick = () => {
        let m_interval = setInterval(() => {
            if(counter_two <= 0){
                mediumShip.style.display = "none";
                main.style.zIndex = "-1";
                clearInterval(m_interval);
            }
        },1)
        if(!selected){
            mediumShip.style.border = "5px solid yellow";
            main.style.zIndex = "1";
            selected = true;
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    let is_selected_1 = window.getComputedStyle(box)
                    if(is_selected_1.backgroundColor === "rgb(0, 0, 0)" || is_selected_1.backgroundColor === "rgb(45, 84, 255)" || is_selected_1.backgroundColor === "rgb(255, 165, 0)"){
                        console.log(is_selected_1.backgroundColor)
                        info.innerHTML = "This box is already taken."
                    }else if(is_selected_1.backgroundColor === "rgb(255, 255, 255)" || is_selected_1.backgroundColor === "rgba(0, 0, 0, 0)"){
                    counter_two--;
                    mediumShip.innerHTML = counter_two;
                    box.style.backgroundColor = "rgb(45, 84, 255)"

                    if(box.dataset.number == 0){
                        boxes[1].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                    if(box.dataset.number == 1){
                        boxes[2].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 2){
                        boxes[3].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 3){
                        boxes[4].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 4){
                        boxes[5].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 5){
                        boxes[6].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 6){
                        boxes[7].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 7){
                        boxes[8].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 8){
                        boxes[9].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 9){
                        boxes[10].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 10){
                        boxes[11].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 11){
                        boxes[12].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 12){
                        boxes[13].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 13){
                        boxes[14].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 14){
                        boxes[15].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 15){
                        boxes[16].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 16){
                        boxes[17].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 17){
                        boxes[18].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 18){
                        boxes[19].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 19){
                        boxes[20].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 20){
                        boxes[21].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 21){
                        boxes[22].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 22){
                        boxes[23].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 23){
                        boxes[24].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 24){
                        boxes[25].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 25){
                        boxes[26].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 26){
                        boxes[27].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 27){
                        boxes[28].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 28){
                        boxes[29].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 29){
                        boxes[30].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 30){
                        boxes[31].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 31){
                        boxes[32].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 32){
                        boxes[33].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 33){
                        boxes[34].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 34){
                        boxes[35].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 35){
                        boxes[36].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 36){
                        boxes[37].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 37){
                        boxes[38].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 38){
                        boxes[39].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 39){
                        boxes[40].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 40){
                        boxes[41].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 41){
                        boxes[42].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 42){
                        boxes[43].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 43){
                        boxes[44].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 44){
                        boxes[45].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 45){
                        boxes[46].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 46){
                        boxes[47].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 47){
                        boxes[48].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 48){
                        boxes[49].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 49){
                        boxes[50].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 50){
                        boxes[51].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 51){
                        boxes[52].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 52){
                        boxes[53].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 53){
                        boxes[54].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 54){
                        boxes[55].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 55){
                        boxes[56].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 56){
                        boxes[57].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 57){
                        boxes[58].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 58){
                        boxes[59].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 59){
                        boxes[60].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 60){
                        boxes[61].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 61){
                        boxes[62].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 62){
                        boxes[63].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 63){
                        boxes[64].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 64){
                        boxes[65].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 65){
                        boxes[66].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 66){
                        boxes[67].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 67){
                        boxes[68].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 68){
                        boxes[69].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                
                    if(box.dataset.number == 69){
                        boxes[70].style.backgroundColor = "rgb(45, 84, 255)";
                    }
                }
            }
            })
            smallShip.addEventListener('click', () => {
                mediumShip.style.border = "none";
                selected = false;
            }, {once : true});
        }
        else{
            mediumShip.style.border = "none";
            selected = false;
            main.style.zIndex = "-1";
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    box.style.backgroundColor = "white";
                }
            })
        }
    }

    longShip.onclick = () => {
        let l_interval = setInterval(() => {
            if(counter_three <= 0){
                longShip.style.display = "none";
                main.style.zIndex = "-1";
                clearInterval(l_interval);
            }
        },1)
        if(!selected){
            longShip.style.border = "5px solid yellow";
            selected = true;
            main.style.zIndex = "1";
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    let is_selected_1 = window.getComputedStyle(box);
                    if(is_selected_1.backgroundColor === "rgb(0, 0, 0)" || is_selected_1.backgroundColor === "rgb(45, 84, 255)" || is_selected_1.backgroundColor === "rgb(255, 165, 0)"){
                        info.innerHTML = "This box is already taken.";
                    }else if(is_selected_1.backgroundColor === "rgb(255, 255, 255)" || is_selected_1.backgroundColor === "rgba(0, 0, 0, 0)"){
    
                    box.style.backgroundColor = "rgb(255, 165, 0)";
                    counter_three--;
                    longShip.innerHTML = counter_three;

                    if(box.dataset.number == 0){
                        boxes[1].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[2].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                    if(box.dataset.number == 1){
                        boxes[2].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[3].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 2){
                        boxes[3].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[4].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 3){
                        boxes[4].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[5].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 4){
                        boxes[5].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[6].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 5){
                        boxes[6].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[7].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 6){
                        boxes[7].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[8].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 7){
                        boxes[8].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[9].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 8){
                        boxes[9].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[10].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 9){
                        boxes[10].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[11].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 10){
                        boxes[11].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[12].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 11){
                        boxes[12].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[13].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 12){
                        boxes[13].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[14].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 13){
                        boxes[14].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[15].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 14){
                        boxes[15].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[16].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 15){
                        boxes[16].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[17].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 16){
                        boxes[17].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[18].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 17){
                        boxes[18].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[19].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 18){
                        boxes[19].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[20].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 19){
                        boxes[20].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[21].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 20){
                        boxes[21].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[22].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 21){
                        boxes[22].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[23].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 22){
                        boxes[23].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[24].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 23){
                        boxes[24].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[25].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 24){
                        boxes[25].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[26].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 25){
                        boxes[26].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[27].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 26){
                        boxes[27].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[28].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 27){
                        boxes[28].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[29].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 28){
                        boxes[29].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[30].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 29){
                        boxes[30].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[31].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 30){
                        boxes[31].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[32].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 31){
                        boxes[32].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[33].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 32){
                        boxes[33].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[34].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 33){
                        boxes[34].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[35].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 34){
                        boxes[35].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[36].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 35){
                        boxes[36].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[37].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 36){
                        boxes[37].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[38].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 37){
                        boxes[38].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[39].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 38){
                        boxes[39].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[40].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 39){
                        boxes[40].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[41].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 40){
                        boxes[41].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[42].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 41){
                        boxes[42].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[43].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 42){
                        boxes[43].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[44].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 43){
                        boxes[44].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[45].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 44){
                        boxes[45].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[46].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 45){
                        boxes[46].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[47].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 46){
                        boxes[47].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[48].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 47){
                        boxes[48].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[49].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 48){
                        boxes[49].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[50].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 49){
                        boxes[50].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[51].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 50){
                        boxes[51].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[52].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 51){
                        boxes[52].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[53].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 52){
                        boxes[53].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[54].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 53){
                        boxes[54].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[55].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 54){
                        boxes[55].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[56].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 55){
                        boxes[56].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[57].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 56){
                        boxes[57].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[58].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 57){
                        boxes[58].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[59].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 58){
                        boxes[59].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[60].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 59){
                        boxes[60].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[61].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 60){
                        boxes[61].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[62].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 61){
                        boxes[62].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[63].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 62){
                        boxes[63].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[64].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 63){
                        boxes[64].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[65].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 64){
                        boxes[65].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[66].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 65){
                        boxes[66].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[67].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 66){
                        boxes[67].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[68].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 67){
                        boxes[68].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[69].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 68){
                        boxes[69].style.backgroundColor = "rgb(255, 165, 0)";
                        boxes[70].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                
                    if(box.dataset.number == 69){
                        boxes[70].style.backgroundColor = "rgb(255, 165, 0)";
                    }
                }
            }
            })
            smallShip.addEventListener('click', () => {
                longShip.style.border = "none";
                selected = false;
            }, {once : true});
            mediumShip.addEventListener('click', () => {
                longShip.style.border = "none";
                selected = false;
            }, {once : true});
            
        }
        else{
            longShip.style.border = "none";
            selected = false;
            main.style.zIndex = "-1";
            [...boxes].forEach((box) => {
                box.onclick = () => {
                    box.style.backgroundColor = "white";
                }
            })
        }
    }
    let start_interval = setInterval(() => {
        if(counter_one <= 0 && counter_two <= 0 && counter_three <= 0){
            start_button.style.display = "block";
            clearInterval(start_interval);
        }
    },1)
    start_button.onclick = () => {
        enemyBoats.style.display = "block";
        main.style.zIndex = "1";
        enemyBoats.onclick = () => {
            enemyBoats.style.zIndex = "-1";
            [...boxes].forEach((box) => {
                if(box.classList.contains('enemy') === true){
                    box.style.backgroundColor = "rgba(255, 56, 56, 0.2)"
                }
            })
            setTimeout(() => {
                [...boxes].forEach((box) => {
                    if(box.classList.contains('enemy') === true){
                        box.style.background = "none"
                    }
                    enemyBoats.style.zIndex = "1";
                })
            }, 2000)
        }
        [...boxes].forEach((box) => {
            let is_selected = window.getComputedStyle(box)
            if(is_selected.backgroundColor === "rgb(0, 0, 0)"){
                box.classList.add('smallShip')
            }
            if(is_selected.backgroundColor === "rgb(45, 84, 255)"){
                box.classList.add('mediumShip')
            }
            if(is_selected.backgroundColor === "rgb(255, 165, 0)"){
                box.classList.add('longShip')
            }

            box.onclick = () => {
                let temporarly = window.getComputedStyle(box)
                box.style.backgroundColor = temporarly.backgroundColor;
            }
            if(box.classList.contains('smallShip') === true || box.classList.contains('mediumShip') === true || box.classList.contains('longShip') === true){
                box.style.background = "none"
            }
        })
        
        let array = [];

        for(let i = 1; i <= 3; i++){
            let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
            if(array.includes(randomNum) === false){
                boxes[randomNum].classList.add('enemy');
                array.push(randomNum);
            }else{
                i--;
            }
        }
        for(let i = 1; i <= 2; i++){
            let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
            if(randomNum >= 68){
                i--;
                continue;
            }
            if(array.includes(randomNum) === false && array.includes(randomNum + 1) === false){
                boxes[randomNum].classList.add('enemy');
                let numSecond = randomNum + 1;
                boxes[numSecond].classList.add('enemy');
                array.push(randomNum);
                array.push(numSecond);
            }else{
                i--;
            }
        }
        for(let i = 1; i <= 1; i++){
            let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
            boxes[randomNum].classList.add('enemy');
            if(randomNum >= 67){
                i--;
                continue;
            }
            if(array.includes(randomNum) === false && array.includes(randomNum + 1) === false && array.includes(randomNum + 2) === false){ 
                boxes[randomNum].classList.add('enemy');
                let numSecond = randomNum + 1;
                boxes[numSecond].classList.add('enemy');
                array.push(numSecond);
                let numThird = numSecond + 1;
                boxes[numThird].classList.add('enemy');
                array.push(randomNum);
                array.push(numSecond);
                array.push(numThird);
            }else{
                i--;
            }
        }
        console.log(array)
        start_button.style.display = "none";

        info.innerHTML = "The enemy has chosen a boxes.";
        setTimeout(() => {
            info.innerHTML = "Now it's your turn.";
            [...boxes].forEach((box) => {
                box.addEventListener('click', () => {
                    if(box.classList.contains('enemy') === true){
                        box.classList.add('hit');
                        box.classList.remove('enemy');
                        box.style.backgroundColor = "rgb(255, 0, 0, 0.4)";
                        info.innerHTML = "You hit an oponent!";
                    }else{
                        main.style.zIndex = "-1 ";
                        info.innerHTML = "Miss";
                        box.classList.add('missed');
                        box.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                        setTimeout(() => {
                            info.innerHTML = "Now it's enemy turn.";
                        }, 1000)
                        setTimeout(() => {
                            [...boxes].forEach((box) => {
                                if(box.classList.contains('smallShip') === true){
                                    box.style.backgroundColor = "rgb(0, 0, 0)"
                                }
                                if(box.classList.contains('mediumShip') === true){
                                    box.style.backgroundColor = "rgb(45, 84, 255)"
                                }
                                if(box.classList.contains('longShip') === true){
                                    box.style.backgroundColor = "rgb(255, 165, 0)"
                                }
                                if(box.classList.contains('missed') === true && box.classList.contains('longShip') === true){
                                    box.style.backgroundColor = "rgb(255, 165, 0)"
                                }
                                if(box.classList.contains('missed') === true && box.classList.contains('mediumShip') === true){
                                    box.style.backgroundColor = "rgb(45, 84, 255)"
                                }
                                if(box.classList.contains('missed') === true && box.classList.contains('smallShip') === true){
                                    box.style.backgroundColor = "rgb(0, 0, 0)";
                                }
                                if(box.classList.contains('missed') === true && box.classList.contains('smallShip') === false && box.classList.contains('mediumShip') === false && box.classList.contains('longShip') === false){
                                    box.style.background = "none"
                                }
                                if(box.classList.contains('enemyMissed') === true){
                                    box.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                                }
                                if(box.classList.contains('enemyHit') === true){
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                }
                                if(box.classList.contains('hit') === true && box.classList.contains('longShip') === true){
                                    box.style.backgroundColor = "rgb(255, 165, 0)"
                                }
                                if(box.classList.contains('hit') === true && box.classList.contains('mediumShip') === true){
                                    box.style.backgroundColor = "rgb(45, 84, 255)"
                                }
                                if(box.classList.contains('hit') === true && box.classList.contains('smallShip') === true){
                                    box.style.backgroundColor = "rgb(0, 0, 0)";
                                }
                                if(box.classList.contains('hit') === true && box.classList.contains('smallShip') === false && box.classList.contains('mediumShip') === false && box.classList.contains('longShip') === false){
                                    box.style.background = "none"
                                }
                            });
                        }, 1000)
                        setTimeout(() => {
                            let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
                            console.log(randomNum);
                            if(boxes[randomNum].classList.contains('smallShip') === true || boxes[randomNum].classList.contains('mediumShip') === true || boxes[randomNum].classList.contains('longShip') === true){
                                boxes[randomNum].classList.add('enemyHit');
                                boxes[randomNum].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                let isEnemyWinner = false;
                                while(isEnemyWinner === false){
                                    for(let i = 0; i <= 69; i++){
                                        if(boxes[i].classList.contains('smallShip') === true && boxes[i].classList.contains('mediumShip') === true && boxes[i].classList.contains('longShip') === true){
                                            isEnemyWinner = true;
                                        }
                                    }
                                }
                            }else{
                                boxes[randomNum].classList.add('enemyMissed');
                                boxes[randomNum].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                            }
                        }, 1500)
                        setTimeout(() => {
                            info.innerHTML = "Now it's your turn.";
                            main.style.zIndex = "1 ";
                            [...boxes].forEach((box) => {
                                if(box.classList.contains('smallShip') === true || box.classList.contains('mediumShip') === true || box.classList.contains('longShip') === true){
                                    box.style.background = "none"
                                }
                                if(box.classList.contains('missed') === true){
                                    box.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                                }
                                if(box.classList.contains('enemyMissed') === true){
                                    box.style.background = "none"
                                }
                                if(box.classList.contains('hit') === true){
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                }
                            })
                        }, 3500)
                    }
                },{once : true})
            })
        }, 1500)
    }
}

