var hexes = [];
for (var i = 0; i < 16; i++) {
    hexes.push(document.getElementById('hex' + i));
}

var mouseOnHex = true;
var hexStep = 0; // 0=none, 6=everything done


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hexMouseStatus(status) {
    mouseOnHex = status;
    if (status) {
        hexAppear();
    } else {
        hexDisappear();
    }
}

async function hexAppear() {
    while (hexStep < 7 && mouseOnHex) {
        console.log('hexAppear | Stage: ' + hexStep);
        hexStep++;
        hexStage(hexStep, true);
        await sleep(150);
        if(!mouseOnHex) {
            hexDisappear();
        }
    }
}

async function hexDisappear() {
    while(hexStep > 0 && !mouseOnHex) {
        console.log('hexDisappear | Stage: ' + hexStep);
        hexStage(hexStep, false);
        hexStep--;
        await sleep(150);
        if (mouseOnHex) {
            hexAppear();
        }
    }
}


function hexStage(stage, appear) {
    var dsp;
    if (appear) {
        dsp = 'block';
    } else {
        dsp = 'none';
    }
    switch (stage) {
        case 1:
            hexes[2].style.display = dsp;
            break;
        case 2:
            hexes[3].style.display = dsp;
            hexes[5].style.display = dsp;
            break;
        case 3:
            hexes[0].style.display = dsp;
            hexes[1].style.display = dsp;
            hexes[7].style.display = dsp;
            hexes[11].style.display = dsp;
            break;
        case 4:
            hexes[4].style.display = dsp;
            hexes[8].style.display = dsp;
            hexes[13].style.display = dsp;
            break;
        case 5:
            hexes[9].style.display = dsp;
            hexes[10].style.display = dsp;
            hexes[14].style.display = dsp;
            break;
        case 6:
            hexes[6].style.display = dsp;
            hexes[12].style.display = dsp;
            hexes[15].style.display = dsp;
            break;
    }
}
