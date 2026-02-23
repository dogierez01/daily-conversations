const splashScreen = document.getElementById('splash-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const mainApp = document.getElementById('main-app');
const grid = document.getElementById('stations-grid');
const playerZone = document.getElementById('player-zone');
const audioPlayer = document.getElementById('audio-player');
const nowPlayingTitle = document.getElementById('now-playing-title');
const transcriptBox = document.getElementById('transcript-box');

// Navigation logic
document.getElementById('btn-start').onclick = () => { splashScreen.classList.add('hidden'); instructionsScreen.classList.remove('hidden'); };
document.getElementById('btn-enter').onclick = () => { instructionsScreen.classList.add('hidden'); mainApp.classList.remove('hidden'); };
document.getElementById('btn-back').onclick = () => { 
    playerZone.classList.add('hidden'); 
    grid.classList.remove('hidden'); 
    transcriptBox.classList.add('hidden'); 
    audioPlayer.pause(); 
};

// Player Controls
document.getElementById('ctrl-play').onclick = () => audioPlayer.play();
document.getElementById('ctrl-pause').onclick = () => audioPlayer.pause();
document.getElementById('ctrl-stop').onclick = () => { audioPlayer.pause(); audioPlayer.currentTime = 0; };

// Build Grid of 21
const stations = ["01_Airport_Check-in.wav", "02_Boarding_and_Seating.wav", "03_Initial_Flight_Attendant.wav", "04_In-Flight_Request.wav", "05_Passport_Control.wav", "06_Customs_Clearance.wav", "07_Finding_Transportation.wav", "08_Hotel_Check-in.wav", "09_Room_Problem_Arises.wav", "10_Solving_the_Room_Problem.wav", "11_Car_Rental.wav", "12_Fancy_Dinner.wav", "13_Restaurant_Problem.wav", "14_Falling_Ill.wav", "15_Hospital_Visit.wav", "16_Pharmacy_Run.wav", "17_Police_Station_Report.wav", "18_Shoe_Shopping.wav", "19_Returning_the_Car.wav", "20_Arranging_Airport_Transfer.wav", "21_Taxi_to_the_Airport.wav"];

stations.forEach((filename, index) => {
    const tile = document.createElement('button');
    tile.className = 'station-tile';
    tile.innerText = index + 1;
    tile.onclick = () => {
        grid.classList.add('hidden');
        playerZone.classList.remove('hidden');
        nowPlayingTitle.innerText = filename.replace('.wav', '').replace(/_/g, ' ');
        audioPlayer.src = filename;
    };
    grid.appendChild(tile);
});

// LISTEN + READ Logic (Full Conversation Loop)
document.getElementById('btn-read').onclick = () => {
    const filename = audioPlayer.src.split('/').pop();
    const fullConversation = typeof lessonData !== 'undefined' ? lessonData[filename] : null;

    if (fullConversation) {
        transcriptBox.classList.remove('hidden');
        transcriptBox.innerHTML = ""; // Clear screen

        fullConversation.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = `line-container speaker-${line.speaker}`;
            
            line.text.split(" ").forEach(word => {
                const span = document.createElement('span');
                const cleanWord = word.replace(/[.,?!]/g, "");
                span.innerText = word + " ";
                span.className = "clickable-word";
                
                span.onclick = () => {
                    const turkish = line.dictionary[cleanWord];
                    if (turkish) alert(`${cleanWord} = ${turkish}`);
                };
                lineDiv.appendChild(span);
            });
            transcriptBox.appendChild(lineDiv);
        });
        audioPlayer.play();
    } else {
        alert("Conversation data coming soon!");
    }
};

document.getElementById('btn-blind').onclick = () => { transcriptBox.classList.add('hidden'); audioPlayer.play(); };
