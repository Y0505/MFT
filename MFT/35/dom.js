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


function $(selector){
    let classes = selector.split(' ');
    if (classes[classes.length - 1][0] == '#'){
        return document.querySelector(selector);
    }
    return document.querySelectorAll(selector);
}

let output = $('#output');
let inputs = $('input');


$('#inputform').onsubmit = function(e){
    e.preventDefault();
    output.style.backgrounColor = 'green';
}
inputs.forEach(function(input){
    inputs.addEventListener('keyup',function(){
        $('#' + input.name + 'Output').textContent = this.value
    })
});


// ساخت پاراگراف
let newParagraph = document.createElement('p');
newParagraph.innerText = 'New Paragraph';
newParagraph.style.backgroundColore = 'red';
newParagraph.id = 'newParagraph';
output.appendChild(newParagraph);
setTimeout(() => {document.removeChild(newParagraph)}, 5000);
dump(newParagraph)

// ساخت پاراگراف
let newParagraph2 = document.createElement('p');
newParagraph2.innerText = 'New Paragraph2';
newParagraph2.style.backgroundColore = 'blue';
newParagraph2.id = 'newParagraph2';
setTimeout(() => {output.replaceChild(newParagraph2,newParagraph)}, 5000);
dump(newParagraph2)
// // // // // // // //
dump(newParagraph2.parentNode);
dump(newParagraph2.firstChild);
dump(newParagraph2.lastChild);
dump(newParagraph2.childNodes);
dump(newParagraph2.previousSibling);
dump(newParagraph2.nextSibling);
// // // // // // // //
let paraph = document.createElement('p');
// paraph.innerText = 'dddddddd';
let textNode = document.createTextNode('dddddddd');
paraph.appendChild(textNode)
dump(paraph.innerText)
// // // // // // // // // //
dump(newParagraph2.remove())


