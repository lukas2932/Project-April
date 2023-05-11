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

let rotateButton = document.getElementById("rotateButton");
let selected = false;
let rotateSelected = false 

let counter_one = 3;
let counter_two = 3;
let counter_three = 2;

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
                box.onmouseover = () => {
                    let temporarly = window.getComputedStyle(box);
                    if(temporarly.backgroundColor === "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                        box.addEventListener('mouseout', () => {
                            let temporarly2 = window.getComputedStyle(box);
                            if(temporarly2.backgroundColor === "rgba(0, 0, 0, 0.4)"){
                                box.style.background = "none"
                            }
                            if(temporarly2.backgroundColor === "rgb(0, 0, 0)"){
                                box.style.backgroundColor = "rgb(0, 0, 0)"
                            }
                        })
                    }
                    box.onclick = () =>{
                        let temporarly = window.getComputedStyle(box);
                        if(temporarly.backgroundColor !== "rgba(0, 0, 0, 0.4)"){
                            info.innerHTML = "This position is already taken";
                            setTimeout(() => {
                                info.innerHTML = "Chose your positions."
                            }, 2500)
                        }else{
                            box.style.backgroundColor = "rgb(0, 0, 0)";
                            counter_one--;
                            smallShip.innerHTML = counter_one;
                        }
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
                rotateButton.style.display = "none"
            }
        },1)
        if(!selected){
            mediumShip.style.border = "5px solid yellow";
            main.style.zIndex = "1";
            selected = true;
            rotateButton.style.display = "block";
            rotateButton.onclick = () => {
                if(!rotateSelected){
                    rotateSelected = true;
                    rotateButton.style.border = "2px solid rgba(0, 0, 0, 0.4)"
                    rotateButton.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                    [...boxes].forEach((box) => {
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);
                            let num_one = Number(box.dataset.number) + 7;
                            let temporarly_two = window.getComputedStyle(boxes[num_one]) 
        
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgba(45, 84, 255, 0.4)"
                                boxes[Number(box.dataset.number) + 7].style.borderTopLeftRadius = "1em"
                                boxes[Number(box.dataset.number) + 7].style.borderTopRightRadius = "1em"
                                box.addEventListener('mouseout', () => {
                                    if(temporarly_one.backgroundColor === "rgb(45, 84, 255)" && temporarly_two.backgroundColor === "rgb(45, 84, 255)"){
                                        box.style.backgroundColor = "rgb(45, 84, 255)";
                                        boxes[Number(box.dataset.number) + 7].style.background = "rgb(45, 84, 255)";
                                    }else{
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 7].style.background = "none";
                                        boxes[Number(box.dataset.number) + 7].style.borderRadius = "10em 10em";
                                    }
                                }, {once : true})
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                })
                            }
                            box.onclick = () =>{
                                let temporarly = window.getComputedStyle(box);
                                let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 7])
                                if(temporarly.backgroundColor !== "rgba(45, 84, 255, 0.4)" || temporarly2.backgroundColor !== "rgba(45, 84, 255, 0.4)"){
                                    info.innerHTML = "This position is already taken";
                                    setTimeout(() => {
                                        info.innerHTML = "Chose your positions."
                                    }, 2500)
                                }else{
                                    box.style.backgroundColor = "rgb(45, 84, 255)";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.classList.add('firstPartOfMediumShipVertical');
                                    boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgb(45, 84, 255)";
                                    boxes[Number(box.dataset.number) + 7].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].style.borderTopRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].classList.add('lastPartOfMediumShipVertical');
                                    counter_two--;
                                    mediumShip.innerHTML = counter_two;
                                }
                            }
                        }
                    })
                }else{
                    rotateSelected = false;
                    rotateButton.style.border = "none"
                    rotateButton.style.background = "none";
                    [...boxes].forEach((box) => {
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);
                            let num_one = Number(box.dataset.number) + 1;
                            let temporarly_two = window.getComputedStyle(boxes[num_one]) 
        
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                                boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    if(temporarly_one.backgroundColor === "rgb(45, 84, 255)" && temporarly_two.backgroundColor === "rgb(45, 84, 255)"){
                                        box.style.backgroundColor = "rgb(45, 84, 255)";
                                        boxes[Number(box.dataset.number) + 1].style.background = "rgb(45, 84, 255)";
                                    }else{
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 1].style.background = "none";
                                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                    }
                                }, {once : true})
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em"
                                })
                            }
                            box.onclick = () =>{
                                let temporarly = window.getComputedStyle(box);
                                let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 1])
                                if(temporarly.backgroundColor !== "rgba(45, 84, 255, 0.4)" || temporarly2.backgroundColor !== "rgba(45, 84, 255, 0.4)"){
                                    info.innerHTML = "This position is already taken";
                                    setTimeout(() => {
                                        info.innerHTML = "Chose your positions."
                                    }, 2500)
                                }else{
                                    box.style.backgroundColor = "rgb(45, 84, 255)";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.classList.add('firstPartOfMediumShipLinear');
                                    boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(45, 84, 255)";
                                    boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 1].classList.add('lastPartOfMediumShipLinear');
                                    counter_two--;
                                    mediumShip.innerHTML = counter_two;
                                }
                            }
                        }
                    })
                }
            }
            [...boxes].forEach((box) => {
                box.onmouseover = () => {
                    let temporarly_one = window.getComputedStyle(box);
                    let num_one = Number(box.dataset.number) + 1;
                    let temporarly_two = window.getComputedStyle(boxes[num_one]) 

                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                        boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                        boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                        box.addEventListener('mouseout', () => {
                            if(temporarly_one.backgroundColor === "rgb(45, 84, 255)" && temporarly_two.backgroundColor === "rgb(45, 84, 255)"){
                                box.style.backgroundColor = "rgb(45, 84, 255)";
                                boxes[Number(box.dataset.number) + 1].style.background = "rgb(45, 84, 255)";
                            }else{
                                box.style.background = "none";
                                box.style.borderRadius = "10em 10em";
                                boxes[Number(box.dataset.number) + 1].style.background = "none";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                            }
                        }, {once : true})
                    }
                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(45, 84, 255, 0.4)";
                        box.style.borderTopRightRadius = "1em 1em";
                        box.style.borderBottomRightRadius = "1em 1em";
                        box.addEventListener('mouseout', () => {
                            box.style.background = "none";
                            box.style.borderRadius = "10em 10em"
                        })
                    }
                    box.onclick = () =>{
                        let temporarly = window.getComputedStyle(box);
                        let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 1])
                        if(temporarly.backgroundColor !== "rgba(45, 84, 255, 0.4)" || temporarly2.backgroundColor !== "rgba(45, 84, 255, 0.4)"){
                            info.innerHTML = "This position is already taken";
                            setTimeout(() => {
                                info.innerHTML = "Chose your positions."
                            }, 2500)
                        }else{
                            box.style.backgroundColor = "rgb(45, 84, 255)";
                            box.style.borderTopRightRadius = "1em";
                            box.style.borderBottomRightRadius = "1em";
                            box.classList.add('firstPartOfMediumShipLinear');
                            boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(45, 84, 255)";
                            boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                            boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                            boxes[Number(box.dataset.number) + 1].classList.add('lastPartOfMediumShipLinear');
                            counter_two--;
                            mediumShip.innerHTML = counter_two;
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
            rotateButton.style.display = "none"
            mediumShip.style.border = "none";
            selected = false;
            main.style.zIndex = "-1";
            rotateButton.style.background = "none";
            rotateButton.style.border = "none";
        }
    }

    longShip.onclick = () => {
        let l_interval = setInterval(() => {
            if(counter_three <= 0){
                longShip.style.display = "none";
                main.style.zIndex = "-1";
                clearInterval(l_interval);
                rotateButton.style.display = "none";
            }
        },1)
        if(!selected){
            longShip.style.border = "5px solid yellow";
            selected = true;
            main.style.zIndex = "1";
            rotateButton.style.display = "block";
            rotateButton.onclick = () => {
                if(!rotateSelected){
                    [...boxes].forEach((box) => {
                        rotateSelected = true;
                        rotateButton.style.border = "2px solid rgba(0, 0, 0, 0.4)"
                        rotateButton.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);
                            let num_one = Number(box.dataset.number) + 7;
                            let temporarly_two = window.getComputedStyle(boxes[num_one]);
                            let num_two = Number(box.dataset.number) + 14;
                            let temporarly_three = window.getComputedStyle(boxes[num_two]) 
        
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 7].style.borderRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 14].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.borderTopRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    if(temporarly_one.backgroundColor === "rgb(255, 165, 0)" && temporarly_two.backgroundColor === "rgb(255, 165, 0)" && temporarly_three.backgroundColor === "rgb(255, 165, 0)"){
                                        box.style.backgroundColor = "rgb(255, 165, 0)";
                                        boxes[Number(box.dataset.number) + 7].style.background = "rgb(255, 165, 0)";
                                        boxes[Number(box.dataset.number) + 14].style.background = "rgb(255, 165, 0)";
                                    }else{
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em";
                                        boxes[Number(box.dataset.number) + 7].style.background = "none";
                                        boxes[Number(box.dataset.number) + 7].style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 14].style.background = "none";
                                        boxes[Number(box.dataset.number) + 14].style.borderRadius = "10em 10em";
                                    }
                                }, {once : true})
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" &&  temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em";
                                })
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 7].style.borderRadius = "1em 1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                    boxes[Number(box.dataset.number) + 7].style.background = "none";
                                    boxes[Number(box.dataset.number) + 7].style.borderRadius = "10em 10em";
                                })
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 14].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.borderTopRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                    boxes[Number(box.dataset.number) + 14].style.background = "none";
                                    boxes[Number(box.dataset.number) + 14].style.borderRadius = "10em 10em";
                                })
                            }
                            box.onclick = () =>{
                                let temporarly = window.getComputedStyle(box);
                                let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 7])
                                let temporarly3 = window.getComputedStyle(boxes[Number(box.dataset.number) + 14])
                                if(temporarly.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly2.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly3.backgroundColor !== "rgba(255, 165, 0, 0.4)"){
                                    info.innerHTML = "This position is already taken";
                                    setTimeout(() => {
                                        info.innerHTML = "Chose your positions."
                                    }, 2500)
                                }else{
                                    box.style.backgroundColor = "rgb(255, 165, 0)";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.classList.add('firstPartOfLongShipVertical');
                                    boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgb(255, 165, 0)";
                                    boxes[Number(box.dataset.number) + 7].style.borderBottomLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].style.borderBottomRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].style.borderTopRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].classList.add('centerPartOfLongShipVertical');
                                    boxes[Number(box.dataset.number) + 14].style.backgroundColor = "rgb(255, 165, 0)";
                                    boxes[Number(box.dataset.number) + 14].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 14].style.borderTopRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 14].classList.add('lastPartOfLongShipVertical');
                                    counter_three--;
                                    longShip.innerHTML = counter_three;
                                }
                            }
                        }
                    })
                }else{
                    rotateSelected = false;
                    rotateButton.style.border = "none"
                    rotateButton.style.background = "none";
            
                    [...boxes].forEach((box) => {
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);
                            let num_one = Number(box.dataset.number) + 1;
                            let temporarly_two = window.getComputedStyle(boxes[num_one]);
                            let num_two = Number(box.dataset.number) + 2;
                            let temporarly_three = window.getComputedStyle(boxes[num_two]) 
        
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                                boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    if(temporarly_one.backgroundColor === "rgb(255, 165, 0)" && temporarly_two.backgroundColor === "rgb(255, 165, 0)" && temporarly_three.backgroundColor === "rgb(255, 165, 0)"){
                                        box.style.backgroundColor = "rgb(255, 165, 0)";
                                        boxes[Number(box.dataset.number) + 1].style.background = "rgb(255, 165, 0)";
                                        boxes[Number(box.dataset.number) + 2].style.background = "rgb(255, 165, 0)";
                                    }else{
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 1].style.background = "none";
                                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 2].style.background = "none";
                                        boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                                    }
                                }, {once : true})
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" &&  temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                })
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                    boxes[Number(box.dataset.number) + 1].style.background = "none";
                                    boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                })
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                    boxes[Number(box.dataset.number) + 2].style.background = "none";
                                    boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                                })
                            }
                            box.onclick = () =>{
                                let temporarly = window.getComputedStyle(box);
                                let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 1])
                                let temporarly3 = window.getComputedStyle(boxes[Number(box.dataset.number) + 2])
                                if(temporarly.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly2.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly3.backgroundColor !== "rgba(255, 165, 0, 0.4)"){
                                    info.innerHTML = "This position is already taken";
                                    setTimeout(() => {
                                        info.innerHTML = "Chose your positions."
                                    }, 2500)
                                }else{
                                    box.style.backgroundColor = "rgb(255, 165, 0)";
                                    box.style.borderTopRightRadius = "1em"
                                    box.style.borderBottomRightRadius = "1em";
                                    box.classList.add('firstPartOfLongShipLinear')
                                    boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(255, 165, 0)";
                                    boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em";
                                    boxes[Number(box.dataset.number) + 1].classList.add('centerPartOfLongShipLinear');
                                    boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgb(255, 165, 0)";
                                    boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 2].classList.add('lastPartOfLongShipLinear')
                                    counter_three--;
                                    longShip.innerHTML = counter_three;
                                }
                            }
                        }
                    })
                }
            }
            
            [...boxes].forEach((box) => {
                box.onmouseover = () => {
                    let temporarly_one = window.getComputedStyle(box);
                    let num_one = Number(box.dataset.number) + 1;
                    let temporarly_two = window.getComputedStyle(boxes[num_one]);
                    let num_two = Number(box.dataset.number) + 2;
                    let temporarly_three = window.getComputedStyle(boxes[num_two]) 

                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                        boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                        boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                        box.addEventListener('mouseout', () => {
                            if(temporarly_one.backgroundColor === "rgb(255, 165, 0)" && temporarly_two.backgroundColor === "rgb(255, 165, 0)" && temporarly_three.backgroundColor === "rgb(255, 165, 0)"){
                                box.style.backgroundColor = "rgb(255, 165, 0)";
                                boxes[Number(box.dataset.number) + 1].style.background = "rgb(255, 165, 0)";
                                boxes[Number(box.dataset.number) + 2].style.background = "rgb(255, 165, 0)";
                            }else{
                                box.style.background = "none";
                                box.style.borderRadius = "10em 10em";
                                boxes[Number(box.dataset.number) + 1].style.background = "none";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                boxes[Number(box.dataset.number) + 2].style.background = "none";
                                boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                            }
                        }, {once : true})
                    }
                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" &&  temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        box.addEventListener('mouseout', () => {
                            box.style.background = "none";
                            box.style.borderRadius = "10em 10em";
                        })
                    }
                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em";
                        box.addEventListener('mouseout', () => {
                            box.style.background = "none";
                            box.style.borderRadius = "10em 10em";
                            boxes[Number(box.dataset.number) + 1].style.background = "none";
                            boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                        })
                    }
                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                        box.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 165, 0, 0.4)";
                        boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                        boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                        box.addEventListener('mouseout', () => {
                            box.style.background = "none";
                            box.style.borderRadius = "10em 10em";
                            boxes[Number(box.dataset.number) + 2].style.background = "none";
                            boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                        })
                    }
                    box.onclick = () =>{
                        let temporarly = window.getComputedStyle(box);
                        let temporarly2 = window.getComputedStyle(boxes[Number(box.dataset.number) + 1])
                        let temporarly3 = window.getComputedStyle(boxes[Number(box.dataset.number) + 2])
                        if(temporarly.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly2.backgroundColor !== "rgba(255, 165, 0, 0.4)" || temporarly3.backgroundColor !== "rgba(255, 165, 0, 0.4)"){
                            info.innerHTML = "This position is already taken";
                            setTimeout(() => {
                                info.innerHTML = "Chose your positions."
                            }, 2500)
                        }else{
                            box.style.backgroundColor = "rgb(255, 165, 0)";
                            box.style.borderTopRightRadius = "1em"
                            box.style.borderBottomRightRadius = "1em";
                            box.classList.add('firstPartOfLongShipLinear');
                            boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(255, 165, 0)";
                            boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em";
                            boxes[Number(box.dataset.number) + 1].classList.add('centerPartOfLongShipLinear');
                            boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgb(255, 165, 0)";
                            boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                            boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                            boxes[Number(box.dataset.number) + 2].classList.add('lastPartOfLongShipLinear');
                            counter_three--;
                            longShip.innerHTML = counter_three;
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
            rotateButton.style.display = "none";
            rotateButton.style.background = "none";
            rotateButton.style.border = "none";
        }
    }
    let start_interval = setInterval(() => {
        if(counter_one <= 0 && counter_two <= 0 && counter_three <= 0){
            start_button.style.display = "block";
            clearInterval(start_interval);
        }
    },1)
    
    start_button.onclick = () => {
        let isPlayerWinnerCounter = 10;
        let isEnemyWinnerCounter = 10;

        enemyBoats.style.display = "block";
        main.style.zIndex = "-1";
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
                box.style.background = "none";
                box.style.borderRadius = "10em 10em"
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
            main.style.zIndex = "1";
            [...boxes].forEach((box) => {
                box.onmouseover = () => {
                    if(box.classList.contains('hit') === false || box.classList.contains('missed') === false){
                        box.style.color = "rgba(255, 0, 0, 0.2)"
                        box.addEventListener( 'mouseout',() => {
                            box.style.color = "black";
                        }, {once : true})
                    }
                    if(box.classList.contains('hit') === true){
                        box.style.color = "black";
                    }
                    if(box.classList.contains('missed') === true){
                        box.style.color = "black"
                    }
                }
                box.addEventListener('click', () => {
                    if(box.classList.contains('enemy') === true){
                        box.classList.add('hit');
                        box.classList.remove('enemy');
                        box.style.backgroundColor = "rgb(255, 0, 0, 0.4)";
                        info.innerHTML = "You hit an oponent!";
                        if(box.classList.contains('hit')){
                            box.style.color = "rgba(255, 0, 0, 0.2)"
                        }
                        isPlayerWinnerCounter--;
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
                                isEnemyWinnerCounter--;
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
            let winner = setInterval(() => {
                if(isPlayerWinnerCounter <= 0){
                    info.innerHTML = "You won the game.";
                    clearInterval(winner);
                    main.style.zIndex
                }
                if(isEnemyWinnerCounter <= 0){
                    info.innerHTML = "The enemy won the game. You lost.";
                    clearInterval(winner);
                }
            }, 10)
        }, 1500)
    }
}

//Chci udelat lode z kulicek pri tahu soupere
//Chci udelat lepsi Ai, aby konfirgurovalo lode i vertikalne 
//Chci vylepsit hover pri hrani

