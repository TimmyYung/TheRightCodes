const modelParams = {
    flipHorizontal: false,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 1,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.69,    // confidence threshold for predictions.
  }

//   Get the webcam and useable on all browsers
navigator.getUserMedia = 
navigator.getUserMedia || 
navigator.webkitGetUserMedia || // Webkit
navigator.mozGetUserMedia || // Firefox
navigator.msGetUserMedia; // Microsoft

// SELECT EVERYTHING FROM HTML
const video = document.querySelector("#video");
const audio = document.querySelector("#audio");
let model; // Handtrack.js has a premade model

// Detects the movement
handTrack.startVideo(video)
// Sees if the webcam is currently working
  .then(status=>{
    if(status){
        navigator.getUserMedia({video: {}}, stream=> { 
            video.srcObject= stream; // Takes the Stream and passes it to the video
            // Run our detection
                setInterval(runDetection, 100); //Run at every 100ms
        },
        err => console.log(err)
        );
    }
  });

function runDetection(){
    model.detect(video).then(predictions =>{
        if(predictions.length !== 0){ //Do this when detecting a hand
            let hand1 = predictions[0].bbox;
            let x = hand1[0];
            let y = hand1[1];
            
            if(y>300){
                if(x<200){
                    audio.src="../Sounds/a-chord.mp3";
                } else if(x > 400){
                    audio.src = "../Sounds/e-chord.mp3"
                } else if(x > 300){
                    audio.src = "../Sounds/c-chord.mp3"
                } else if(x > 200){
                    audio.src = "../Sounds/b-chord.mp3"
                }
            }
            // PLAYS THE SOUND
            audio.play();
        }
    });
}

handTrack.load(modelParams)
.then(lmodel =>{
    model = lmodel; // When the model is loaded up, change it
})

