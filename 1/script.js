window.addEventListener("load", function(){

/* Apply config */

document.title = CONFIG.title;

document.getElementById("spaceBar").innerText = CONFIG.heading;

document.getElementById("popupText").innerHTML = CONFIG.popupText;

document.getElementById("popupButton").innerText = CONFIG.popupButton;


/* Start panorama viewer */

pannellum.viewer('panorama', {

type: "equirectangular",
panorama: CONFIG.panoramaImage,
autoLoad: true,
friction: CONFIG.dragFriction

});


/* ===== BACKGROUND MUSIC DEBUG ===== */

const debugBox = document.getElementById("musicDebug");

const music = document.getElementById("bgMusic");

if(music){

debugBox.innerText = "Music Debug: Loading file...";

music.src = CONFIG.musicFile;

music.volume = CONFIG.musicVolume;

music.addEventListener("loadeddata", ()=>{
debugBox.innerText = "Music Debug: File Loaded ✅";
});

music.addEventListener("playing", ()=>{
debugBox.innerText = "Music Debug: Playing ▶️";
});

music.addEventListener("error", ()=>{
debugBox.innerText = "Music Debug: Error loading music ❌";
});

music.play().then(()=>{

debugBox.innerText = "Music Debug: Autoplay started ▶️";

}).catch(()=>{

debugBox.innerText = "Music Debug: Autoplay blocked ⚠️ Tap screen";

});

}

});


/* Fullscreen */

function openFullscreen(){

var elem = document.getElementById("panorama");

if (elem.requestFullscreen) {
elem.requestFullscreen();
}

}


/* Popup close */

function closePopup(){
document.getElementById("mobilePopup").style.display="none";
}
