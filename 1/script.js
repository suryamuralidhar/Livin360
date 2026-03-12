window.addEventListener("load", function(){

/* Start panorama viewer */

pannellum.viewer('panorama', {

type: "equirectangular",
panorama: CONFIG.panoramaImage,
autoLoad: true,
friction: CONFIG.dragFriction

});


/* ===== BACKGROUND MUSIC ===== */

const music = document.getElementById("bgMusic");

if(music){

music.src = CONFIG.musicFile;

music.volume = CONFIG.musicVolume;

music.play().catch(()=>{

console.log("Autoplay blocked until user interaction");

});

}

});
