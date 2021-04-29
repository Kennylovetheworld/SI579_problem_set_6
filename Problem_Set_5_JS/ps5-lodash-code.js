import _ from 'lodash';

const random = document.getElementById("random");

function lodash_fun() {
    let r = _.random(0, 100);
    random.innerHTML = r
    console.log(r);
}

setInterval("lodash_fun()", 200);