let door=["lose","lose","lose"]
let count=0
start()

function start(){
door[Math.floor(Math.random()*3)]="win"
document.getElementById("door1").onclick=stepone(0)
document.getElementById("door2").onclick=stepone(1)
document.getElementById("door3").onclick=stepone(2)
return
}

function stepone(cool){
if (door[cool]=="lose"){
if (door[(cool+1)%3]=="win"){
document.getElementById("undertext").innerHTML="Door"+(cool+1)%3+" has a goat"}
else {
document.getElementById("undertext").innerHTML="Door"+(cool+2)%3+" has a goat"
}
}
else {
let rfkf=Math.floor(Math.random()+1)
document.getElementById("undertext").innerHTML="Door"+(cool+rfkf)%3+" has a goat"
}
document.getElementById("door1").onclick=steptwo(cool,0)
document.getElementById("door2").onclick=steptwo(cool,1)
document.getElementById("door3").onclick=steptwo(cool,2)
document.getElementById("door"+cool).onclick=function(){}
return
}

function steptwo(cool,really){
if (cool==really){
document.getElementById("undertext").innerHTML="You switched and you "+door[really]
}
else {
document.getElementById("undertext").innerHTML="You stayed and you "+door[really]}
count++
document.getElementById("score").innerHTML="Score :"+count
return
}
