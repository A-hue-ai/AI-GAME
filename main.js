img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function perload()
{
    img = loadImage("mario05.png");
    setSprites();
    MarioAnimation();
}

function setup()
{
    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');

    instializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent('game_console');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
    game();
}

function gotPoses(results)
{
    if(results.lenth > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }
}