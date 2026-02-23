const splash = document.getElementById('splash-screen');
const instr = document.getElementById('instructions-screen');
const app = document.getElementById('main-app');
const grid = document.getElementById('stations-grid');
const playerZone = document.getElementById('player-zone');
const audio = document.getElementById('audio-player');
const transcript = document.getElementById('transcript-box');

// Navigation
document.getElementById('btn-start').onclick = () => { splash.classList.add('hidden'); instr.classList.remove('hidden'); };
document.getElementById('btn-enter').onclick = () => { instr.classList.add('hidden'); app.classList.remove('hidden'); };
document.getElementById('btn-back').onclick = () => { playerZone.classList.add('hidden'); grid.classList.remove('hidden'); transcript.classList.add('hidden'); audio.pause(); };

// Controls
document.getElementById('ctrl-play').onclick = () => audio.play();
document.getElementById('ctrl-pause').onclick = () => audio.pause();
document.getElementById('ctrl-stop').onclick = () => { audio.pause(); audio.currentTime = 0; };

const stations = [
    { file: "01_Airport_Check-in.wav", title: "Airport Check-in" },
    { file: "02_Boarding_and_Seating.wav", title: "Boarding & Seating" }
    // Add more here later
];

stations.forEach((s, i) => {
    const btn = document.createElement('div');
    btn.className = 'station-tile';
    btn.innerHTML = `<strong>${i + 1}</strong> <span>${s.title}</span>`;
    btn.onclick = () => {
        grid.classList.add('hidden');
        playerZone.classList.remove('hidden');
        document.getElementById('now-playing-title').innerText = s.title;
        audio.src = s.file;
    };
    grid.appendChild(btn);
});

document.getElementById('btn-read').onclick = () => {
    const filename = audio.src.split('/').pop();
    const data = typeof lessonData !== 'undefined' ? lessonData[filename] : null;
    if (data) {
        transcript.classList.remove('hidden');
        transcript.innerHTML = "";
        data.forEach(line => {
            const div = document.createElement('div');
            div.className = `line-container speaker-${line.speaker}`;
            line.text.split(" ").forEach(w => {
                const span = document.createElement('span');
                const clean = w.replace(/[.,?!]/g, "");
                span.innerText = w + " ";
                span.className = "clickable-word";
                span.onclick = () => { 
                    const tr = line.dict[clean]; 
                    if(tr) alert(`${clean} = ${tr}`); 
                };
                div.appendChild(span);
            });
            transcript.appendChild(div);
        });
        audio.play();
    }
};

document.getElementById('btn-blind').onclick = () => { transcript.classList.add('hidden'); audio.play(); };
document.getElementById('btn-game').onclick = () => alert("Match Game is currently in production!");
