'use strict'

let count = 0;

function Q1(){
let name = prompt("Whats your name?").toLowerCase()
alert("Welcome to my website " + name)
}


function Q2(){
    let smoke = prompt("do i smoke?").toLowerCase()

    if(smoke == "no"){
    alert("right its " + smoke )
       count++;
    }
    else {   
    alert("wrong enter the answer again" )
    smoke = prompt("do i smoke?").toLowerCase()
    }
}
//console.log("the answer is no")




function Q3(){
    let movie = prompt("do i like watch movies?").toLowerCase()
    if(movie == "yes"){
    alert("right its " + movie )
       count++;

    }
    else {   
    alert("wrong enter the answer again" )
    movie = prompt("do i like watch movies?").toLowerCase()
    }
}
//console.log("the answer is yes")



function Q4(){
    let programing = prompt("do i like programing?").toLowerCase()
    if(programing == "yes"){
    alert("right its " + programing )
       count++;
    }
    else {
    alert("wrong enter the answer again" )
    programing = prompt("do i like programing?").toLowerCase()
    }
}
//console.log("the answer is yes")
function Q5(){
let food= prompt("do i like food?").toLowerCase()
if(food == "yes"){
    alert("right its " + food )  
          count++;
}
else {
    alert("wrong enter the answer again" )
    food= prompt("do i like food?").toLowerCase()
}
}
//console.log("the answer is yes")

function Q6(){
let pet = prompt("do i have a pet?").toLowerCase()
if(pet== "yes"){
    alert("right its " + pet )  
          count++;
}
else {
    alert("wrong enter the answer again" )
    pet= prompt("do i have a pet?").toLowerCase()
}
}

function Q7(){
let age = Number(prompt("What is my age?"))

if(age == 22){
    count++;
    alert("right im " + age )
}

else {
    for(let i = 0; i < 3; i++){

        if(age > 22)
    alert("age is too high" )

    if(age < 22)
    alert("age is too low" )

    age = Number(prompt("What is my age? , choose between 21, 22, 24"))

    if(age == 22){
    count++;
    alert("right im " + age )
    break;}
    }
    if(age != 22)
    alert("the right answer for my age is 22" ) 
}

//console.log("the answer is 22")

}


//console.log("the answer is 22")

function Q8(){

let favCar = prompt("guess my favorite car u can choose one of (mazda, ford, golf, doodge, chevrolet, kia)").toLowerCase()

let arrayCar = ['kia', 'ford', 'doodge', 'mercedes', 'rangerover', 'toyota'];

let boolean = false;

for(let j = 0; j < 5; j++){

for(let i = 0; i < arrayCar.length; i++){

 if(favCar == arrayCar[i]){
    alert("thats a right answer" ) 
    boolean = true;
    break;
 }
}

if(boolean == false){
    alert("thats not right try again" ) 
    favCar = prompt("guess my favorite car again and choose one of (kia, ford, doodge, mercedes, Audi, toyota)").toLowerCase()
   
}
if(boolean == true){
    count++;
    break;
}

}
if(boolean == false){
    alert("the right answer is ford, kia and doodge" )

}
}

Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();
Q8();

alert("Thank you " + name + " your right answers are " + count + " out of 7")

