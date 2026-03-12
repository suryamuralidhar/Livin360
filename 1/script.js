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


/* MUSIC DEBUG */

const debugBox = document.getElementById("musicDebug");
const music = document.getElementById("bgMusic");

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

music.addEventListener("error", ()=>{
debugBox.innerText = "Music Debug: Error loading music";
});

/* play after user interaction */

document.addEventListener("click", function startMusic(){

music.play();
debugBox.innerText = "Music Debug: Playing";

document.removeEventListener("click", startMusic);

});

}

});


function openFullscreen(){

var elem = document.getElementById("panorama");

if(elem.requestFullscreen){
elem.requestFullscreen();
}

}
