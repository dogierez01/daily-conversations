const splash = document.getElementById('splash-screen'), instr = document.getElementById('instructions-screen'), app = document.getElementById('main-app'), grid = document.getElementById('stations-grid'), playerZone = document.getElementById('player-zone'), audio = document.getElementById('audio-player'), transcript = document.getElementById('transcript-box'), popup = document.getElementById('translation-popup'), gameZone = document.getElementById('game-zone'), gameBoard = document.getElementById('game-board');

let wordBucket = []; 
let firstCard = null;

document.getElementById('btn-start').onclick = () => { splash.classList.add('hidden'); instr.classList.remove('hidden'); };
document.getElementById('btn-enter').onclick = () => { instr.classList.add('hidden'); app.classList.remove('hidden'); };
document.getElementById('btn-back').onclick = () => { playerZone.classList.add('hidden'); grid.classList.remove('hidden'); transcript.classList.add('hidden'); gameZone.classList.add('hidden'); audio.pause(); };

document.getElementById('ctrl-play').onclick = () => audio.play();
document.getElementById('ctrl-pause').onclick = () => audio.pause();
document.getElementById('ctrl-stop').onclick = () => { audio.pause(); audio.currentTime = 0; };

const stations = [
    {file:"01_Airport_Check-in.wav", title:"Airport Check-in"}, {file:"02_Boarding_and_Seating.wav", title:"Boarding & Seating"}, {file:"03_Initial_Flight_Attendant.wav", title:"Flight Attendant"}, {file:"04_In-Flight_Request.wav", title:"In-Flight Request"}, {file:"05_Passport_Control.wav", title:"Passport Control"}, {file:"06_Customs_Clearance.wav", title:"Customs Clearance"}, {file:"07_Finding_Transportation.wav", title:"Finding Transportation"}, {file:"08_Hotel_Check-in.wav", title:"Hotel Check-in"}, {file:"09_Room_Problem_Arises.wav", title:"Room Problem Arises"}, {file:"10_Solving_the_Room_Problem.wav", title:"Solving the Problem"}, {file:"11_Car_Rental.wav", title:"Car Rental"}, {file:"12_Fancy_Dinner.wav", title:"Fancy Dinner"}, {file:"13_Restaurant_Problem.wav", title:"Restaurant Problem"}, {file:"14_Falling_Ill.wav", title:"Falling Ill"}, {file:"15_Hospital_Visit.wav", title:"Hospital Visit"}, {file:"16_Pharmacy_Run.wav", title:"Pharmacy Run"}, {file:"17_Police_Station_Report.wav", title:"Police Station Report"}, {file:"18_Shoe_Shopping.wav", title:"Shoe Shopping"}, {file:"19_Returning_the_Car.wav", title:"Returning the Car"}, {file:"20_Arranging_Airport_Transfer.wav", title:"Airport Transfer"}, {file:"21_Taxi_to_the_Airport.wav", title:"Taxi to Airport"}
];

stations.forEach((s, i) => {
    const btn = document.createElement('div'); btn.className = 'station-tile';
    btn.innerHTML = `<b>${i + 1}</b> ${s.title}`;
    btn.onclick = () => { grid.classList.add('hidden'); playerZone.classList.remove('hidden'); document.getElementById('now-playing-title').innerText = s.title; audio.src = s.file; wordBucket = []; }; 
    grid.appendChild(btn);
});

document.getElementById('btn-read').onclick = () => {
    const filename = audio.src.split('/').pop();
    const data = typeof lessonData !== 'undefined' ? lessonData[filename] : null;
    if (data) {
        transcript.classList.remove('hidden'); gameZone.classList.add('hidden');
        transcript.innerHTML = "";
        data.forEach(line => {
            const div = document.createElement('div'); div.className = `line-container speaker-${line.speaker}`;
            line.text.split(" ").forEach(w => {
                const span = document.createElement('span'); const clean = w.replace(/[.,?!]/g, "").toLowerCase();
                span.innerText = w + " "; span.className = "clickable-word";
                span.onclick = (e) => { 
                    const tr = line.dict[w.replace(/[.,?!]/g, "")] || line.dict[clean]; 
                    if(tr) {
                        if (!wordBucket.some(p => p.en.toLowerCase() === clean)) { wordBucket.push({en: clean, tr: tr}); }
                        popup.innerText = tr; popup.style.left = `${e.pageX}px`; popup.style.top = `${e.pageY - 45}px`;
                        popup.classList.remove('hidden'); setTimeout(() => popup.classList.add('hidden'), 1500);
                    }
                };
                div.appendChild(span);
            });
            transcript.appendChild(div);
        });
        audio.play();
    }
};

document.getElementById('btn-game').onclick = () => {
    const filename = audio.src.split('/').pop();
    const lesson = lessonData[filename];
    if (!lesson) return;
    let finalPairs = wordBucket.length;
    if (finalPairs < 4) finalPairs = 4;
    if (finalPairs % 2 !== 0) finalPairs += 1;
    let selectedSet = [...wordBucket];
    const fullDict = Object.assign({}, ...lesson.map(l => l.dict));
    const allEn = Object.keys(fullDict);
    for (let word of allEn) {
        if (selectedSet.length >= finalPairs) break;
        if (!selectedSet.some(p => p.en.toLowerCase() === word.toLowerCase())) {
            selectedSet.push({en: word, tr: fullDict[word]});
        }
    }
    transcript.classList.add('hidden'); gameZone.classList.remove('hidden');
    gameBoard.innerHTML = ""; firstCard = null;
    let deck = [];
    selectedSet.forEach(p => { deck.push({text: p.en, match: p.tr}); deck.push({text: p.tr, match: p.en}); });
    deck.sort(() => 0.5 - Math.random());
    deck.forEach(card => {
        const div = document.createElement('div'); div.className = 'game-card';
        div.innerText = card.text;
        div.onclick = () => {
            if (div.classList.contains('correct') || div.classList.contains('selected')) return;
            if (firstCard) {
                if (firstCard.innerText === card.match) {
                    div.classList.add('correct'); firstCard.classList.add('correct');
                    firstCard.classList.remove('selected'); firstCard = null;
                } else {
                    div.classList.add('wrong');
                    setTimeout(() => { div.classList.remove('wrong'); firstCard.classList.remove('selected'); firstCard = null; }, 500);
                }
            } else { firstCard = div; div.classList.add('selected'); }
        };
        gameBoard.appendChild(div);
    });
};

document.getElementById('btn-blind').onclick = () => { transcript.classList.add('hidden'); gameZone.classList.add('hidden'); audio.play(); };
