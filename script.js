// 1. SELECTING ALL OUR PIECES
const splashScreen = document.getElementById('splash-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const mainApp = document.getElementById('main-app');
const grid = document.getElementById('stations-grid');
const playerZone = document.getElementById('player-zone');
const audioPlayer = document.getElementById('audio-player');
const nowPlayingTitle = document.getElementById('now-playing-title');

// Buttons
const btnStart = document.getElementById('btn-start');
const btnEnter = document.getElementById('btn-enter');
const btnBack = document.getElementById('btn-back');

// Custom Audio Controls
const ctrlPlay = document.getElementById('ctrl-play');
const ctrlPause = document.getElementById('ctrl-pause');
const ctrlStop = document.getElementById('ctrl-stop');

// 2. THE 21 STATIONS (Filenames must match your GitHub files exactly)
const stations = [
    "01_Airport_Check-in.wav", "02_Boarding_and_Seating.wav", "03_Initial_Flight_Attendant.wav",
    "04_In-Flight_Request.wav", "05_Passport_Control.wav", "06_Customs_Clearance.wav",
    "07_Finding_Transportation.wav", "08_Hotel_Check-in.wav", "09_Room_Problem_Arises.wav",
    "10_Solving_the_Room_Problem.wav", "11_Car_Rental.wav", "12_Fancy_Dinner.wav",
    "13_Restaurant_Problem.wav", "14_Falling_Ill.wav", "15_Hospital_Visit.wav",
    "16_Pharmacy_Run.wav", "17_Police_Station_Report.wav", "18_Shoe_Shopping.wav",
    "19_Returning_the_Car.wav", "20_Arranging_Airport_Transfer.wav", "21_Taxi_to_the_Airport.wav"
];

// 3. NAVIGATION LOGIC (Moving between screens)
btnStart.onclick = () => {
    splashScreen.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
};

btnEnter.onclick = () => {
    instructionsScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
};

btnBack.onclick = () => {
    playerZone.classList.add('hidden');
    grid.classList.remove('hidden');
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset audio
};

// 4. BUILDING THE GRID OF 21
stations.forEach((filename, index) => {
    const tile = document.createElement('button');
    tile.className = 'station-tile';
    tile.innerText = index + 1; // Shows 1, 2, 3...
    
    tile.onclick = () => {
        // Hide grid, show player
        grid.classList.add('hidden');
        playerZone.classList.remove('hidden');
        
        // Prepare the audio
        const cleanName = filename.replace('.wav', '').replace(/_/g, ' ');
        nowPlayingTitle.innerText = cleanName;
        audioPlayer.src = filename;
    };
    
    grid.appendChild(tile);
});

// 5. CUSTOM PLAYER CONTROLS
ctrlPlay.onclick = () => audioPlayer.play();
ctrlPause.onclick = () => audioPlayer.pause();
ctrlStop.onclick = () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
};

// 6. PLACEHOLDERS FOR NEXT STEPS
document.getElementById('btn-blind').onclick = () => {
    audioPlayer.play();
    alert("Audio playing. Keep your eyes on the screen, listen closely!");
};

document.getElementById('btn-read').onclick = () => {
    alert("The 'Listen + Read' feature is coming in the next update!");
};

document.getElementById('btn-game').onclick = () => {
    alert("The 'Match Game' feature is coming in the next update!");
};
