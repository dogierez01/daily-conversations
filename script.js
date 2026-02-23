// Get our screens and buttons
const splashScreen = document.getElementById('splash-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const mainApp = document.getElementById('main-app');

const btnStart = document.getElementById('btn-start');
const btnEnter = document.getElementById('btn-enter');
const audioPlayer = document.getElementById('audio-player');
const stationSelect = document.getElementById('station-select');
const btnBlind = document.getElementById('btn-blind');

// Logic to switch screens
btnStart.onclick = () => {
    splashScreen.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
};

btnEnter.onclick = () => {
    instructionsScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
};

// Simple audio logic for Listen Blind
btnBlind.onclick = () => {
    const selectedFile = stationSelect.value;
    audioPlayer.src = selectedFile;
    audioPlayer.style.display = 'block';
    audioPlayer.play();
};
