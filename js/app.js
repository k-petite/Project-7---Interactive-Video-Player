var vid = document.getElementById("video-player");
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

function textBlack(){
  var list = document.getElementsByClassName("textWrapper")[0];
    for(i=0; i<16; i+=1){
    list.getElementsByTagName('button')[i].style.color='black';
    list.getElementsByTagName('button')[i].style.background='none';
    }
}

function textHighlight(number, color){
  var list = document.getElementsByClassName("textWrapper")[0];
    list.getElementsByTagName('button')[number].style.background=color;
}

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    var list = document.getElementsByClassName("textWrapper")[0];

    let time = vid.currentTime;

    if (time>0 & time<3.8) {
      textHighlight('0', 'rgb(176, 246, 234)');
    }

    if (time>3.8 & time<8){
      textBlack();
      textHighlight('1', 'rgb(176, 246, 214)');
    }

    if (time>8 & time<11){
      textBlack();
      textHighlight('2', 'rgb(176, 246, 194)');
    }

    if (time>11 & time<13){
      textBlack();
      textHighlight('3', 'rgb(176, 246, 174)');
    }

    if (time>13 & time<17){
      textBlack();
      textHighlight('4', 'rgb(176, 246, 154)');
    }

    if (time>17 & time<22.370){
      textBlack();
      textHighlight('5', 'rgb(176, 246, 134)');
    }

    if (time>22.370 & time<26.880){
      textBlack();
      textHighlight('6', 'rgb(176, 246, 114)');
    }

    if (time>26.880 & time<32.100){
      textBlack();
      textHighlight('7', 'rgb(176, 246, 94)');
    }

    if (time>32.100 & time<34.730){
      textBlack();
      textHighlight('8', 'rgb(176, 246, 74)');
    }

    if (time>34.730 & time<39.430){
      textBlack();
      textHighlight('9', 'rgb(176, 246, 54)');
    }

    if (time>39.430 & time<42.350){
      textBlack();
      textHighlight('10', 'rgb(176, 246, 34)');
    }

    if (time>42.350 & time<46.310){
      textBlack();
      textHighlight('11', 'rgb(176, 246, 14)');
    }

    if (time>46.310 & time<49.270){
      textBlack();
      textHighlight('12', 'rgb(176, 226, 0)');
    }

    if (time>49.270 & time<53.760){
      textBlack();
      textHighlight('13', 'rgb(176, 206, 0)');
    }

    if (time>53.760 & time<57.650){
      textBlack();
      textHighlight('14', 'rgb(176, 186, 0)');
    }

    if (time>57.650){
      textBlack();
      textHighlight('15', 'rgb(176, 166, 0)');
    }
}

var controls = document.getElementsByClassName("mejs__controls");

controls[0].style.background='rgba(121, 212, 191, 0.2)';

  // background-color: rgba(121, 212, 191, 0.38);
