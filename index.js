// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    console.log(cats)
} 
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    console.log(cats)
}
function destructivelyRemoveLastCat() {
    cats.pop(2)
    console.log(cats)
}
function destructivelyRemoveFirstCat() {
    cats.shift(0)
    console.log(cats)
}
function appendCat(Broom) {
    let newArray=cats.slice()
    newArray.push(Broom)
    console.log(newArray)
    console.log(cats)
    return newArray
 }
function prependCat(Arnold) {
    let catsArray=cats.slice()
    catsArray.unshift(Arnold)
    console.log(catsArray)
    console.log(cats)
    return catsArray
 }
function removeLastCat(Garfield) {
    let removelastcat = cats.slice()
    removelastcat.pop(Garfield)
    console.log(removelastcat)
    console.log(cats)
    return removelastcat
}
function removeFirstCat(Milo) {
    let removefirstcat = cats.slice()
    removefirstcat.shift(Milo)
    console.log(removefirstcat)
    console.log(cats)
    return removefirstcat
}

 
