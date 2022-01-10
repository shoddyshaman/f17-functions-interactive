let jonSnowHealth = 100;
//converting to a string
jonSnowHealth = 100 + "";
// jonSnowHealth = toString(jonSnowHealth)
// let updatedHealth = String(jonSnowHealth)

// console.log(Boolean(jonSnowHealth))
// console.log(typeof jonSnowHealth,jonSnowHealth)

//converting to a number
jonSnowHealth = +jonSnowHealth;
// console.log(typeof jonSnowHealth,jonSnowHealth)

let theWinnerIs = "Jamie is the winner.";

let theRealWinner = theWinnerIs.replace("Jamie", "Jon");

// if(theRealWinner.toLowerCase().includes("jon")){
//     console.log('replaced successfully')
// } else {
//     console.log('oops! something is wrong')
// }
// 'Jon is the winner.'
// Jon-is-the-winner

//in-line-chaining
let newWinnerSplit = theRealWinner.split(" ").join("-").toLowerCase();
// let newWinnerKabob = newWinnerSplit.join('-')
// console.log(newWinnerSplit)

//functions
//function-declaration
function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log("Jon is alive!");
  } else {
    console.log("RIP my friend");
  }
}

// isJonAlive();

//function with a param
function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

surpriseAttack(20)
surpriseAttack(20)
surpriseAttack(40)
surpriseAttack(26)


console.log(jonSnowHealth)

function greeting(person1,person2){
    //template literal
    console.log(`${person1} and ${person2} would like to say hello to each other`)
    //string-concatenation
    // console.log(person1 + ' and ' + person2 + ' would like to say hello')
}

greeting('Jon Snow','Ned Stark')

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
    //possibleRolls[2]
}


// console.log(firstRoll)
// console.log(secRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secRoll = rollDice()
    
    return firstRoll * secRoll
}

let multiplied = diceMultiplier()
console.log(multiplied)