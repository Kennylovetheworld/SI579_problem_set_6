const btn1 = document.getElementById("Btn1");
const btn2 = document.getElementById("Btn2");
const text1 = document.getElementById("Text1");
const reply = document.getElementById("Reply");
const input = document.querySelector('input');

btn1.addEventListener("click", event1);
input.addEventListener('input', event2);
btn2.addEventListener("mouseover", event3);

var r = document.querySelector(':root');

function event1() {
    text1.innerHTML = "I mean forever!";
}

function event2(e) {
    if(e.target.value == "JYT"){
        reply.textContent = "Alert! Wife Comming! Girls Out!";
    }
    else{
        reply.textContent = "nice to meet you " + e.target.value;
    }
}

function event3() {
    r.style.setProperty('--main-bg-color', 'green');
}

function blueTheBackground() {
    // r.style.setProperty('--main-bg-color', 'lightblue');
    r.style.setProperty('--main-bg-color', 'black');
}

function deleteOneElement() {
    var useless = document.getElementById("useless");
    useless.remove();
}

blueTheBackground();
deleteOneElement();

// 


// 

import _ from 'lodash';

const random = document.getElementById("random");

function lodash_fun() {
    let r = _.random(0, 100);
    random.innerHTML = r
    console.log(r);
}

var myVarRandom = setInterval(lodash_fun, 200);

// 

// 

var myVarTime = setInterval(Timer, 1000);
var moment = require('moment');
const date = document.getElementById("date");

function Timer() {
    var time = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById("date").innerHTML = time;
    console.log(time)
}
