//start  game
document.onload = function () {
    let board = document.getElementById("board");
    console.log(board);
    // function myGame() {
    //     board.insertAdjacentHTML("beforeend", "<div id="chooseGame" class="gameParametr">
    //     <button class="start">Start</button>
    //   </div>")
    // }
    // myGame()
}
//ship location
//start battle
//game circle
//game over

let randomLoc = Math.floor(Math.random() * 5),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;
    
while (isSunk == false) {
    guess = prompt("Введите координаты выстрела (от 0 до 6)");
    if (guess < 0 || guess > 6) {
        alert("Введите корректное значение!"); 
    } else {
        guesses++;
        if (location1 == guess || guess == location2 || guess == location3) {
            alert("Попали!");
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert("Вы выйграли!");
            } 
        } else {
                alert("Вы промахнулись!");
        }
    }
}
let stats = "Вам понадобилось " + guesses + " ходов";
alert(stats);
    