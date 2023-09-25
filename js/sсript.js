
const gameCard = document.querySelector('.game_card')
const buttons = document.querySelectorAll('.card')
const changeCard = document.querySelector('.change_card')
const numberMoves = document.querySelector('.number_moves')
const conteinerLose = document.querySelector('.conteiner_lose')
const conteinerWin = document.querySelector('.conteiner_win')
const conteiner = document.querySelector('.conteiner')
const buttonRestart= document.querySelector('.restart')
const check = document.querySelector('.check')
const row1Cards = document.querySelectorAll('.row1 .card');
const row2Cards = document.querySelectorAll('.row2 .card');
const row3Cards = document.querySelectorAll('.row3 .card');
const row4Cards = document.querySelectorAll('.row4 .card');
const buttonNextLevel = document.querySelector('.next_level')
const buttonReturn = document.querySelector('.return')
const allButtons = document.querySelectorAll('button')
const quantityReturn = document.querySelector('.quantity_return')
const level = document.querySelector('.level')
let quantityClickedReturn = 0



const cardsIndexsCollection = {
    0: [3,4],
    1: [5,6],
    2: [7,8],
    3: [9,10],
    4: [10,11],
    5: [12, 13],
    6: [13,14],
    7: [15,16],
    8: [16,17],
    9: [18,19],
    10: [19,20],
    11: [20,21],
    12: [21,22],
    13: [22,23],
    14: [23,24],
    15: [24,25],
    16: [25,26],
    17: [26,27],
};

let objOldValue = {
    oldNumbersMoves: [],
    oldValueGameCard: [],
    oldValueCheck: [],
    oldValueCard: [],
    nameParentClickedButton: [],
    bolean: [],
    idClickedCard: [],
    oldValueBackground: [],
    numberArray: []
}

function restartObjectImageCards () {
    return objecCards = {
        1: [
            "url('/img/cards/two/photo_2023-08-22_16-28-20.jpg')",
            "url('/img/cards/two/photo_2023-08-22_16-28-25.jpg')",
            "url('/img/cards/two/photo_2023-08-22_16-28-30.jpg')",
            "url('/img/cards/two/photo_2023-08-22_16-28-36.jpg')"
        ],
        2: [
            "url('/img/cards/three/photo_2023-08-22_16-27-47.jpg')",
            "url('/img/cards/three/photo_2023-08-22_16-27-52.jpg')",
            "url('/img/cards/three/photo_2023-08-22_16-28-10.jpg')",
            "url('/img/cards/three/photo_2023-08-22_16-28-15.jpg')"
        ],
        3: [
            "url('/img/cards/four/photo_2023-08-22_16-27-35.jpg')",
            "url('/img/cards/four/photo_2023-08-22_16-27-41.jpg')",
            "url('/img/cards/four/photo_2023-08-22_16-27-58.jpg')",
            "url('/img/cards/four/photo_2023-08-22_16-28-04.jpg')"
        ],
        4: [
            "url('/img/cards/five/photo_2023-08-22_16-26-58.jpg')",
            "url('/img/cards/five/photo_2023-08-22_16-27-04.jpg')",
            "url('/img/cards/five/photo_2023-08-22_16-27-21.jpg')",
            "url('/img/cards/five/photo_2023-08-22_16-27-30.jpg')"
        ],
        5: [
            "url('/img/cards/six/photo_2023-08-22_16-26-45.jpg')",
            "url('/img/cards/six/photo_2023-08-22_16-26-53.jpg')",
            "url('/img/cards/six/photo_2023-08-22_16-27-10.jpg')",
            "url('/img/cards/six/photo_2023-08-22_16-27-15.jpg')"
        ],
        6: [
            "url('/img/cards/seven/photo_2023-08-22_16-26-15.jpg')",
            "url('/img/cards/seven/photo_2023-08-22_16-26-20.jpg')",
            "url('/img/cards/seven/photo_2023-08-22_16-26-35.jpg')",
            "url('/img/cards/seven/photo_2023-08-22_16-26-40.jpg')"
        ],
        7: [
            "url('/img/cards/eigth/photo_2023-08-22_16-26-03.jpg')",
            "url('/img/cards/eigth/photo_2023-08-22_16-26-09.jpg')",
            "url('/img/cards/eigth/photo_2023-08-22_16-26-25.jpg')",
            "url('/img/cards/eigth/photo_2023-08-22_16-26-30.jpg')"
        ],
        8: [
            "url('/img/cards/nine/photo_2023-08-22_16-25-28.jpg')",
            "url('/img/cards/nine/photo_2023-08-22_16-25-33.jpg')",
            "url('/img/cards/nine/photo_2023-08-22_16-25-51.jpg')",
            "url('/img/cards/nine/photo_2023-08-22_16-25-57.jpg')"
        ],
        9: [
            "url('/img/cards/ten/photo_2023-08-22_16-10-52.jpg')",
            "url('/img/cards/ten/photo_2023-08-22_16-25-22.jpg')",
            "url('/img/cards/ten/photo_2023-08-22_16-25-39.jpg')",
            "url('/img/cards/ten/photo_2023-08-22_16-25-45.jpg')"
        ],
        10: [
            "url('/img/cards/jack/photo_2023-08-22_16-29-22.jpg')",
            "url('/img/cards/jack/photo_2023-08-22_16-29-26.jpg')",
            "url('/img/cards/jack/photo_2023-08-22_16-29-41.jpg')",
            "url('/img/cards/jack/photo_2023-08-22_16-29-47.jpg')"
        ],
        11: [
            "url('/img/cards/queen/photo_2023-08-22_16-29-31.jpg')",
            "url('/img/cards/queen/photo_2023-08-22_16-29-36.jpg')",
            "url('/img/cards/queen/photo_2023-08-22_16-29-51.jpg')",
            "url('/img/cards/queen/photo_2023-08-22_16-29-59.jpg')"
        ],
        12: [
            "url('/img/cards/king/photo_2023-08-22_16-30-04.jpg')",
            "url('/img/cards/king/photo_2023-08-22_16-30-10.jpg')",
            "url('/img/cards/king/photo_2023-08-22_16-30-15.jpg')",
            "url('/img/cards/king/photo_2023-08-22_16-31-04.jpg')"
        ],
        13: [
            "url('/img/cards/ace/photo_2023-08-22_16-28-49.jpg')",
            "url('/img/cards/ace/photo_2023-08-22_16-28-54.jpg')",
            "url('/img/cards/ace/photo_2023-08-22_16-29-09.jpg')",
            "url('/img/cards/ace/photo_2023-08-22_16-29-14.jpg')"
        ]
    }
}



function getRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

let generatedNumbers = {};
let generatedCount = 0;
let randomNumber;
function getRandomNumber(min, max) {
    const range = max - min + 1;

    if (generatedCount >= 52) {
        return '';
    }

    
    do {
        randomNumber = Math.floor(Math.random() * range) + min;
    } while (generatedNumbers[randomNumber] >= 4);

    if (generatedNumbers[randomNumber] === undefined || generatedNumbers[randomNumber] === 0) {
        generatedNumbers[randomNumber] = 1;
    } else {
        generatedNumbers[randomNumber]++;
    }

    generatedCount++;
    return randomNumber.toString();
}



function getRandomAndRemove(array) {
    if (array.length === 0) {
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
  
    array.splice(randomIndex, 1);
    return randomElement;
  }

  
  function assignCardImage (card) {
    const cardImagesArray = restartObjectImageCards()[card.textContent];
    if (cardImagesArray) {
        const randomImageUrl = getRandomAndRemove(cardImagesArray);
        if(randomImageUrl) {
            card.style.backgroundImage = randomImageUrl
            
        } else {
            card.style.backgroundImage = 'none'
        }
    }
}

gameCard.textContent = getRandomNumber(1,13)
assignCardImage(gameCard)
let transparentCardCount = 0
let targetCardId = null
let cardProcessed = {};

function gameMechanics () {
    buttons.forEach((card) => {
        card.textContent = getRandomNumber(1, 13);  
        if(getComputedStyle(card).pointerEvents !== 'none'){
            // targetCardId = card.id
            assignCardImage(card)
        }

        card.addEventListener('click', ( {target} ) => {
            const rowClass = card.parentElement.className
            objOldValue.oldValueGameCard.push(gameCard.textContent)
            objOldValue.oldValueBackground.push(gameCard.style.backgroundImage)
            console.log(objOldValue.oldValueBackground)
            const gameCardValue = parseInt(gameCard.textContent);
            const cardValue = parseInt(card.textContent);
            
            if (gameCardValue === cardValue + 1 || gameCardValue === cardValue - 1 || gameCardValue === cardValue + 12 || gameCardValue === cardValue - 12) {
                gameCard.textContent = card.textContent
                gameCard.style.backgroundImage = card.style.backgroundImage
                cardProcessed[gameCard] = true
                card.style.visibility = 'hidden'
                transparentCardCount++
                Object.keys(cardsIndexsCollection).forEach(key => {
                    const [firstButtonIndex, secondButtonIndex] = cardsIndexsCollection[key]
                    if (buttons[firstButtonIndex].style.visibility === 'hidden' && buttons[secondButtonIndex].style.visibility === 'hidden' && !cardProcessed[key]) {
                        buttons[key].style.pointerEvents = 'auto';
                        assignCardImage(buttons[key])
                        cardProcessed[key] = true;
                        // console.log(cardProcessed)
                    };
                    if(transparentCardCount === buttons.length) {
                        conteiner.style.display = 'none'
                        conteinerWin.style.display = 'flex'
                        buttonReturn.style.display = 'none'
                    }
                    
                })
                function addPoints (row,numberOfPoints) {
                    row.forEach(card => {
                        if(card.style.visibility === 'hidden' && target.id === card.id) {
                            objOldValue.idClickedCard.push(target.id)
                            check.textContent = checkValue + numberOfPoints
                            objOldValue.bolean.push('true')
                            objOldValue.oldValueCheck.push(numberOfPoints)
                            objOldValue.oldValueCard.push(card.textContent)
                        }
                    })
                }
                const checkValue = parseInt(check.textContent)
                switch (rowClass) {
                    case 'row1':
                        addPoints(row1Cards,20)
                        break;
                    case 'row2':
                        addPoints(row2Cards,15)
                        break;
                    case 'row3':
                        addPoints(row3Cards,10)
                        break;
                
                    default:
                        addPoints(row4Cards,5)
                        break;
                }
            };
        });
        
    });

}

gameMechanics()
            
const gameCardValue = parseInt(gameCard.textContent)
changeCard.addEventListener('click', () => {
    objOldValue.oldValueGameCard.push(gameCard.textContent)
    objOldValue.oldValueBackground.push(gameCard.style.backgroundImage)
    console.log(objOldValue.oldValueBackground)
    objOldValue.bolean.push('true')
    gameCard.textContent = getRandomNumber(1,13)
    assignCardImage(gameCard)
    numberMoves.textContent = numberMoves.textContent - 1
    if(numberMoves.textContent < 0) {
        conteiner.style.display = 'none'
        conteinerLose.style.display = 'flex'
        buttonReturn.style.display = 'none'
    }
})


buttonRestart.addEventListener('click', () => {
    numberMoves.textContent = 23;
    level.textContent = 1
    generatedNumbers = {}
    generatedCount = 0
    // restartObjectImageCards()
    cardProcessed = {};
    buttons.forEach((card) => {
      card.style.visibility = 'visible';
      card.style.pointerEvents = 'none'
    });
    Object.keys(cardsIndexsCollection).forEach(key => {
        const [firstButtonIndex, secondButtonIndex] = cardsIndexsCollection[key]
        if (buttons[firstButtonIndex].style.visibility === 'visible' || buttons[secondButtonIndex].style.visibility === 'visible') {
            buttons[key].style.pointerEvents = 'none';
            buttons[key].style.backgroundImage = "url('/img/cards/photo_2023-08-21_17-49-39.jpg')"
        };
        if(transparentCardCount === buttons.length) {
            conteiner.style.display = 'none'
            conteinerWin.style.display = 'flex'
        }
        
    })
    activateButtonRow4()
    buttonReturn.style.display = 'block'
    conteiner.style.display = 'flex';
    conteinerLose.style.display = 'none';
    check.textContent = 0
    transparentCardCount = 0
    quantityClickedReturn = 0
    objOldValue = {
        oldNumbersMoves: [],
        oldValueGameCard: [],
        oldValueCheck: [],
        oldValueCard: [],
        nameParentClickedButton: [],
        bolean: [],
        idClickedCard: [],
        oldValueBackground: [],
        numberArray: []
    }
    
    quantityReturn.textContent = 5
    gameCard.textContent = getRandomNumber(1, 13);
    assignCardImage(gameCard)
    gameMechanics();
    console.log(objOldValue.oldValueBackground)
    
})

buttonNextLevel.addEventListener('click', () => {
    gameCard.textContent = getRandomNumber(1, 13);
    generatedNumbers = {}
    generatedCount = 0
    numberMoves.textContent = 23;
    buttonReturn.style.display = 'block'
    const levelValue = parseInt(level.textContent)
    level.textContent = levelValue + 1

    buttons.forEach((card) => {
        card.style.visibility = 'visible';
        card.style.pointerEvents = 'none'
      });
      Object.keys(cardsIndexsCollection).forEach(key => {
        const [firstButtonIndex, secondButtonIndex] = cardsIndexsCollection[key]
        if (buttons[firstButtonIndex].style.visibility === 'visible' || buttons[secondButtonIndex].style.visibility === 'visible') {
            buttons[key].style.pointerEvents = 'none';
            buttons[key].style.backgroundImage = "url('/img/cards/photo_2023-08-21_17-49-39.jpg')"
        };
        if(transparentCardCount === buttons.length) {
            conteiner.style.display = 'none'
            conteinerWin.style.display = 'flex'
        }
        
    })
    activateButtonRow4()

      conteiner.style.display = 'flex';
      conteinerWin.style.display = 'none';
      transparentCardCount = 0
      quantityClickedReturn = 0
      objOldValue = {
          oldNumbersMoves: [],
          oldValueGameCard: [],
          oldValueCheck: [],
          oldValueCard: [],
          nameParentClickedButton: [],
          bolean: [],
          idClickedCard: []
      }
      quantityReturn.textContent = 5
      console.log(objOldValue)
      gameMechanics();
      restartObjectImageCards()
      assignCardImage(gameCard)
      cardProcessed = {};
})

function onButton () {
    if (objOldValue.nameParentClickedButton.length === 0 || quantityClickedReturn === 5) {
        buttonReturn.style.pointerEvents = 'none'
    } else if(objOldValue.nameParentClickedButton.length > 0) {
        buttonReturn.style.pointerEvents = 'auto'
    }
}


function forEachCard() {
    let idLastCard = objOldValue.idClickedCard.pop()
        let clearParentClicked = objOldValue.nameParentClickedButton.pop()
        transparentCardCount = transparentCardCount - 1
        buttons.forEach((card) => {
            if(card.id === idLastCard) {
                card.id = card.style.visibility = 'visible'
                gameCard.textContent = objOldValue.oldValueGameCard.pop()
                gameCard.style.backgroundImage = objOldValue.oldValueBackground.pop();
                check.textContent = check.textContent - objOldValue.oldValueCheck.pop()
            }
        }) 
}


buttonReturn.addEventListener('click', () => {
    // !!!!!!!!!!!При нажатии возврата мне нужно удалять использованые карты из generatedNumbers !!!!!!
    generatedNumbers[randomNumber]--
    generatedCount--
    const quantityReturnValue = parseInt(quantityReturn.textContent)
    quantityReturn.textContent = quantityReturnValue - 1
    quantityClickedReturn = quantityClickedReturn + 1
    if(objOldValue.nameParentClickedButton[objOldValue.nameParentClickedButton.length - 1] === 'conteiner_game_card') {
        let clearParentClicked = objOldValue.nameParentClickedButton.pop()
        // console.log(objOldValue.oldValueBackground)
        if (objOldValue.oldValueGameCard[objOldValue.oldValueGameCard.length - 1] !== 0) {
            gameCard.textContent = objOldValue.oldValueGameCard.pop()
            gameCard.style.backgroundImage = objOldValue.oldValueBackground.pop();
            let returnNumberMoves = parseInt(numberMoves.textContent)
            numberMoves.textContent = returnNumberMoves + 1
            
            
        }    
    } else if (objOldValue.nameParentClickedButton[objOldValue.nameParentClickedButton.length - 1] === 'row4') {
        forEachCard()
    } else if (objOldValue.nameParentClickedButton[objOldValue.nameParentClickedButton.length - 1] === 'row3') {
        forEachCard()  
    }
    else if (objOldValue.nameParentClickedButton[objOldValue.nameParentClickedButton.length - 1] === 'row2') {
        forEachCard()
    }
    else if (objOldValue.nameParentClickedButton[objOldValue.nameParentClickedButton.length - 1] === 'row1') {
        forEachCard()
    }
    Object.keys(cardsIndexsCollection).forEach(key => {
        const [firstButtonIndex, secondButtonIndex] = cardsIndexsCollection[key]
        if (buttons[firstButtonIndex].style.visibility === 'visible' || buttons[secondButtonIndex].style.visibility === 'visible') {
            buttons[key].style.pointerEvents = 'none';
            buttons[key].style.backgroundImage = "url('/img/cards/photo_2023-08-21_17-49-39.jpg')"
        };
        if(transparentCardCount === buttons.length) {
            conteiner.style.display = 'none'
            conteinerWin.style.display = 'flex'
        }
        
    })
    console.log(objOldValue.oldValueBackground)
    // console.log(quantityClickedReturn)
    
})

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const parentClassName = button.parentElement.className;
        if (parentClassName !== '' && objOldValue.bolean[length] === 'true') {
            let boleanStock = objOldValue.bolean.pop()
            objOldValue.nameParentClickedButton.push(parentClassName);
        }
        onButton()
    })
})
onButton()

function activateButtonRow4 () {
    row4Cards.forEach((card) => {
    card.style.pointerEvents = 'auto'
})
}




