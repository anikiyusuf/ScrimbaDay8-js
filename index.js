// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]// 0 indexed


console.log(featuredPosts[0]);
console.log(featuredPosts.lenght)



let name = "John";
let age = "20";
let isMarried = "false";
let pizza = true;

let per =['Yusuf',20,true]


let arr=[7,4]
arr.push(6)
console.log(arr);



let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.pop("All good. Been working on my portfolio lately.")


messages.push(newMessage)
console.log(messages)



for ( let count = 0;  count < 11;  count += 1 )  {
    
    console.log(count)
}


let messages1 = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages1.length; i += 1) {
    console.log(messages1[i])
}






let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
}


let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

    for (let i = 0; i < sentence.length; i += 1) {
        greetingEl.textContent =sentence[i]
    }
    

//return  value inn function 
    let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return  player1Time
    } else if (player2Time < player1Time) {
        return  player2Time
    } else {
        return  player1Time
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)




function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)



//Random 
let randomNumber = Math.random()

console.log(randomNumber)

function getRandomNumber() {
   return     Math.floor (Math.random()*10);
}

console.log(getRandomNumber())

function getRandomNumber() {
    return    Math.random();
 }
 
 console.log(getRandomNumber())


 let random = Math.floor(Math.random()*10)
 console.log(random)


 let randomNumber1 = Math.random() * 6

console.log(randomNumber1)




let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)


let randomNumber2 = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber2)



function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}


console.log( rollDice() )



let rollDice1 = Math.random() + 1

console.log(rollDice1)


function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer3 = Math.floor( Math.random()*13 ) + 1
    if (randomNumer3 > 10) {
        return 10
    } else if (randomNumer3 === 1) {
        return 11
    } else {
        return randomNumer3
    }
}

console.log(getRandomCard())


// return logical operator AND &&

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}



// The OR operator ||

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}



// object
let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)





