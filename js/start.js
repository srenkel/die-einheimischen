function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 200;
    var w = $(window).width() - 300;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    var newq = makeNewPosition();
    var oldq = $('.alien').offset();
    var speed = calcSpeedFast([oldq.top, oldq.left], newq);

    $('.alien').animate({top: newq[0], left: newq[1]}, speed, function () {
        animateDiv();
    });

}

function animateDiv2() {
    var newq = makeNewPosition();
    var oldq = $('.alien2').offset();
    var speed = calcSpeedMiddle([oldq.top, oldq.left], newq);

    $('.alien2').animate({top: newq[0], left: newq[1]}, speed, function () {
        animateDiv2();
    });

}

function animateDiv3() {
    var newq = makeNewPosition();
    var oldq = $('.alien3').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.alien3').animate({top: newq[0], left: newq[1]}, speed, function () {
        animateDiv3();
    });

}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

function calcSpeedFast(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

function calcSpeedMiddle(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.25;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

$(document).ready(function () {
    animateDiv();
    animateDiv2();
    animateDiv3();

});