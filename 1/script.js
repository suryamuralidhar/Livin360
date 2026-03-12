window.addEventListener("load", function(){

console.log("360 viewer starting...");

/* Apply config */

document.title = CONFIG.title;

const spaceBar = document.getElementById("spaceBar");
if(spaceBar){
spaceBar.innerText = CONFIG.heading;
}


/* Start panorama viewer */

const viewer = pannellum.viewer('panorama', {

type: "equirectangular",
panorama: CONFIG.panoramaImage,
autoLoad: true,
friction: CONFIG.dragFriction

});


/* MUSIC DEBUG */

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

/* start music after user interaction */

document.addEventListener("click", function startMusic(){

music.play();

debugBox.innerText = "Music Debug: Playing";

document.removeEventListener("click", startMusic);

});

}
