// Assignment (Mathmatical Shapes)

// // a- Diagonal of square

// function diagonalFunction(l, w){
//     return ( Math.sqrt((l**2) + (w**2)) )
// }

// console.log(diagonalFunction(9, 9))

// // b- Area of Triangle

// function areaOfTriangle(a, b, c){
//     let sides = (a + b + c)/2;
//     return (Math.sqrt(sides*((sides - a) * (sides - b) * (sides - c))))
// }

// console.log(areaOfTriangle(5, 6, 7))

// // c- Finding cicumfrence and the surface area of a circle

// function circumface(r) {
//     const pi = 3.141593;
//     let circumference = (r * 2) * pi;
//     let surfaceArea = (r**2) * pi;
//     return (`The Circumference is: ${circumference}, The Surface Area is: ${surfaceArea}`)
// }

// console.log(circumface(4))

// Assignment (Conditional statements & Loops)

// a- Which Integer is bigger
// function biggerInt(a, b){
//     if ( a > b){
//         return a
//     } else {
//         return b
//     }
// }

// console.log(biggerInt(19, 11))

// // b- Int is odd or even

// function oddEven(i){
//     let result = i % 2;

//     if( result === 0 ){
//         return(`The number ${i} is an Even number`)
//     } else{
//         return(`The number ${i} is an Odd number`)
//     }
// }

// console.log(oddEven(0))

// Main Assignment

function computerPlay(){
    let randomNumber = Math.ceil(Math.random() * 3)
    switch(randomNumber) {
        case 1:
            return("rock");
        case 2:
            return ("paper");
        case 3:
            return ("scissor");
    }
}

let result = "";

function playRound(playerSelection, computerSelection){
    if( playerSelection == computerSelection ){
        result = "It's a draw";
    } else if ( playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissor"){
        result = "You win";
    } else {
        result = "You lose";
    }
    return (`Your Selection: ${playerSelection}, Computers Selection: ${computerSelection}, Result: ${result}`)
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let draw = 0;
    alert("Let's play Rock, Paper & Scissor")
    for (let r = 0; r < 5 ; r++) {
        let count = r + 1;
        let computerSelection = computerPlay()
        let playerSelection = prompt("Choose Rock, Paper or Scissor: ")

        if(playerSelection === null){
            alert("You exited the game")
            break;
        }else{
            playerSelection = playerSelection.toLowerCase()
        }

        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor"){
            r = r - 1
            alert("You choice should be between Rock Paper & Scissor")
        }
        
        playRound(playerSelection, computerSelection)
        
        if (result == "You win"){
            userScore += 1;
            console.log (
                `${playRound(playerSelection, computerSelection)},\nYour Score: ${userScore},\nComputer Score: ${computerScore},\nDraw: ${draw},\nRound: ${count}`
            );
        } else if (result == "You lose"){
            computerScore += 1;
            console.log (
                `${playRound(playerSelection, computerSelection)},\nYour Score: ${userScore},\nComputer Score: ${computerScore},\nDraw: ${draw},\nRound: ${count}`
            );
        } else{
            draw += 1;
            console.log(
                `${playRound(playerSelection, computerSelection)},\nYour Score: ${userScore},\nComputer Score: ${computerScore},\nDraw: ${draw},\nRound: ${count}`
            );
        }
    }
}

game()

