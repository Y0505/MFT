let crcle = document.querySelector('.crcle');
let showNumber = document.querySelector('.showNumber');
let bottom = document.querySelector('.bottom');
let aboueText = document.querySelector('.aboueText');
let BoosterText = document.querySelector('.BoosterText');

let showNumbercount = document.querySelector('.showNumbercount');
let showEnrgycount = document.querySelector('.showEnrgycount');
let enrgy = 2000;
let total = '';
let deg = 0;

crcle.addEventListener('click',function(){
    this.style.backgroundColor = "blue";
    total++;
    enrgy -=3;
    if (enrgy > 3){
        showNumbercount.innerHTML = total
        showEnrgycount.innerHTML = enrgy
        deg+=10;
        this.style.rotate = deg+"deg";
    }else{
        alert('Energy not enough');
    }
})

let testInterval = setInterval(function(){
    if (enrgy<2000){
        deg-=1;
        crcle.style.rotate = deg+"deg";
        enrgy++;
        showEnrgycount.innerHTML = enrgy
    }
}, 1000)

function aboue(){
    crcle.style.display = "none";
    showNumber.style.display = "none";
    bottom.style.display = "none";
    aboueText.style.display = "flex";
    BoosterText.style.display = "none";
}
function Game(){
    crcle.style.display = "flex";
    showNumber.style.display = "flex";
    bottom.style.display = "flex";
    aboueText.style.display = "none";
    BoosterText.style.display = "none";

}
function Booster(){
    crcle.style.display = "none";
    showNumber.style.display = "none";
    bottom.style.display = "none";
    aboueText.style.display = "none";
    BoosterText.style.display = "flex";
}
