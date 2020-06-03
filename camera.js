var constraints = { audio: false, video: { width: 1920, height: 1080 } };

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
        var video = document.querySelector('.background');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
        // video.width = 100;
        // video.height = 480;
        // video.style.width = '100vw';
        // video.style.height = '100vh';

    })
    .catch(function (err) { console.log(err.name + ": " + err.message); });

var front = false;
document.getElementById('flip-button').onclick = function () { front = !front; };

var constraints = { video: { facingMode: (front ? "user" : "environment") } };

// sourceWidth: 640,
// sourceHeight: 480,
// // resolution displayed for the source
// displayWidth: 640,
// displayHeight: 480,

