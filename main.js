'use strict';

var b = 1;
var blb = false;

function Load(){
    StartSlide();
    if(window.matchMedia("(max-device-width:480px) and (orientation: portrait)").matches){
        document.location = "mobile.html";
    }
}

function StartSlide(){
    let n = 1;
    let photo = document.getElementsByClassName("mainD")[0];
    if(b != photo.scrollHeight && b != 0){
        if(blb == false){
            b += 1;
        }else{
            b -= 1;
        }
    }else if(b == photo.scrollHeight){
        blb = true;
        b -= 1;
    }else if(b == 0){
        blb = false;
        b = 1;
        n = 6000;
    }
    photo.scrollTop = b;
    setTimeout("StartSlide()", 10);
}