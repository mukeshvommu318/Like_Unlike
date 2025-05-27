let updateImg = document.getElementById("imgid")
let bool = false;
let liked = document.getElementById("like")
let likeFont = document.getElementById("likefont")

function onLiked(){
    bool = !bool
    if(bool){
    updateImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
    liked.textContent="Liked"
    liked.style.color="white"
    liked.style.backgroundColor="blue"
    likeFont.style.color="blue"
}
    else{
        updateImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
         liked.textContent="Like"
         liked.style.color="black"
        liked.style.backgroundColor="white"
        likeFont.style.color="black"
    }
}