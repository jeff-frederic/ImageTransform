

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

        blackAndWhiteCanvas(canvas);
        // let ascii = asciiCanvas(canvas);
        // let pixelated = pixelatedCanvas(canvas);

        canvasContainer.appendChild(canvas);
        // canvasContainer.appendChild(blackWhite);
        // canvasContainer.appendChild(ascii);
        // canvasContainer.appendChild(pixelated);
    }
    image.onerror = () => {
        alert("There has been an error, please upload another image.")
    }
}



function blackAndWhiteCanvas(canvas){
    let ctx = canvas.getContext('2d');
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));
}




export function clearView(){
    document.getElementById('canvasContainer').innerHTML = '';
}



