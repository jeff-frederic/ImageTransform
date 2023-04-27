import { greyscale } from "./analyzer.js";


export function buildView(image){
    clearView();
    image.onload = () => {
        let canvasContainer = document.getElementById('canvasContainer');
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        
        canvas.height = image.height;
        canvas.width = image.width;
        canvas.style = 'border: 2px solid black;';

        ctx.drawImage(image, 0, 0);

        let blackWhite = blackAndWhiteCanvas(canvas);
        // let ascii = asciiCanvas(canvas);
        // let pixelated = pixelatedCanvas(canvas);

        canvasContainer.appendChild(canvas);
        canvasContainer.appendChild(blackWhite);
        // canvasContainer.appendChild(ascii);
        // canvasContainer.appendChild(pixelated);
    }
    image.onerror = () => {
        alert("There has been an error, please upload another image.")
    }
}



function blackAndWhiteCanvas(canvas){
    let imgData =  canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    
    let newCanvas = document.createElement('canvas');
    let newCtx = newCanvas.getContext('2d');
    styleCanvas(canvas, newCanvas);
    
    newCtx.putImageData(greyscale(imgData), 0, 0);
    
    return newCanvas;
}




export function clearView(){
    document.getElementById('canvasContainer').innerHTML = '';
}


/**
 * Copies the width, height from one canvas 
 * to a new one. Also sets styling for new one.
 */
function styleCanvas(mainCanvas, newCanvas){
    newCanvas.height = mainCanvas.height; 
    newCanvas.width = mainCanvas.width; 
    newCanvas.style = 'border: 2px solid black';
}