const mainAudio = document.querySelector('.main-audio')

// Eventos
document.querySelector('.start').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica)


// Funções
function tocarMusica() {
    mainAudio.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.start').style.display = 'none';
}

function pausarMusica() {
    mainAudio.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.start').style.display = 'block';
}


mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {

        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});