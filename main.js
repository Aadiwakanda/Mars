canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
nasa_bgimg=["NASA1.jpg","NASA2.jpg","NASA3.jpg","NASA4.jpg"]
random_number=Math.floor(Math.random()*4)
console.log(random_number)

rover_width = 100
rover_height = 90

roverX = 10
roverY = 10

background_img = nasa_bgimg[random_number]
rover_img = "rover.png"

function add() {
    bg_img = new Image()
    bg_img.onload = uploadbg
    bg_img.src = background_img

    rover_bgimg = new Image()
    rover_bgimg.onload = uploadroverimg
    rover_bgimg.src = rover_img
}

function uploadbg() {
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height)
}

function uploadroverimg() {
    ctx.drawImage(rover_bgimg, roverX, roverY, rover_width, rover_height)
}

window.addEventListener("keydown", key_down)

function key_down(e) {
    key_pressed = e.keyCode
    console.log(key_pressed)

    if (key_pressed == '37') {
        Left();
        console.log("Left key is pressed")
    }

    if (key_pressed == '38') {
        up();
        console.log("up key is pressed")
    }

    if (key_pressed == '39') {
        right();
        console.log("right key is pressed")
    }

    if (key_pressed == '40') {
        down();
        console.log("down key is pressed")
    }
}

function Left() {

    if (roverX >= 0) {
        roverX = roverX - 10
        console.log("when the left key is clicked X=" + roverX + ",Y=" + roverY)
        uploadbg()
        uploadroverimg()
    }
}

function up() {

    if (roverY >= 0) {
        roverY = roverY - 10
        console.log("when the UP key is clicked X=" + roverX + ",Y=" + roverY)
        uploadbg()
        uploadroverimg()
    }
}

function right() {

    if (roverX <= 600) {
        roverX = roverX + 10
        console.log("when the right key is clicked X=" + roverX + ",Y=" + roverY)
        uploadbg()
        uploadroverimg()
    }
}

function down() {

    if (roverY <= 500) {
        roverY = roverY +10
        console.log("when the down key is clicked X=" + roverX + ",Y=" + roverY)
        uploadbg()
        uploadroverimg()
    }
}

