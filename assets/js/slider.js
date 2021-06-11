seta_direita = document.getElementById("seta-direita");
seta_esquerda = document.getElementById("seta-esquerda");
var div = document.getElementsByClassName('slider-item');
container_slider = document.getElementById("container-slider");
var l = 0;

seta_direita.onclick = function moverDireita(){
    // container_slider.style.marginLeft= "-50%";
    for(var i of div)
    {
        if (l==0) {i.style.left ="-95vw";}
        if (l>1) {l=1;}
    }
    l = 1;
};
seta_esquerda.onclick = function moverDireita(){

    for(var i of div)
    {
        if (l==1) {i.style.left ="0px";}
        if (l>1) {l=1;}
    }
    l = 0;
};