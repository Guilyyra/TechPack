seta = document.getElementById("seta");



function MoverTela(){
    window.scroll(0, vh(100) - 100);
}

// Trnasforma px em vh
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

