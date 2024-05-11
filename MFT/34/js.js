// setTimeout(function(){
//     document.querySelector('body').innerHTML='Hey buddy'
// }, 2000);


// let body = {
//     innerHTML:'<div>aaaa</div>'
// }

//======================

// let testInterval = setInterval(function(){
//     document.querySelector('body').innerHTML+='Hey buddy'
// }, 2000)

// console.log(testInterval) //ایدی دوره تکرار اینترور (2)
// setTimeout(function(){
//     clearInterval(testInterval)
// },15000)
//======================

// let texts = ['الایا ایهاالساقی','ادرکاسا ونا ولها','که عشق اسان نمود اول','ولی افتاد مشکل ها'];
// let number = 0
// let testInterval = setInterval(function(){
//     document.querySelector('p').innerHTML = texts[number]
//     number++;
//     if(number==4){
//         number=0;
//     }
// }, 2000)
//======================

// let texts = ['الایا ایهاالساقی','ادرکاسا ونا ولها','که عشق اسان نمود اول','ولی افتاد مشکل ها'];
// let counter = 0
// setInterval(function(){
//     let bannerElement = document.querySelector('#banner');
//     bannerElement.innerHTML = texts[counter++]
//     if (counter > texts.length-1){
//         counter=0
//     }
// }, 2000)
//======================

// let texts = ['الایا ایهاالساقی','ادرکاسا ونا ولها','که عشق اسان نمود اول','ولی افتاد مشکل ها'];
// let counter = 0
// function Slider(){
//     document.querySelector('p').innerHTML = texts[counter++]
//     if (counter > texts.length-1){
//         counter=0
//     }
// }

// setInterval(Slider, 2000)
//======================
// function Slider(){
//     // let id = 1
//     // Statements

//     return id
// }

// function clearSlider (id,timeout){
//     setTimerout(function(){
//         document.querySelector('#Slider').innerHTML = '';
//     },timeout)
// }

// let SliderId = Slider();

// clearSlider(Slider(),5000);
//==========ناشناس============
// let Slider = function(){

// }
// Slider()
//========ارو فانکشن=== aro ============
// let Slider = (text) => console.log(1);
//=======================================
// function sleepe(callback,timeout){
//     setTimeout(
//         callback,
//         timeout
//     )
// }

// sleepe(()=>console.log(1),9000)
//===================================
let xt = 100
let xb = 100
let xr = 100
let xl = 100

window.addEventListener('keydown',function(e){
    // this.document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    if(e.key == 'w'){
        tank.style.top = 100-xt+"px"
        xt++;
    } else if (e.key == 's'){
        tank.style.bottom = 100+xb+"px"
        xb--;
    } else if (e.key == 'a'){
        tank.style.right = 100-xr+"px"
        xr++;
    } else if (e.key == 'd'){
        tank.style.left = 100+xl+"px"
        xl++;
    }
});