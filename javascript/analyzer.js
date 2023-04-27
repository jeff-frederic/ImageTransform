

export function getAverageRGB(imageDataBlock) {
    let rgb = {r:0, g:0 ,b:0},
        count = 0;

    for(let i=0; i<imageDataBlock.length; i+=4){
        count++;
        rgb.r += imageDataBlock[i];
        rgb.g += imageDataBlock[i+1];
        rgb.b += imageDataBlock[i+2];
    }

    // ~~ used to Math.floor()
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;
}


/**
 * Transforms all image data into black and 
 * white using the LUMINOSITY method. This
 * is the best method to turn an image in
 * a greyscale. 
 * https://www.baeldung.com/cs/convert-rgb-to-grayscale
 */
export function greyscale(imageDataBlock){
    let luminosity;
    for(let i=0; i<imageDataBlock.data.length; i+=4){
        luminosity = ~~(
            (0.31 * imageDataBlock.data[i]) + 
            (0.59 * imageDataBlock.data[i+1]) +
            (0.11 * imageDataBlock.data[i+2]));
        
        imageDataBlock.data[i] = luminosity;
        imageDataBlock.data[i+1] = luminosity;
        imageDataBlock.data[i+2] = luminosity;
    }

    return imageDataBlock;
}

