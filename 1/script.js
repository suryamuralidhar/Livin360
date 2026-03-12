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


/* ===== BACKGROUND MUSIC ===== */

const debugBox = document.getElementById("musicDebug");
const music = document.getElementById("bgMusic");

let musicStarted = false;

if (music) {

debugBox.innerText = "Music Debug: Loading music...";

/* set source only once */

music.src = CONFIG.musicFile;
music.loop = true;
music.preload = "auto";

/* apply volume */

music.volume = CONFIG.musicVolume;

/* load audio */

music.load();

music.addEventListener("canplaythrough", () => {
debugBox.innerText = "Music Debug: Ready to play";
});

/* start music on first user interaction */

function startMusic() {

if (!musicStarted) {

music.play().then(() => {

debugBox.innerText = "Music Debug: Playing";
musicStarted = true;

}).catch(err => {

debugBox.innerText = "Music Debug: Autoplay blocked";

console.error(err);

});

}

}

/* only once */

document.addEventListener("click", startMusic, { once: true });

}

});


function openFullscreen(){

var elem = document.getElementById("panorama");

if(elem.requestFullscreen){
elem.requestFullscreen();
}

}
