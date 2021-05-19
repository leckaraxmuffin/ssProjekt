/*** DOM ***/
let domHaus = document.getElementById('haus');
let domWohnung = document.getElementById('wohnung');
let domOrt = document.getElementById('ort');
let domInfos = document.getElementById('infos');

/*** Seiten ***/
let seite = ['./intit.html', './second.html', './third.html', './fourth.html'];
let titel = ['Document', 'Document2', 'Document3', 'Document4'];

function nextPage() {
    let i = titel.indexOf(document.title);
    if(i == 0){
        sessionStorage.clear();
    }
    if (i == 2) {
        if (sessionStorage[0] === undefined || sessionStorage[1] === undefined) {
            window.location.href = './error.html';
        }
    } else {
        if (i == 3) {
            sessionStorage.removeItem(0);
            sessionStorage.removeItem(1);
        }
    }

    if (i == seite.length - 1) {
        window.location.href = seite[0];
    } else {
        window.location.href = seite[i + 1];
        if (i + 1 == 4) {
            console.log(true);
        }
    }
}

function zuhause(zuhause) {
    sessionStorage.setItem('zuhause', zuhause);

    if (zuhause == "Haus") {
        domHaus.style.background = '#634840';
        domWohnung.style.background = '#b28474';
    }
    if (zuhause == "Wohnung") {
        domWohnung.style.background = '#634840';
        domHaus.style.background = '#b28474';
    }
}

function oertchen() {
    let ort = domOrt.options[domOrt.selectedIndex].text;
    if (ort == 'W&auml;hlen Sie eine Stadt aus') {
        return;
    }
    sessionStorage.setItem("ort", ort);
}

function back() {
    window.location.href = './intit.html';
}