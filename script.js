let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;   
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause(); 
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play().catch(error => {
            console.error("Error al intentar reproducir la canción:", error);
        }); 
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


setInterval(() => {
    progress.value = song.currentTime;
}, 500);


progress.onchange = function() {
    song.currentTime = progress.value; 
    song.play().catch(error => {
        console.error("Error al intentar reproducir la canción:", error);
    }); 
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}