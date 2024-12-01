const vid1h = document.getElementById("vid1h");
const vid1 = document.getElementById("vid1");
const vid1hh = document.getElementById("vid1hh");
const vid1back = document.getElementById("vid1back");


const vid2h = document.getElementById("vid2h");
const vid2hh = document.getElementById("vid2hh");
const vid2back = document.getElementById("vid2back");


const vid3h = document.getElementById("vid3h");
const vid3hh = document.getElementById("vid3hh");
const vid3back = document.getElementById("vid3back");


vid1h.addEventListener("click", function () {
    vid1hh.classList.add("db");
    vid1hh.classList.remove("dn");
    vid1.classList.add("dn");
   
});
vid1back.addEventListener("click", function () {
    vid1hh.classList.remove("db");
    vid1hh.classList.add("dn");
    vid1.classList.remove("dn");
   
});
vid2h.addEventListener("click", function () {
    vid2hh.classList.add("db");
    vid2hh.classList.remove("dn");
    vid1.classList.add("dn");
   
});
vid2back.addEventListener("click", function () {
    vid2hh.classList.remove("db");
    vid2hh.classList.add("dn");
    vid1.classList.remove("dn");
   
});


vid3h.addEventListener("click", function () {
    vid3hh.classList.add("db");
    vid3hh.classList.remove("dn");
    vid1.classList.add("dn");
   
});
vid3back.addEventListener("click", function () {
    vid3hh.classList.remove("db");
    vid3hh.classList.add("dn");
    vid1.classList.remove("dn");
   
});
