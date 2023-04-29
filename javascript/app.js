import { buildView, clearView } from "./views.js";



let portraitImage = new Image();
portraitImage.src = 'assets/portrait.jpg';

let flowerImage = new Image();
flowerImage.src = 'assets/flower.jpg';

let buildingsImage = new Image();
buildingsImage.src = 'assets/buildings.jpg';

let twofaceImage = new Image();
twofaceImage.src = 'assets/twoface.jpg';

let sunsetImage = new Image();
sunsetImage.src = 'assets/sunset.jpg';

let monalisaImage = new Image();
monalisaImage.src = 'assets/monalisa.jpg';

let statueImage = new Image();
statueImage.src = 'assets/statue.jpg';

let input = document.getElementById('image_input');
input.addEventListener('change', () => {
    clearButtons();
    let file = input.files[0];
    let uploadedImage = new Image();
    uploadedImage.src = URL.createObjectURL(file);
    uploadedImage.onload = () => {
        buildView(uploadedImage);
    }
});


document.getElementById('portraitButton').addEventListener('click', () => {
    clearButtons();
    portraitImage.onload = buildView(portraitImage);
    document.getElementById('portraitButton').classList.add('active');
});

document.getElementById('flowerButton').addEventListener('click', () => {
    clearButtons();
    flowerImage.onload = buildView(flowerImage);
    document.getElementById('flowerButton').classList.add('active');
});

document.getElementById('buildingsButton').addEventListener('click', () => {
    clearButtons();
    buildingsImage.onload = buildView(buildingsImage);
    document.getElementById('buildingsButton').classList.add('active');
});

document.getElementById('twofaceButton').addEventListener('click', () => {
    clearButtons();
    twofaceImage.onload = buildView(twofaceImage);
    document.getElementById('twofaceButton').classList.add('active');
});

document.getElementById('sunsetButton').addEventListener('click', () => {
    clearButtons();
    sunsetImage.onload = buildView(sunsetImage);
    document.getElementById('sunsetButton').classList.add('active');
});

document.getElementById('monalisaButton').addEventListener('click', () => {
    clearButtons();
    monalisaImage.onload = buildView(monalisaImage);
    document.getElementById('monalisaButton').classList.add('active');
});

document.getElementById('statueButton').addEventListener('click', () => {
    clearButtons();
    statueImage.onload = buildView(statueImage);
    document.getElementById('statueButton').classList.add('active');
});


window.onload = () => {
    document.getElementById('portraitButton').click();
}


function clearButtons(){
    document.getElementById('portraitButton').classList.remove('active');
    document.getElementById('flowerButton').classList.remove('active');
    document.getElementById('buildingsButton').classList.remove('active');
    document.getElementById('twofaceButton').classList.remove('active');
    document.getElementById('sunsetButton').classList.remove('active');
    document.getElementById('monalisaButton').classList.remove('active');
    document.getElementById('statueButton').classList.remove('active');
}