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


document.getElementById('portraitButton').addEventListener('click', () => {
    portraitImage.onload = buildView(portraitImage);
});

document.getElementById('flowerButton').addEventListener('click', () => {
    flowerImage.onload = buildView(flowerImage);
});

document.getElementById('buildingsButton').addEventListener('click', () => {
    buildingsImage.onload = buildView(buildingsImage);
});

document.getElementById('twofaceButton').addEventListener('click', () => {
    twofaceImage.onload = buildView(twofaceImage);
});

document.getElementById('sunsetButton').addEventListener('click', () => {
    sunsetImage.onload = buildView(sunsetImage);
});

document.getElementById('monalisaButton').addEventListener('click', () => {
    monalisaImage.onload = buildView(monalisaImage);
});

document.getElementById('statueButton').addEventListener('click', () => {
    statueButton.onload = buildView(monalisaImage);
});

