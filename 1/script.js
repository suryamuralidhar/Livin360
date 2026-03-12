window.addEventListener("load", function(){

console.log("Script started");

/* Apply config */

document.title = CONFIG.title;

const spaceBar = document.getElementById("spaceBar");
if(spaceBar){
spaceBar.innerText = CONFIG.heading;
}


/* Start panorama viewer */

pannellum.viewer('panorama', {
type: "equirectangular",
panorama: CONFIG.panoramaImage,
autoLoad: true,
friction: CONFIG.dragFriction
});


/* ===== MUSIC ===== */

const debugBox = document.getElementById("musicDebug");
const music = document.getElementById("bgMusic");

let musicStarted = false;

if(music){

debugBox.innerText = "Music Debug: Loading file...";

music.src = CONFIG.musicFile;
music.volume = CONFIG.musicVolume;

music.addEventListener("loadeddata", ()=>{
debugBox.innerText = "Music Debug: File Loaded";
});

music.addEventListener("playing", ()=>{
debugBox.innerText = "Music Debug: Playing";
});

music.addEventListener("ended", ()=>{
debugBox.innerText = "Music Debug: Track Ended";
});

music.addEventListener("error", ()=>{
debugBox.innerText = "Music Debug: Error loading music";
});


/* start music only ONCE */

document.addEventListener("click", function(){

if(!musicStarted){

music.play();

musicStarted = true;

debugBox.innerText = "Music Debug: Playing";

}

});

}

});


function openFullscreen(){

var elem = document.getElementById("panorama");

if(elem.requestFullscreen){
elem.requestFullscreen();
}

}
