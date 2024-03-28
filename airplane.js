const keeplandingAudio = new Audio('audios/keep.mp3');
const airspeedlowAudio = new Audio('audios/airspeedlow.mp3');
const glideslopeAudio = new Audio('audios/glideslope.mp3');
const appMinimumsAudio = new Audio('audios/appminimums.mp3');
const minimumsAudio = new Audio('audios/minimums.mp3');
const retardAudio = new Audio('audios/retard.mp3');
let keep = "Keep Landing";
let low = "Airspeed Low, Airspeed Low";
let speed = document.getElementById('input-speed');
let altitudeValue = document.getElementById('input-altitude'); 
let glideslope = "Glideslope";
let approachingMinimums = "Approaching Minimums";
let minimums = "Minimums";
let retard = "Retard!";


document.getElementById('speedButton').addEventListener("click", airspeedAlert);
document.getElementById('altitudeButton').addEventListener("click", altitudeAlert);

function airspeedAlert() {
    let airspeed = parseInt(speed.value);
    playSound(airspeed)
};

function altitudeAlert() {
    let altitude = parseInt(altitudeValue.value);
    playSound(null, altitude)
};


function playSound(velocidade, altitude) {
    //Se velocidade...
    if (velocidade) {
        if (velocidade >= 150) {
            console.log(keep)
            keeplandingAudio.play()
            alert('Keep Landing (Auto Pilot Disconnected)')
        }

        else {
            console.log(low),
            airspeedlowAudio.play()
            alert('Airspeed Low, Airspeed Low!')

        }
    }

    //Se Altitude...
    if(altitude){
        if (altitude >= 400 ) {
            console.log(glideslope)
            glideslopeAudio.play()
            alert('Glideslope (out of route)')
        }

        if(altitude < 399 && altitude >= 300) {
            console.log(approachingMinimums)
            appMinimumsAudio.play()
            alert('Approaching Minimums')
        }

        if(altitude <= 299 && altitude >= 100) {
            console.log(minimums)
            minimumsAudio.play()
            alert('Minimums')
        }

        if(altitude <= 99) {
            console.log(retard)
            retardAudio.play()
            alert('Retard! (Land)')
        }

    }
}