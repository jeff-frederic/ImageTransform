

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


