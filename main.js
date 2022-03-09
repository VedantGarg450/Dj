var song= ""
function preload(){
    song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(700, 700)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 700, 700)
}
function PLAY(){
    song.play()
}
function STOP(){
    song.pause()
}