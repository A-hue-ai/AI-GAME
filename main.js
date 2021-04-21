img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function perload()
{
    img = loadImage("mario05.png");
}

function setup()
{
    canvas = createCanvas(650, 400);
    video = createCapture(VIDEO);
    video.size(600,300);

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
    background("#D3D3D3");

    if(noseX < 300)
    {
        marioX = mariox - 1;
    }

    if(noseX > 300)
    {
        mario = marioX + 1;
    }

    if(noseY < 150)
    {
        marioY = marioY -1;
    }

    image(img,marioX, marioY, 40,70);
}

function gotPoses(results)
{
    if(results.lenth > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" , noseY =" + noseY);

    }
}