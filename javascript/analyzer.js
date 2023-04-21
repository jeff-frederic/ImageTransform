

function get_average_RGB(imgData) {
    let rgb = {r:0, g:0 ,b:0},
        count = 0;

    for(let i=0; i<imgData.length; i+=4){
        count++;
        rgb.r += imgData[i];
        rgb.g += imgData[i+1];
        rgb.b += imgData[i+2];
    }

    // ~~ used to Math.floor()
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;
}