let geohex = document.getElementById('path1');
let geotxt = document.getElementById('geo-txt')
let geo = document.getElementById('geo-cards');
let geoShow = false;

let phyhex = document.getElementById('path2');
let phytxt = document.getElementById('phy-txt');
let phy = document.getElementById('phy-cards');
let phyShow = false;


let nathex = document.getElementById('path3');
let nattxt = document.getElementById('nat-txt');
let nat = document.getElementById('nat-cards');
let natShow = false;

let homehex = document.getElementById('home-path');
let hometxt = document.getElementById('home-txt');

function setFill(obj, color) {
    obj.style.fill = color;
}

function homeHover(status) {
    if (status) {
        setFill(homehex, '#F4F1DE');
        homehex.style.cursor = 'pointer';
        hometxt.style.cursor = 'pointer';
    } else {
        setFill(homehex, '#CBD9C9');
    }
}

function geoHover(status) {
    if (status) {
        setFill(geohex, '#F4F1DE');
        geohex.style.cursor = 'pointer';
        geotxt.style.cursor = 'pointer';
    } else {
        setFill(geohex, '#F5BA93');
    }
}

function phyHover(status) {
    if (status) {
        setFill(phyhex, '#F4F1DE');
        phyhex.style.cursor = 'pointer';
        phytxt.style.cursor = 'pointer';
    } else {
        setFill(phyhex, '#EB7086');
    }
}

function natHover(status) {
    if (status) {
        setFill(nathex, '#F4F1DE');
        nathex.style.cursor = 'pointer';
        nattxt.style.cursor = 'pointer';
    } else {
        setFill(nathex, '#77CAD0');
    }
}


function setDisplay(obj, display) {
    obj.style.display = display;
}

function homeClick() {
    window.location.href = 'index.html';
}
homehex.onclick = homeClick;
hometxt.onclick = homeClick;


function geoClick() {
    if (geoShow) {
        geo.style.display = 'none';
        geoShow = false;
    } else {
        hideAll();
        setFill(geohex, '#F4F1DE');
        geo.style.display = 'flex';
        geoShow = true;
    }
}
geohex.onclick = geoClick;
geotxt.onclick = geoClick;

function phyClick() {
    if (phyShow) {
        phy.style.display = 'none';
        phyShow = false;
    } else {
        hideAll();
        setFill(phyhex, '#F4F1DE');
        phy.style.display = 'flex';
        phyShow = true;
    }
}
phyhex.onclick = phyClick;
phytxt.onclick = phyClick;

function natClick() {
    if (natShow) {
        nat.style.display = 'none';
        natShow = false;
    } else {
        hideAll();
        setFill(nathex, '#F4F1DE');
        nat.style.display = 'flex';
        natShow = true;
    }
}
nathex.onclick = natClick;
nattxt.onclick = natClick;

function resetHexes() {
    setFill(geohex, '#F5BA93');
    setFill(phyhex, '#EB7086');
    setFill(nathex, '#77CAD0');
}

function hideAll() {
    geo.style.display = 'none';
    geoShow = false;
    phy.style.display = 'none';
    phyShow = false;
    nat.style.display = 'none';
    natShow = false;
}
