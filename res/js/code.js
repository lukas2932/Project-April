const boxes = document.getElementsByClassName("box");
const main = document.getElementById("main");
const enemyBoats = document.getElementById("enemyBoats");

const smallShip = document.getElementById("smallShip");
const mediumShip = document.getElementById("mediumShip");
const longShip = document.getElementById("longShip");

const info = document.getElementById("info");

const start_button = document.getElementById("start_button");
const indicator = document.getElementById("indicator");

const rotateButton = document.getElementById("rotateButton");

const play_again_button = document.getElementById("play_again_button");

const smallEnemyBoat = document.getElementById("smallEnemyBoat");
const mediumEnemyBoat = document.getElementById("mediumEnemyBoat");
const longEnemyBoat = document.getElementById("longEnemyBoat");
const boatsTitle = document.getElementById("boatsTitle");

const texts = document.getElementById("texts");
const ships = document.getElementById("ships");

const smallText = document.getElementById("smallText");
const mediumText = document.getElementById("mediumText");
const longText = document.getElementById("longText");

let selected = false;
let rotateSelected = false 

let counter_one = 3;
let counter_two = 3;
let counter_three = 2;

let small_enemy_boat_counter = 0;
let medium_enemy_boat_counter = 0;
let long_enemy_boat_counter = 0;

let small_boat_counter = 3;
let medium_boat_counter = 3;
let long_boat_counter = 2;


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
                smallText.style.display = "none";
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
                        box.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                        box.addEventListener('mouseout', () => {
                            let temporarly2 = window.getComputedStyle(box);
                            if(temporarly2.backgroundColor === "rgba(0, 0, 0, 0.3)"){
                                box.style.background = "none"
                            }
                            if(temporarly2.backgroundColor === "rgb(0, 0, 0)"){
                                box.style.backgroundColor = "rgb(0, 0, 0)"
                            }
                        }, {once : true})
                    }
                    box.onclick = () =>{
                        let temporarly = window.getComputedStyle(box);
                        if(temporarly.backgroundColor !== "rgba(0, 0, 0, 0.3)"){
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
                rotateButton.style.display = "none";
                mediumText.style.display = "none";
            }
        },1)
        if(!selected){
            mediumShip.style.border = "5px solid yellow";
            main.style.zIndex = "1";
            selected = true;
            rotateButton.style.display = "block";
            texts.style.justifyContent = "center";
            //Zde jsem skoncil
            rotateButton.onmouseover = () => {
                rotateButton.style.setProperty('--animationRotate', 'universal_hover_animation 1.5s forwards infinite');
                rotateButton.addEventListener('mouseout', () => {
                    rotateButton.style.setProperty('--animationRotate', 'none');
                }, {once : true})
            }
            rotateButton.onclick = () => {
                if(!rotateSelected){
                    rotateSelected = true;
                    rotateButton.style.border = "2px solid rgba(0, 0, 0, 0.4)"
                    rotateButton.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                    [...boxes].forEach((box) => {
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);
                            if(Number(box.dataset.number) <= 62){
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
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                }, {once : true})
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
                        }else{
                            box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                            box.style.borderBottomLeftRadius = "1em"
                            box.style.borderBottomRightRadius = "1em";
                            box.addEventListener('mouseout',() => {
                                box.style.background = "none";
                                box.style.borderRadius = "10em";
                            }, {once : true})
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

                            if(temporarly_one.backgroundColor === "rgb(45, 84, 255)"){
                                box.style.backgroundColor = "rgb(45, 84, 255)";
                            }
                            
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 6 || Number(box.dataset.number) === 13 || Number(box.dataset.number) === 20 || Number(box.dataset.number) === 27 || Number(box.dataset.number) === 34 || Number(box.dataset.number) === 41 || Number(box.dataset.number) === 48 || Number(box.dataset.number) === 55 || Number(box.dataset.number) === 62 || Number(box.dataset.number) === 69 )){
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout',() => {
                                    box.style.borderRadius = "10em";
                                    box.style.background = "none";
                                }, {once : true})
                            }
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
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em"
                                }, {once : true})
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

                    if(temporarly_one.backgroundColor === "rgb(45, 84, 255)"){
                        box.style.backgroundColor = "rgb(45, 84, 255)";
                    }
                            
                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 6 || Number(box.dataset.number) === 13 || Number(box.dataset.number) === 20 || Number(box.dataset.number) === 27 || Number(box.dataset.number) === 34 || Number(box.dataset.number) === 41 || Number(box.dataset.number) === 48 || Number(box.dataset.number) === 55 || Number(box.dataset.number) === 62 || Number(box.dataset.number) === 69 )){
                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        box.addEventListener('mouseout',() => {
                            box.style.borderRadius = "10em";
                            box.style.background = "none";
                        }, {once : true})
                    }
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
                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                        box.style.borderTopRightRadius = "1em 1em";
                        box.style.borderBottomRightRadius = "1em 1em";
                        box.addEventListener('mouseout', () => {
                            box.style.background = "none";
                            box.style.borderRadius = "10em 10em"
                        }, {once : true})
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
            texts.style.justifyContent = "space-between";
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
                longText.style.display = "none";
            }
        },1)
        if(!selected){
            longShip.style.border = "5px solid yellow";
            selected = true;
            main.style.zIndex = "1";
            rotateButton.style.display = "block";
            texts.style.justifyContent = "center";
            rotateButton.onclick = () => {
                if(!rotateSelected){
                    [...boxes].forEach((box) => {
                        rotateSelected = true;
                        rotateButton.style.border = "2px solid rgba(0, 0, 0, 0.4)"
                        rotateButton.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                        box.onmouseover = () => {
                            let temporarly_one = window.getComputedStyle(box);

                            if(Number(box.dataset.number) <= 62){
                                let num_one = Number(box.dataset.number) + 7;
                                let temporarly_two = window.getComputedStyle(boxes[num_one]);

                                if(Number(box.dataset.number) <= 55){
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
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderBottomLeftRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        box.addEventListener('mouseout', () => {
                                            box.style.background = "none";
                                            box.style.borderRadius = "10em";
                                        })
                                    }
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderBottomLeftRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        boxes[Number(box.dataset.number) + 7].style.borderRadius = "1em 1em";
                                        box.addEventListener('mouseout', () => {
                                            box.style.background = "none";
                                            box.style.borderRadius = "10em 10em";
                                            boxes[Number(box.dataset.number) + 7].style.background = "none";
                                            boxes[Number(box.dataset.number) + 7].style.borderRadius = "10em 10em";
                                        })
                                    }
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderBottomLeftRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        boxes[Number(box.dataset.number) + 14].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
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
                                }else{
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 7].style.backgroundColor  = "rgba(255, 0, 0, 0.4)";
                                    boxes[Number(box.dataset.number) + 7].style.borderRadius = "1em 1em";
                                    box.addEventListener('mouseout',() => {
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 7].style.background = "none";
                                        boxes[Number(box.dataset.number) + 7].style.borderRadius = "10em 10em";
                                    }, {once : true})

                                }
                            }else{
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                                box.style.borderBottomLeftRadius = "1em"
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout',() => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                }, {once : true})
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
                            if(Number(box.dataset.number) <= 68){
                                let num_one = Number(box.dataset.number) + 1;
                                let temporarly_two = window.getComputedStyle(boxes[num_one]);
                                if(Number(box.dataset.number) <= 67){
                                    let num_two = Number(box.dataset.number) + 2;
                                    let temporarly_three = window.getComputedStyle(boxes[num_two]);
        
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 6 || Number(box.dataset.number) === 13 || Number(box.dataset.number) === 20 || Number(box.dataset.number) === 27 || Number(box.dataset.number) === 34 || Number(box.dataset.number) === 41 || Number(box.dataset.number) === 48 || Number(box.dataset.number) === 55 || Number(box.dataset.number) === 62 || Number(box.dataset.number) === 69 )){
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                                        box.style.borderTopRightRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        box.addEventListener('mouseout',() => {
                                            box.style.borderRadius = "10em";
                                            box.style.background = "none";
                                        }, {once : true})
                                    }
                                    
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 5 || Number(box.dataset.number) === 12 || Number(box.dataset.number) === 19 || Number(box.dataset.number) === 26 || Number(box.dataset.number) === 33 || Number(box.dataset.number) === 40 || Number(box.dataset.number) === 47 || Number(box.dataset.number) === 54 || Number(box.dataset.number) === 61 || Number(box.dataset.number) === 68 )){
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderTopRightRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                                        box.addEventListener('mouseout',() => {
                                            box.style.borderRadius = "10em";
                                            box.style.background = "none";
                                            boxes[Number(box.dataset.number) + 1].style.background = "none";
                                            boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                        }, {once : true})
                                    } 
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderTopRightRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em";
                                        box.addEventListener('mouseout', () => {
                                            box.style.background = "none";
                                            box.style.borderRadius = "10em 10em";
                                            boxes[Number(box.dataset.number) + 1].style.background = "none";
                                            boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                        }, {once : true})
                                    }
        
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
                                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        box.style.borderTopRightRadius = "1em";
                                        box.style.borderBottomRightRadius = "1em";
                                        box.addEventListener('mouseout', () => {
                                            box.style.background = "none";
                                            box.style.borderRadius = "10em 10em";
                                        }, {once : true})
                                    }
                                    if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                        if(Number(box.dataset.number) !== 5 && Number(box.dataset.number) !== 12 && Number(box.dataset.number) !== 19 && Number(box.dataset.number) !== 26 && Number(box.dataset.number) !== 33 && Number(box.dataset.number) !== 40 && Number(box.dataset.number) !== 47 && Number(box.dataset.number) !== 54 && Number(box.dataset.number) !== 61 ){
                                            box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                            box.style.borderTopRightRadius = "1em";
                                            box.style.borderBottomRightRadius = "1em";
                                            boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                            boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                            boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                            box.addEventListener('mouseout', () => {
                                                box.style.background = "none";
                                                box.style.borderRadius = "10em 10em";
                                                boxes[Number(box.dataset.number) + 2].style.background = "none";
                                                boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                                            }, {once : true})
                                        }else{
                                            box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                            box.style.borderTopRightRadius = "1em";
                                            box.style.borderBottomRightRadius = "1em";
                                            box.addEventListener('mouseout', () => {
                                                box.style.background = "none";
                                                box.style.borderRadius = "10em 10em";
                                            }, {once : true})
                                        }
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
                                }else if(Number(box.dataset.number) === 68){
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                                    box.addEventListener('mouseout',() => {
                                        box.style.borderRadius = "10em";
                                        box.style.background = "none";
                                        boxes[Number(box.dataset.number) + 1].style.background = "none";
                                        boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                    }, {once : true})
                                } 
                            }else{
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout',() => {
                                    box.style.borderRadius = "10em";
                                    box.style.background = "none";
                                }, {once : true})
                            }
                        }
                    })
                }
            }
            
            [...boxes].forEach((box) => {
                box.onmouseover = () => {
                    let temporarly_one = window.getComputedStyle(box);
                    if(Number(box.dataset.number) <= 68){
                        let num_one = Number(box.dataset.number) + 1;
                        let temporarly_two = window.getComputedStyle(boxes[num_one]);
                        if(Number(box.dataset.number) <= 67){
                            let num_two = Number(box.dataset.number) + 2;
                            let temporarly_three = window.getComputedStyle(boxes[num_two]);

                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 6 || Number(box.dataset.number) === 13 || Number(box.dataset.number) === 20 || Number(box.dataset.number) === 27 || Number(box.dataset.number) === 34 || Number(box.dataset.number) === 41 || Number(box.dataset.number) === 48 || Number(box.dataset.number) === 55 || Number(box.dataset.number) === 62 || Number(box.dataset.number) === 69 )){
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout',() => {
                                    box.style.borderRadius = "10em";
                                    box.style.background = "none";
                                }, {once : true})
                            }
                            
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && (Number(box.dataset.number) === 5 || Number(box.dataset.number) === 12 || Number(box.dataset.number) === 19 || Number(box.dataset.number) === 26 || Number(box.dataset.number) === 33 || Number(box.dataset.number) === 40 || Number(box.dataset.number) === 47 || Number(box.dataset.number) === 54 || Number(box.dataset.number) === 61 || Number(box.dataset.number) === 68 )){
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                                box.addEventListener('mouseout',() => {
                                    box.style.borderRadius = "10em";
                                    box.style.background = "none";
                                    boxes[Number(box.dataset.number) + 1].style.background = "none";
                                    boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                }, {once : true})
                            } 
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor !== "rgba(0, 0, 0, 0)"){
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                    boxes[Number(box.dataset.number) + 1].style.background = "none";
                                    boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                                }, {once : true})
                            }

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
                                box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.addEventListener('mouseout', () => {
                                    box.style.background = "none";
                                    box.style.borderRadius = "10em 10em";
                                }, {once : true})
                            }
                            if(temporarly_one.backgroundColor === "rgba(0, 0, 0, 0)" && temporarly_two.backgroundColor !== "rgba(0, 0, 0, 0)" && temporarly_three.backgroundColor === "rgba(0, 0, 0, 0)"){
                                if(Number(box.dataset.number) !== 5 && Number(box.dataset.number) !== 12 && Number(box.dataset.number) !== 19 && Number(box.dataset.number) !== 26 && Number(box.dataset.number) !== 33 && Number(box.dataset.number) !== 40 && Number(box.dataset.number) !== 47 && Number(box.dataset.number) !== 54 && Number(box.dataset.number) !== 61 ){
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                    boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                    box.addEventListener('mouseout', () => {
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                        boxes[Number(box.dataset.number) + 2].style.background = "none";
                                        boxes[Number(box.dataset.number) + 2].style.borderRadius = "10em 10em";
                                    }, {once : true})
                                }else{
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.addEventListener('mouseout', () => {
                                        box.style.background = "none";
                                        box.style.borderRadius = "10em 10em";
                                    }, {once : true})
                                }
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
                        }else if(Number(box.dataset.number) === 68){
                            box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                            box.style.borderTopRightRadius = "1em";
                            box.style.borderBottomRightRadius = "1em";
                            boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                            boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em 1em";
                            box.addEventListener('mouseout',() => {
                                box.style.borderRadius = "10em";
                                box.style.background = "none";
                                boxes[Number(box.dataset.number) + 1].style.background = "none";
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "10em 10em";
                            }, {once : true})
                        } 
                    }else{
                        box.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                        box.style.borderTopRightRadius = "1em";
                        box.style.borderBottomRightRadius = "1em";
                        box.addEventListener('mouseout',() => {
                            box.style.borderRadius = "10em";
                            box.style.background = "none";
                        }, {once : true})
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
            texts.style.justifyContent = "space-between";
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
        let isPlayerWinnerCounter = 15;
        let isEnemyWinnerCounter = 15;

        enemyBoats.style.display = "block";
        texts.style.display = "flex";
        main.style.zIndex = "-1";
        indicator.style.display = "block";
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
        let indicatorInterval = setInterval(() => {
            let counter = 0;
            for(let i = 0; i <= boxes.length - 1; i++){
                if(boxes[i].classList.contains('enemy') === true){
                    counter++;
                }else{
                    continue;
                }
            }
            indicator.innerHTML = "Remaining enemy<br> boxes: " + counter;

        }, 10);
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
        let arrayEnemyMisses = [];
        let counter_ai = 0;

        for(let i = 1; i <= 1; i++){
            for(let j = 1; j <= 3; j++){
                let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
                if(array.includes(randomNum) === false){
                    boxes[randomNum].classList.add('enemy');
                    boxes[randomNum].classList.add('smallShipEnemy');
                    array.push(randomNum);
                    console.log(randomNum)
                    small_enemy_boat_counter++;
                }else{
                    j--;
                }
            }
            for(let j = 1; j <= 3; j++){
                let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
                if(randomNum >= 69){
                    j--;
                    continue;
                }
                if(array.includes(randomNum) === false && array.includes(randomNum + 1) === false && array.includes(randomNum + 7) === false){
                    let randomNum1 = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    if(randomNum1 === 1 && randomNum !== 6 && randomNum !== 13 && randomNum !== 20 && randomNum !== 27 && randomNum !== 34 && randomNum !== 41 && randomNum !== 48 && randomNum !== 55 && randomNum !== 62 && randomNum !== 69){
                        console.log(randomNum1);
                        boxes[randomNum].classList.add('enemy');
                        boxes[randomNum].classList.add('enemy_first_part_of_medium_ship_linear')
                        let numSecond = randomNum + 1;
                        boxes[numSecond].classList.add('enemy');
                        boxes[numSecond].classList.add('enemy_last_part_of_medium_ship_linear');
                        array.push(randomNum);
                        array.push(numSecond);
                        medium_enemy_boat_counter++;
                    }
                    if(randomNum1 === 2 && randomNum < 63){
                        console.log(randomNum1);
                        boxes[randomNum].classList.add('enemy');
                        boxes[randomNum].classList.add('enemy_first_part_of_medium_ship_vertical');
                        let numSecond = randomNum + 7;
                        boxes[numSecond].classList.add('enemy');
                        boxes[numSecond].classList.add('enemy_last_part_of_medium_ship_vertical');
                        array.push(randomNum);
                        array.push(numSecond);
                        medium_enemy_boat_counter++;
                    }
                }else{
                    j--;
                }
            }
            for(let j = 1; j <= 2; j++){
                let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
                if(randomNum >= 68){
                    j--;
                    continue;
                }
                if(array.includes(randomNum) === false && array.includes(randomNum + 1) === false && array.includes(randomNum + 2) === false && array.includes(randomNum + 7) === false && array.includes(randomNum + 14) === false){ 
                    let randomNum1 = Math.floor(Math.random() * (2 - 1 + 1) + 2);
                    if(randomNum1 === 1 && randomNum !== 6 && randomNum !== 13 && randomNum !== 20 && randomNum !== 27 && randomNum !== 34 && randomNum !== 41 && randomNum !== 48 && randomNum !== 55 && randomNum !== 62 && randomNum !== 69
                        && randomNum !== 5 && randomNum !== 12 && randomNum !== 19 && randomNum !== 26 && randomNum !== 33 && randomNum!== 40 && randomNum !== 47 && randomNum !== 54 && randomNum !== 61 && randomNum !== 68){
                        console.log(randomNum1)
                        boxes[randomNum].classList.add('enemy');
                        boxes[randomNum].classList.add('enemy_first_part_of_long_ship_linear');
                        let numSecond = randomNum + 1;
                        boxes[numSecond].classList.add('enemy');
                        boxes[numSecond].classList.add('enemy_center_part_of_long_ship_linear');
                        array.push(numSecond);
                        let numThird = numSecond + 1;
                        boxes[numThird].classList.add('enemy');
                        boxes[numThird].classList.add('enemy_last_part_of_long_ship_linear');
                        array.push(randomNum);
                        array.push(numSecond);
                        array.push(numThird);
                        long_enemy_boat_counter++;
                    }
                    if(randomNum1 === 2 && randomNum < 56){
                        console.log(randomNum1)
                        boxes[randomNum].classList.add('enemy');
                        boxes[randomNum].classList.add('enemy_first_part_of_long_ship_vertical');
                        let numSecond = randomNum + 7;
                        boxes[numSecond].classList.add('enemy');
                        boxes[numSecond].classList.add('enemy_center_part_of_long_ship_vertical');
                        array.push(numSecond);
                        let numThird = numSecond + 7;
                        boxes[numThird].classList.add('enemy');
                        boxes[numThird].classList.add('enemy_last_part_of_long_ship_vertical');
                        array.push(randomNum);
                        array.push(numSecond);
                        array.push(numThird);
                        long_enemy_boat_counter++;
                    }
                }else{
                    j--;
                }
            }
            for(let j = 0; j <= boxes.length - 1; j++){
                if(boxes[j].classList.contains('enemy') === true){
                    counter_ai++;
                }
            }
            if(counter_ai === 15){
                console.log("Counter ai: " + counter_ai)
                break;
            }else{
                [...boxes].forEach((box) => {
                    if(box.classList.contains('enemy') === true){
                        box.classList.remove('enemy');
                    }
                    if(box.classList.contains('smallShipEnemy') === true){
                        box.classList.remove('smallShipEnemy');
                    }
                    if(box.classList.contains('enemy_first_part_of_medium_ship_linear') === true){
                        box.classList.remove('enemy_first_part_of_medium_ship_linear');
                    }
                    if(box.classList.contains('enemy_last_part_of_medium_ship_linear') === true){
                        box.classList.remove('enemy_last_part_of_medium_ship_linear');
                    }
                    if(box.classList.contains('enemy_first_part_of_medium_ship_vertical') === true){
                        box.classList.remove('enemy_first_part_of_medium_ship_vertical');
                    }
                    if(box.classList.contains('enemy_last_part_of_medium_ship_vertical') === true){
                        box.classList.remove('enemy_last_part_of_medium_ship_vertical');
                    }
                    if(box.classList.contains('enemy_first_part_of_long_ship_linear') === true){
                        box.classList.remove('enemy_first_part_of_long_ship_linear');
                    }
                    if(box.classList.contains('enemy_center_part_of_long_ship_linear') === true){
                        box.classList.remove('enemy_center_part_of_long_ship_linear');
                    }
                    if(box.classList.contains('enemy_last_part_of_long_ship_linear') === true){
                        box.classList.remove('enemy_last_part_of_long_ship_linear');
                    }
                    if(box.classList.contains('enemy_first_part_of_long_ship_vertical') === true){
                        box.classList.remove('enemy_first_part_of_long_ship_vertical');
                    }
                    if(box.classList.contains('enemy_center_part_of_long_ship_vertical') === true){
                        box.classList.remove('enemy_center_part_of_long_ship_vertical');
                    }
                    if(box.classList.contains('enemy_last_part_of_long_ship_vertical') === true){
                        box.classList.remove('enemy_last_part_of_long_ship_vertical');
                    }
                })
                array.length = 0;
                counter_ai = 0;
                i--;
                small_enemy_boat_counter = 0;
                medium_enemy_boat_counter = 0;
                long_enemy_boat_counter = 0;
            }
        }
        console.log(array)
        start_button.style.display = "none";

        info.innerHTML = "The enemy has chosen a boxes.";
        boatsTitle.innerHTML = "Enemy boats";
        smallEnemyBoat.innerHTML = "Small ships : " + small_enemy_boat_counter;
        mediumEnemyBoat.innerHTML = "Medium ships: " + medium_enemy_boat_counter;
        longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
        setTimeout(() => {
            info.innerHTML = "Now it's your turn.";
            main.style.zIndex = "1";
            [...boxes].forEach((box) => {
                box.onmouseover = () => {
                    if(box.classList.contains('hit') === false || box.classList.contains('missed') === false){
                        box.style.color = "rgba(255, 0, 0, 0.3)"
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
                        if(box.classList.contains('smallShipEnemy') === true){
                            box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                            box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                            box.classList.add('DestroyedSmallShipEnemy');
                            small_enemy_boat_counter--;
                            smallEnemyBoat.innerHTML = "Small ships: " + small_enemy_boat_counter;
                        }
                        if(box.classList.contains('enemy_first_part_of_medium_ship_linear') === true){
                            if(boxes[Number(box.dataset.number) + 1].classList.contains('enemy_last_part_of_medium_ship_linear') === true && boxes[Number(box.dataset.number) + 1].classList.contains('hit') === true){
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.classList.add('destroyed_enemy_first_part_of_medium_ship_linear');
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].classList.add('destroyed_enemy_last_part_of_medium_ship_linear')
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                medium_enemy_boat_counter--;
                                mediumEnemyBoat.innerHTML = "Medium ships: " + medium_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_last_part_of_medium_ship_linear') === true){
                            if(boxes[Number(box.dataset.number) - 1].classList.contains('enemy_first_part_of_medium_ship_linear') === true && boxes[Number(box.dataset.number) - 1].classList.contains('hit') === true){
                                box.style.borderTopLeftRadius = "1em";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_last_part_of_medium_ship_linear')
                                boxes[Number(box.dataset.number) - 1].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 1].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) - 1].classList.add('destroyed_enemy_first_part_of_medium_ship_linear')
                                medium_enemy_boat_counter--;
                                mediumEnemyBoat.innerHTML = "Medium ships: " + medium_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_first_part_of_medium_ship_vertical') === true){
                            if(boxes[Number(box.dataset.number) + 7].classList.contains('enemy_last_part_of_medium_ship_vertical') === true && boxes[Number(box.dataset.number) + 7].classList.contains('hit') === true){
                                box.style.borderBottomRightRadius = "1em";
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_first_part_of_medium_ship_vertical')
                                boxes[Number(box.dataset.number) + 7].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) + 7].classList.add('destroyed_enemy_last_part_of_medium_ship_vertical')
                                medium_enemy_boat_counter--;
                                mediumEnemyBoat.innerHTML = "Medium ships: " + medium_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_last_part_of_medium_ship_vertical') === true){
                            if(boxes[Number(box.dataset.number) - 7].classList.contains('enemy_first_part_of_medium_ship_vertical') === true && boxes[Number(box.dataset.number) - 7].classList.contains('hit') === true){
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderTopLeftRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_last_part_of_medium_ship_vertical')
                                boxes[Number(box.dataset.number) - 7].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) - 7].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 7].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) - 7].classList.add('destroyed_enemy_first_part_of_medium_ship_vertical')
                                medium_enemy_boat_counter--;
                                mediumEnemyBoat.innerHTML = "Medium ships: " + medium_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_first_part_of_long_ship_linear') === true){
                            if(boxes[Number(box.dataset.number) + 1].classList.contains('enemy_center_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) + 1].classList.contains('hit') === true && boxes[Number(box.dataset.number) + 2].classList.contains('enemy_last_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) + 2].classList.contains('hit') === true){
                                box.style.borderTopRightRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_first_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) + 1].style.borderRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) + 1].classList.add('destroyed_enemy_center_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) + 2].classList.add('destroyed_enemy_last_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) + 2].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 2].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 2].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 2].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_center_part_of_long_ship_linear') === true){
                            if(boxes[Number(box.dataset.number) - 1].classList.contains('enemy_first_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) - 1].classList.contains('hit') === true && boxes[Number(box.dataset.number) + 1].classList.contains('enemy_last_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) + 1].classList.contains('hit') === true){
                                box.style.borderRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_center_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) - 1].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 1].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) - 1].classList.add('destroyed_enemy_first_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) + 1].classList.add('destroyed_enemy_last_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) + 1].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_last_part_of_long_ship_linear') === true){
                            if(boxes[Number(box.dataset.number) - 1].classList.contains('enemy_center_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) - 1].classList.contains('hit') === true && boxes[Number(box.dataset.number) - 2].classList.contains('enemy_first_part_of_long_ship_linear') === true && boxes[Number(box.dataset.number) - 2].classList.contains('hit') === true){
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderTopLeftRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_last_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) - 1].style.borderRadius = "1em";
                                boxes[Number(box.dataset.number) - 1].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 1].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) - 1].classList.add('destroyed_enemy_center_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) - 2].classList.add('destroyed_enemy_first_part_of_long_ship_linear');
                                boxes[Number(box.dataset.number) - 2].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 2].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 2].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 2].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_first_part_of_long_ship_vertical') === true){
                            if(boxes[Number(box.dataset.number) + 7].classList.contains('enemy_center_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) + 7].classList.contains('hit') === true && boxes[Number(box.dataset.number) + 14].classList.contains('enemy_last_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) + 14].classList.contains('hit') === true){
                                box.style.borderBottomLeftRadius = "1em";
                                box.style.borderBottomRightRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_first_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) + 7].style.borderRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "1em";
                                boxes[Number(box.dataset.number) + 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) + 7].classList.add('destroyed_enemy_center_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) + 14].classList.add('destroyed_enemy_last_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) + 14].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 14].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 14].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_center_part_of_long_ship_vertical') === true){
                            if(boxes[Number(box.dataset.number) + 7].classList.contains('enemy_last_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) + 7].classList.contains('hit') === true && boxes[Number(box.dataset.number) - 7].classList.contains('enemy_first_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) - 7].classList.contains('hit') === true){
                                box.style.borderRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                box.classList.add('destroyed_enemy_center_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) + 7].style.borderTopLeftRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.borderTopRightRadius = "1em";
                                boxes[Number(box.dataset.number) + 7].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) + 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) + 7].classList.add('destroyed_enemy_last_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) - 7].classList.add('destroyed_enemy_first_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) - 7].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 7].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) - 7].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        if(box.classList.contains('enemy_last_part_of_long_ship_vertical') === true){
                            if(boxes[Number(box.dataset.number) - 7].classList.contains('enemy_center_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) - 7].classList.contains('hit') === true && boxes[Number(box.dataset.number) - 14].classList.contains('enemy_first_part_of_long_ship_vertical') === true && boxes[Number(box.dataset.number) - 14].classList.contains('hit') === true){
                                box.style.borderTopLeftRadius = "1em";
                                box.style.borderTopRightRadius = "1em";
                                box.style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                box.style.animation = "destroyed_boat_animation 1.5s forwards  infinite";
                                box.classList.add('destroyed_enemy_last_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) - 7].style.borderRadius = "1em";
                                boxes[Number(box.dataset.number) - 7].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 7].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                boxes[Number(box.dataset.number) - 7].classList.add('destroyed_enemy_center_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) - 14].classList.add('destroyed_enemy_first_part_of_long_ship_vertical');
                                boxes[Number(box.dataset.number) - 14].style.borderBottomRightRadius = "1em";
                                boxes[Number(box.dataset.number) - 14].style.borderBottomLeftRadius = "1em";
                                boxes[Number(box.dataset.number) - 14].style.backgroundColor = "rgb(255, 0, 0, 0.55)";
                                boxes[Number(box.dataset.number) - 14].style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                long_enemy_boat_counter--;
                                longEnemyBoat.innerHTML = "Long ships: " + long_enemy_boat_counter;
                            }
                        }
                        isPlayerWinnerCounter--;
                    }else{
                        main.style.zIndex = "-1 ";
                        info.innerHTML = "Miss";
                        box.classList.add('missed');
                        box.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
                        setTimeout(() => {
                            info.innerHTML = "Now it's enemy turn.";
                        }, 1000)
                        setTimeout(() => {
                            [...boxes].forEach((box) => {
                                box.style.animation = "none";
                                box.style.color = "black";
                                if(box.classList.contains('smallShip') === true){
                                    box.style.backgroundColor = "rgb(0, 0, 0)"
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('firstPartOfMediumShipLinear') === true){
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.borderBottomLeftRadius = "10em";
                                    box.style.borderTopLeftRadius = "10em"
                                }
                                if(box.classList.contains('lastPartOfMediumShipLinear') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "10em";
                                    box.style.borderTopRightRadius = "10em";
                                }
                                if(box.classList.contains('firstPartOfMediumShipVertical') === true){
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.borderTopLeftRadius = "10em";
                                    box.style.borderTopRightRadius = "10em";
                                }
                                if(box.classList.contains('lastPartOfMediumShipVertical') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "10em";
                                    box.style.borderBottomLeftRadius = "10em";
                                }
                                if(box.classList.contains('mediumShip') === true){
                                    box.style.backgroundColor = "rgb(45, 84, 255)"
                                }
                                if(box.classList.contains('longShip') === true){
                                    box.style.backgroundColor = "rgb(255, 165, 0)"
                                }
                                if(box.classList.contains('firstPartOfLongShipLinear') === true){
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.borderTopLeftRadius = "10em";
                                    box.style.borderBottomLeftRadius = "10em";
                                }
                                if(box.classList.contains('centerPartOfLongShipLinear') === true){
                                    box.style.borderRadius = "1em 1em";
                                }
                                if(box.classList.contains('lastPartOfLongShipLinear') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "10em";
                                    box.style.borderTopRightRadius = "10em";
                                }
                                if(box.classList.contains('firstPartOfLongShipVertical')){
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.borderTopRightRadius = "10em";
                                    box.style.borderTopLeftRadius = "10em";
                                }
                                if(box.classList.contains('centerPartOfLongShipVertical')){
                                    box.style.borderRadius = "1em 1em";
                                }
                                if(box.classList.contains('lastPartOfLongShipVertical')){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomLeftRadius = "10em";
                                    box.style.borderBottomRightRadius = "10em";
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
                                    box.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
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
                                if(box.classList.contains('smallShip') === false && box.classList.contains('mediumShip') === false && box.classList.contains('longShip') === false){
                                    box.style.borderRadius = "10em 10em";
                                }
                                
                            });
                        }, 1000)
                        setTimeout(() => {
                            for(let i = 1; i <= 1; i++){
                                let randomNum = Math.floor(Math.random() * (69 - 0 + 1) + 0);
                                console.log(randomNum);
                                if(arrayEnemyMisses.includes(randomNum) === false){
                                    if(boxes[randomNum].classList.contains('smallShip') === true || boxes[randomNum].classList.contains('mediumShip') === true || boxes[randomNum].classList.contains('longShip') === true){
                                        boxes[randomNum].classList.add('enemyHit');
                                        boxes[randomNum].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                        arrayEnemyMisses.push(randomNum);
                                        isEnemyWinnerCounter--;
                                    }else{
                                        boxes[randomNum].classList.add('enemyMissed');
                                        boxes[randomNum].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                                        arrayEnemyMisses.push(randomNum);
                                    }
                                }else{
                                    i--;
                                }
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
                                    box.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
                                }
                                if(box.classList.contains('enemyMissed') === true){
                                    box.style.background = "none"
                                }
                                if(box.classList.contains('missed') === true && box.classList.contains('enemyMissed') === true){
                                    box.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                                }
                                if(box.classList.contains('hit') === true){
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                                }
                                if(box.classList.contains('firstPartOfMediumShipLinear') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('lastPartOfMediumShipLinear') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('firstPartOfMediumShipVertical') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('lastPartOfMediumShipVertical') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('firstPartOfLongShipLinear') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('centerPartOfLongShipLinear') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('lastPartOfLongShipLinear') === true){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('firstPartOfLongShipVertical')){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('centerPartOfLongShipVertical')){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('lastPartOfLongShipVertical')){
                                    box.style.borderRadius = "10em 10em"
                                }
                                if(box.classList.contains('destroyed_enemy_first_part_of_medium_ship_linear') === true){
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)";
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_last_part_of_medium_ship_linear') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_first_part_of_medium_ship_vertical') === true){
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_last_part_of_medium_ship_vertical') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_first_part_of_long_ship_linear') === true){
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_center_part_of_long_ship_linear') === true){
                                    box.style.borderRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_last_part_of_long_ship_linear') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_first_part_of_long_ship_vertical') === true){
                                    box.style.borderBottomLeftRadius = "1em";
                                    box.style.borderBottomRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_center_part_of_long_ship_vertical') === true){
                                    box.style.borderRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('destroyed_enemy_last_part_of_long_ship_vertical') === true){
                                    box.style.borderTopLeftRadius = "1em";
                                    box.style.borderTopRightRadius = "1em";
                                    box.style.backgroundColor = "rgba(255, 0, 0, 0.55)"
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
                                }
                                if(box.classList.contains('DestroyedSmallShipEnemy') === true){
                                    box.style.animation = "destroyed_boat_animation 1.5s forwards infinite";
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
                    main.style.zIndex = "-1";
                    play_again_button.style.display = "block";
                    play_again_button.innerHTML = "Play Again";
                    enemyBoats.style.display = "none";
                    play_again_button.onclick = () => {
                        location.reload();
                    }
                }
                if(isEnemyWinnerCounter <= 0){
                    info.innerHTML = "The enemy won the game. You lost.";
                    main.style.zIndex = "-1";
                    play_again_button.style.display = "block";
                    play_again_button.innerHTML = "Play Again";
                    enemyBoats.style.display = "none";
                    play_again_button.onclick = () => {
                        location.reload();
                    }
                    clearInterval(winner);
                }
            }, 10)
        }, 1500)
    }
}

//Pole okolo lodi v konfiguraci, aby nebyly moc u sebe
//Trochu zlepsit ai, aby se po urcitym kole strefilo do lode
