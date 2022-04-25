var todobox = document.getElementById('todobox');
var doo = document.getElementById('do');
var doin = document.getElementById('doin');
let addb = document.getElementById('add');
let addbbb = document.getElementById('add2');

let addbb = document.getElementById('add3');
var done = document.getElementById('done');


addb.addEventListener('click', function() {
    var m = document.createElement('p');
    m.classList.add('m-styling');
    m.innerText = doo.value;
    todobox.appendChild(m);

    doo.value = "";
    m.addEventListener('click', function() {
        m.style.textDecoration = "line-through";
    })
    m.addEventListener('dblclick', function() {
        todobox.removeChild(m);
    })
})
addbb.addEventListener('click', function() {
    var m = document.createElement('p');
    m.classList.add('m-styling');
    m.innerText = done.value;
    donebox.appendChild(m);
    done.value = "";
    m.addEventListener('click', function() {
        m.style.textDecoration = "line-through";
    })
    m.addEventListener('dblclick', function() {
        donebox.removeChild(m);
    })
})
addbbb.addEventListener('click', function() {
    var m = document.createElement('p');
    m.classList.add('m-styling');
    m.innerText = doin.value;
    doingbox.appendChild(m);
    doin.value = "";
    m.addEventListener('click', function() {
        m.style.textDecoration = "line-through";
    })
    m.addEventListener('dblclick', function() {
        doingbox.removeChild(m);
    })
})