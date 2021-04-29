import * as moment from 'moment';

const date = document.getElementById("date");

function Timer() {
    var time = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById("date").innerHTML = time;
    console.log(time)
}

setInterval("Timer()", 1000);