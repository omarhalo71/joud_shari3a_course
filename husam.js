const vid1h = document.getElementById("vid1h");
const vid1 = document.getElementById("vid1");
const vid1hh = document.getElementById("vid1hh");
const vid1back = document.getElementById("vid1back");


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