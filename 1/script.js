//rev 3

window.addEventListener("load", function(){

/* ---------- DEBUG PANEL ---------- */

const debugBox = document.getElementById("musicDebug");
function debug(msg){
    if(debugBox) debugBox.innerText = msg;
}

debug("Music Debug: Script loaded");


/* ---------- APPLY CONFIG ---------- */

if(typeof CONFIG === "undefined"){
    debug("Music Debug: CONFIG not found");
    return;
}

document.title = CONFIG.title;

const spaceBar = document.getElementById("spaceBar");
if(spaceBar){
    spaceBar.innerText = CONFIG.heading;
}


/* ---------- START PANORAMA VIEWER ---------- */

try{

    pannellum.viewer("panorama", {
        type: "equirectangular",
        panorama: CONFIG.panoramaImage,
        autoLoad: true,
        friction: CONFIG.dragFriction
    });

    debug("Music Debug: Viewer started");

}catch(e){

    debug("Music Debug: Viewer error");
    console.error(e);
}


/* ---------- MUSIC SYSTEM ---------- */

const music = document.getElementById("bgMusic");

if(!music){
    debug("Music Debug: Audio element missing");
    return;
}

music.src = CONFIG.musicFile;
music.loop = true;
music.preload = "auto";

music.load();

music.addEventListener("canplaythrough", ()=>{
    debug("Music Debug: Audio ready");
});

music.addEventListener("error", ()=>{
    debug("Music Debug: Audio error");
});


/* ---------- START MUSIC ON FIRST CLICK ---------- */

let started = false;

document.addEventListener("click", function(){

    if(started) return;

    music.play().then(()=>{

        /* APPLY VOLUME AFTER PLAY */

        music.volume = CONFIG.musicVolume;

        debug("Music Debug: Playing");

        started = true;

    }).catch(err=>{

        debug("Music Debug: Autoplay blocked");

        console.error(err);

    });

});


});


/* ---------- FULLSCREEN BUTTON ---------- */

function openFullscreen(){

const elem = document.getElementById("panorama");

if(elem.requestFullscreen){
    elem.requestFullscreen();
}

}
