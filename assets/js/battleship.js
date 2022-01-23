
let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById('message-area');
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    }, 
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss")
    }
}
// coordination  of ships
let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
        locations: [0, 0, 0],
        hits: ['', '', '']
    },
    {
        locations: [0, 0, 0],
        hits: ['', '', '']
    },
    {
        locations: [0, 0, 0],
        hits: ['', '', '']
    }],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("Потопил корабль!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Промахнулся!");
        return false;
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }, 
    generateShipLocations: function () {
        let locations; for (let i = 0; i < this.numShips; i++){
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    }, 
    generateShip: function () {
        let direction = Math.floor(Math.random() * 2);
        let row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + '' + (col + i));
            } else {
                newShipLocations.push((row + i) + '' + col);
            }
        }
        return newShipLocations;
    },
    collision: function(locations) {
            for (let i = 0; i < this.numShips; i++) {
                let ship = model.ships[i];
                for (let j = 0; j < locations.length; j++){
                    if (ship.locations.indexOf(locations[j]) >= 0) {
                        return true;
                    }
                }
            }
            return false;
        }
}
function init() {
    let fireButton = document.getElementById('fire-button');
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById('guess-input');
    guessInput.onkeydown = handleKeyPress;
    model.generateShipLocations();
}
let controller = {
    guesses: 0,
    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('Вы потапили все корабли за ' + this.guesses + 'попыток');
            }
        }
    }
}
function parseGuess(guess) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        if (guess === null || guess.length !== 2) {
            alert('введено не верное значение!');
        } else { 
            firstChar = guess.charAt(0);
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);
            if (isNaN(row) || isNaN(column)) {
                alert('что-то не так!');
            } else if (row<0 || row >= model.boardSize || column<0 || column>= model.boardSize) {
                alert('что-то не так!');
            } else { 
                return row + column;
            }
    }
    return null;
}
    
function handleFireButton() {
    let guessInput = document.getElementById('guess-input');
    let guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = '';
}

function handleKeyPress(e) {
    let fireButton = document.getElementById('fire-button');
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}
window.onload = init;
// let randomLoc = Math.floor(Math.random() * 5),
//     location1 = randomLoc,
//     location2 = location1 + 1,
//     location3 = location2 + 1,
//     guess,
//     hits = 0,
//     guesses = 0,
//     isSunk = false;
    
// while (isSunk == false) {
//     guess = prompt("Введите координаты выстрела (от 0 до 6)");
//     if (guess < 0 || guess > 6) {
//         alert("Введите корректное значение!"); 
//     } else {
//         guesses++;
//         if (location1 == guess || guess == location2 || guess == location3) {
//             alert("Попали!");
//             hits++;
//             if (hits == 3) {
//                 isSunk = true;
//                 alert("Вы выйграли!");
//             } 
//         } else {
//                 alert("Вы промахнулись!");
//         }
//     }
// }
// let stats = "Вам понадобилось " + guesses + " ходов";
// alert(stats);