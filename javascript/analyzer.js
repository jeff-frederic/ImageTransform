
/**
 * Given a image data block from HTML5 canvas, we
 * are able to return the average RGB value within
 * that data block. This means the average color of
 * a block of pixels all ommitting different colors.
 */
export function getAverageRGB(imageDataBlock) {
    let rgb = {r:0, g:0 ,b:0},
        count = 0;

    for(let i=0; i<imageDataBlock.data.length; i+=4){
        count++;
        rgb.r += imageDataBlock.data[i];
        rgb.g += imageDataBlock.data[i+1];
        rgb.b += imageDataBlock.data[i+2];
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


/** 
 * Function that inverts the RGB values 
 * in a given image date block. 
*/
export function invert(imageDataBlock){
    for(let i=0; i<imageDataBlock.data.length; i+=4){
        imageDataBlock.data[i] = 255 - imageDataBlock.data[i];
        imageDataBlock.data[i+1] = 255 - imageDataBlock.data[i+1];
        imageDataBlock.data[i+2] = 255 - imageDataBlock.data[i+2];
    }

    return imageDataBlock;
}



export function solarize(imageDataBlock){
    for(let i=0; i<imageDataBlock.data.length; i+=4){
        if(imageDataBlock.data[i] < 128){
            imageDataBlock.data[i] = 255 - imageDataBlock.data[i];
        }
        if(imageDataBlock.data[i+1] < 128){
            imageDataBlock.data[i+1] = 255 - imageDataBlock.data[i+1];
        }
        if(imageDataBlock.data[i+2] < 128){
            imageDataBlock.data[i+2] = 255 - imageDataBlock.data[i+2];
        }
    }

    return imageDataBlock;
}


/**
 * Taking in a greyscale value from an RGB (R+G+B)/3 and finding
 * its proper position mapped to another scale of some sort.
 * Function return's the index into which the greyscale value
 * belongs to.
 */
export function mapRGBtoScale(rgbGrey, minScaleNum, maxScaleNum){
    return minScaleNum + (maxScaleNum - minScaleNum) * (rgbGrey/255);
}