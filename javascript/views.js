import { getAverageRGB, greyscale, invert, mapRGBtoScale, solarize } from "./analyzer.js";


export async function buildView(image){
    clearView();
    let canvasContainer = document.getElementById('canvasContainer');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d', {willReadFrequently: true});
    
    canvas.height = image.height;
    canvas.width = image.width;

    ctx.drawImage(image, 0, 0);

    let blackWhite = blackAndWhiteCanvas(canvas);
    let dotted = dottedCanvas(canvas);
    let invert = invertedCanvas(canvas);
    let solarize = solarizedCanvas(canvas);
    let ascii = asciiCanvas(canvas);

    canvasContainer.appendChild(canvas);
    canvasContainer.appendChild(invert);
    canvasContainer.appendChild(dotted);
    canvasContainer.appendChild(ascii);
    canvasContainer.appendChild(solarize);
    canvasContainer.appendChild(blackWhite);
}



function blackAndWhiteCanvas(canvas){
    let imgData =  canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    
    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');
    styleCanvas(canvas, newCanvas);
    
    newCtx.putImageData(greyscale(imgData), 0, 0);
    
    return newCanvas;
}



function invertedCanvas(canvas){
    let imgData =  canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    
    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');
    styleCanvas(canvas, newCanvas);
    
    newCtx.putImageData(invert(imgData), 0, 0);
    
    return newCanvas;
}


function solarizedCanvas(canvas){
    let imgData =  canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    
    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');
    styleCanvas(canvas, newCanvas);
    
    newCtx.putImageData(solarize(imgData), 0, 0);
    
    return newCanvas;
}


function dottedCanvas(canvas){
    let ctx =  canvas.getContext('2d');

    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');

    styleCanvas(canvas, newCanvas);
    newCanvas.style = 'background-color: lightgrey;'     // better visibility of dots
    
    const l = 10;
    for(let i=0; i<=canvas.width-l; i+=l){
        for(let j=0; j<=canvas.height-l; j+=l){
            let imgData = ctx.getImageData(i, j, l, l);
            console.log();
            let rgb = getAverageRGB(imgData);
            newCtx.beginPath();
            newCtx.arc(i+(l/2),j+(l/2),(l/2)-1,0,2*Math.PI);
            newCtx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            newCtx.fill();
        }
    }

    return newCanvas;
}


function asciiCanvas(canvas){
    let ctx =  canvas.getContext('2d');

    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');

    styleCanvas(canvas, newCanvas);
    
    const l = 10;
    for(let i=0; i<=canvas.width-l; i+=l){
        for(let j=0; j<=canvas.height-l; j+=l){
            let imgData = ctx.getImageData(i, j, l, l);
            console.log();
            let rgb = getAverageRGB(imgData);
            
            let asciiScale = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
            let greyValue = ~~((rgb.r + rgb.g + rgb.b)/3);
            let index = ~~mapRGBtoScale(greyValue, 0, asciiScale.length-1);
            newCtx.font = "12px Arial";
            newCtx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            newCtx.fillText(asciiScale[index], i, j);
        }
    }

    return newCanvas;
}


/**
 * Copies the width, height from one canvas 
 * to a new one. Also sets styling for new one.
 */
function styleCanvas(mainCanvas, newCanvas){
    newCanvas.height = mainCanvas.height; 
    newCanvas.width = mainCanvas.width; 
}


export function clearView(){
    document.getElementById('canvasContainer').innerHTML = '';
}