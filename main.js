noseX = 0;
noseY = 0;

function preload(){
    mustanch = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    hat = loadImage("https://i.postimg.cc/909D6KkX/morio.jpg")
}
function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log("model Loaded");
}

function take_snapshot(){
    save('myFlterIamge.png');
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(mustanch , noseX - 25 , noseY - 8 , 60 , 50);
    image(hat , noseX - 25 , noseY - 90 , 60 , 60);

}


function gotPoses(results) { 
    if(results.length > 0) 
    { console.log(results); 
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y; 
        console.log("nose x = " + noseX); 
        console.log("nose y = " + noseY); } 
    }