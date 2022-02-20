function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}
function modelLoaded() {
    console.log('poseNet is Initialized!');
}

difference=0;
rightWristX=0;
leftWristX=0;

function gotPoses(results) 
{
    if (results.length>0); {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(rightWristX-leftWristX);

        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);

        
    }
    
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('green');
    text('cars',50,400);
    document.getElementById("square_side").innerHTML="Width and Height of a Square will be="+difference+"px";

    
}