// let result = document.querySelectorAll('.box:not(.box:nth-child(3))')
// let result = document.getElementsByClassName('.box:not(.box:nth-child(3))')
// let result = document.getElementById('.box:not(.box:nth-child(3))')
// let result = document.getElementsByTagName('.box:not(.box:nth-child(3))')

// let box = document.querySelector('#box');
// // box.textContent = '<em>sss</em>';
// console.log(box.innerHTML);

// let linkChanger = document.querySelector('#linkChanger');
// linkChanger.addEventListener('click',function(event){
//     let anchor = document.querySelector('a');
//     anchor.href = "https://zarebin.ir";
// })

// linkChanger.onclick = function(event){
//     let anchor = document.querySelector('a');
//     anchor.href = "https://zarebin.ir";
// }
// console.log(box.innerHTML);


// document.querySelector('body').innerHTML = 'slm '.repeat(5);


// let data = `
// firstName,lastName,age
// milad,takjo,29
// ghazal,jalili,20
// `;

// let data = `milad,takjo,29`;
// let person = data.split(',');
// console.log(person)

// let pureText = 5;
// pureText = pureText.toString()
// console.log(pureText.padStart(3,'0'));

// let box = document.querySelector('.box');
// box.innerHTML = box.innerHTML.replace('{name}','milad');
// box.innerHTML = box.innerHTML.replaceAll('{name}','milad');
// box.innerHTML = box.innerHTML.trim().replaceAll(/^\{.*\}/g,function(value,key){
//     if (value == '{name}'){
//         return 'yaser';
//     }
// });

let inputform = document.querySelector('#inputform');
let inputname = document.querySelector('input[name=inputname]');
let output = document.querySelector('#output');

inputform.onsubmit = function(e){
    e.preventDefault();
    output.style.backgrounColor = 'green';
}
