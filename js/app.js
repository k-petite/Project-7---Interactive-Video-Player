var vid = document.getElementById("myVideo");
console.log(vid.currentTime);

// function getCurTime() {
//     if (vid.currentTime > 4.130 & vid.currentTime < 8){
//       console.log('hihihihihi');
//     }
// }


// Get the video element with id="myVideo"

// // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
// vid.ontimeupdate = function() {myFunction()};
//
// // function myFunction() {
// //     // Display the current position of the video in a p element with id="demo"
// //     let time = vid1.currentTime;
// //     console.log(time);
// //     if (time > 4.130)
// //     {console.log(vid1.currentTime);}
// // }
//
// function myFunction() {
//     // Display the current position of the video in a p element with id="demo"
//     document.getElementById("demo").innerHTML = vid.currentTime;
// }

// Get the video element with id="myVideo"
var vid = document.getElementById("myVideo");

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
}


// for (i=0, i<16, i+=1){
// $("button:nth-of-type(i)").print(i);
// }

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
