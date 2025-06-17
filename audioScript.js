const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');


document.addEventListener('click', () => {
    audio.muted = false;
}, { once: true });


playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(err => console.log('Play blocked:', err));
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});


audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});


audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});


progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});


volumeSlider.addEventListener('input', () => {
    const raw = volumeSlider.value / 100;
    audio.volume = Math.min(raw, 1);
    audio.playbackRate = raw > 1 ? 1.05 : 1.0;
});


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}
