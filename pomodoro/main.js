var startingindex;
var pm = document.getElementById('p_min');
var ps = document.getElementById('p_sec');
var sbm = document.getElementById('sb_min');
var sbs = document.getElementById('sb_sec');
var lbm = document.getElementById('lb_min');
var lbs = document.getElementById('lb_sec');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var cy = document.getElementById('cycle')
var iter;

start.addEventListener('click', function() {
    if (startingindex === undefined) {
        startingindex = setInterval(timer, 1000)
        start.innerText = "Stop";
    } else {
        stopInterval()
        startingindex = undefined;
        start.innerText = "Start";

    }
})


reset.addEventListener('click', function() {
    startingindex = undefined;
    stopInterval()

    pm.innerText = 25;
    ps.innerText = "00";
    lbm.innerText = 15;
    lbs.innerText = "00";
    sbm.innerText = 5;
    sbs.innerText = "00";

})


function timer() { //starting

    if (pm.innerText != 0 && ps.innerText == 0) {
        pm.innerText -= 1;
        ps.innerText = 59;
    } else if (ps.innerText != 0) {
        ps.innerText--;
    }

    //short break
    if (ps.innerText == 0 && pm.innerText == 0 && iter < 3) {
        iter++;
        if (sbs.innerText != 0) {
            sbs.innerText--;
        } else if (sbm.innerText != 0 && sbs.innerText == 0) {
            sbs.innerText = 59;
            sbm.innerText--;
        }
    }

    //long break
    else if (ps.innerText == 0 && pm.innerText == 0 && iter >= 3) {
        iter = 0;
        if (lbs.innerText != 0) {
            lbs.innerText--;
        } else if (lbm.innerText != 0 && lbs.innerText == 0) {
            lbs.innerText = 59;
            lbm.innerText--;
        }
    }
    //cycle
    if (pm.innerText == 0 && ps.innerText == 0 && (sbm.innerText == 0 && sbs.innerText == 0 || lbm.innerText == 0 && lbs.innerText == 0)) {
        pm.innerText = 25;
        ps.innerText = "00";
        lbm.innerText = 15;
        lbs.innerText = "00";
        sbm.innerText = 5;
        sbs.innerText = "00";

        cy.innerText++;
    }
}
//stop
function stopInterval() {
    clearInterval(startingindex);
}
