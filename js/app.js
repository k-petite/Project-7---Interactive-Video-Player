var vid = document.getElementById("myVideo");
console.log(vid.currentTime);

function setCurTime1() {
    vid.currentTime=0.240;
}
function setCurTime2() {
    vid.currentTime=4.130;
}
function setCurTime3() {
    vid.currentTime=8;
}
function setCurTime4() {
    vid.currentTime=11.270;
}
function setCurTime5() {
    vid.currentTime=13.960;
}
function setCurTime6() {
    vid.currentTime=17.940;
}
function setCurTime7() {
    vid.currentTime=22.370;
}
function setCurTime8() {
    vid.currentTime=26.880;
}
function setCurTime9() {
    vid.currentTime=32.100;
}
function setCurTime10() {
    vid.currentTime=34.730;
}
function setCurTime11() {
    vid.currentTime=39.430;
}
function setCurTime12() {
    vid.currentTime=42.350;
}
function setCurTime13() {
    vid.currentTime=46.310;
}
function setCurTime14() {
    vid.currentTime=49.270;
}
function setCurTime15() {
    vid.currentTime=53.760;
}
function setCurTime16() {
    vid.currentTime=57.650;
}

// Get the video element with id="myVideo"

// Attach a timeupdate event to the video element, and execute a function if the current playback position has changed
vid.addEventListener("timeupdate", myFunction);

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
}
