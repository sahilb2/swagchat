'use strict';

// Set navigator.getUserMedia to an appropriate function
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

// Enable both audio and video
var constraints = {
    audio: false,
    video: true
};
var video = document.querySelector('video');

function successCallback(stream){
    // Stream available to console
    window.stream = stream;
    if(window.URL){
        // Set video to URL
        video.src = window.URL.createObjectURL(stream);
    }
    else{
        // Set video to stream
        video.src = stream;
    }
}

// Error handling
function errorCallback(error){
    console.log('navigator.getUserMedia error: ', error);
}

// Making the getUserMedia call
navigator.getUserMedia(constraints,successCallback,errorCallback);
