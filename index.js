// console.log("Hello world!")

let backpack = []

// backpack.push("Sword")
// backpack.push("Shield")
// backpack.push("Food")

backpack.push("Sword", "Shield", "Food")

// let sword = backpack.shift()

let sword = backpack.splice(0, 1)

let furCoat = "Fur coat"

backpack.push(furCoat)

backpack.pop()


backpack.push("Flint", "Blanket", "Knife", "Toothbrush", "Something")

let itemCount = backpack.length

let backpack2 = backpack.splice(2, 3)

// console.log(backpack, backpack2) 

// for(let i in backpack){
//     console.log(backpack[i])
// }

// for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }


if(backpack.length >= 3){
    for(let i = 0; i < 3; i++){
        console.log(backpack[i])
    }
}else{
    for(let i = 0; i < backpack.length; i++){
        console.log(backpack[i])
    }
}

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log("---------------", guessMe)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log("guessMe is divisible by 4 or 5 ; Added 25")
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log("guessMe is divisible by 3 ; Subrtracted 27")
        guessMe -= 27
    } else {
        console.log("Added 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}
console.log(guessMe)
