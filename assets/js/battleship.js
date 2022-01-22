
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
    shipLength: 3, shipsSunk: 0,
    ships =[{
        location: ['10', '20', '30'],
        hits: ['', '', '']
    },
    {
        location: ['32', '33', '33'],
        hits: ['', '', '']
    },
    {
        location: ['63', '64', '65'],
        hits: ['', '', '']
    }],
    fire: function (guess) {
        for (let i = 0; i<this.numShips; i++)
    }
}
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