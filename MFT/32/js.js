function changebackgroundcolor(element,color){
    element.style.backgroundColor = color;
    console.log(element)
}

let mainContainer = document.querySelector('#mainContainer');//سلکت
// mainContainer.addEventListener('click',function(e){
//     this.style.backgroundColor = "purple";
// })
mainContainer.addEventListener('mouseover',function(e){
    this.style.backgroundColor = "brown";
})
// mainContainer.addEventListener('click',function(e){
//     this.style.backgroundColor = 'white';
//     this.innerHTML = '11111111111'
// })
mainContainer.addEventListener('click',function(e){
    this.innerHTML += '11111111111'
})