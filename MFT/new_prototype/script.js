// const Door = {
//     color:'',
//     made_in:'',
//     is_lock:false
// }
// const Wheels = {
//     color:'',
//     made_in:'',
//     is_safy:true
// }
// const car = {
    // door:{
    //     __proto__:Door
    // },
    // wheels:{
    //     __proto__:Wheels
    // }
// }


// let bmw = Object.create(car)
// console.log(bmw)
// let bmw = Object.create(car.door)
// console.log(bmw)


function callAjax(){
    const ajax = new XMLHttpRequest();
    ajax.onload=function(){
        let response = JSON.parse(this.responseText);
        response.products.forEach(function(item){
            console.log(item.title);
        })
        console.log('AJAX complted');
    }
    ajax.open('GET','api.json');
    ajax.send();
    console.log(ajax);
}


