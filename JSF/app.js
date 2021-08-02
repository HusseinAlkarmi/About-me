'use strict'

let name = prompt("Whats your name?").toLowerCase()
alert("Welcome to my website " + name)

let age = Number(prompt("What is my age?"))

if(age == 22){
    alert("right im " + age )
}
else {
    alert("wrong enter the age again" )
    age = Number(prompt("What is my age? , choose between 22, 23, 24"))
    
}
console.log("the answer is 22")

let smoke = prompt("do i smoke?").toLowerCase()

if(smoke == "no"){
    alert("right its " + smoke )
}
else {   
    alert("wrong enter the answer again" )
    smoke = prompt("do i smoke?").toLowerCase()
}
console.log("the answer is no")

let movie = prompt("do i like watch movies?").toLowerCase()
if(movie == "yes"){
    alert("right its " + movie )
}
else {   
    alert("wrong enter the answer again" )
    movie = prompt("do i like watch movies?").toLowerCase()
}
console.log("the answer is yes")

let programing = prompt("do i like programing?").toLowerCase()
if(programing == "yes"){
    alert("right its " + programing )
}
else {
    alert("wrong enter the answer again" )
    programing = prompt("do i like programing?").toLowerCase()
}
console.log("the answer is yes")

let food= prompt("do i like food?").toLowerCase()
if(food == "yes"){
    alert("right its " + food )
}
else {
    alert("wrong enter the answer again" )
    food= prompt("do i like food?").toLowerCase()
}
console.log("the answer is yes")

alert("Thank you " + name)