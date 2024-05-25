const numbers = document.querySelectorAll('.numbers');


document.addEventListener('keydown',function(e){
    this.alert(e.key)

    // if (home < 15 ){
    //     home ++;
    //     if(e.key == 's'){
    //         y+=speed;
    //         tank.style.top = y+"px";
    //     } else if (e.key == 'w'){
    //         y-=speed;
    //         tank.style.top = y+"px";
    //     } else if (e.key == 'a'){
    //         x-=speed;
    //         tank.style.left = x+"px";
    //     } else if (e.key == 'd'){
    //         x+=speed;
    //         tank.style.left = x+"px";
    //     }
    // }else{
    //     level += 1;
    //     if (level <= 3){
    //         document.getElementById("tankimg").src = 'img'+level+'.png';
    //     }
    //     speed += 5;
    //     home -= speed;

    //     this.alert('🎉 تبریک❗️ سطح شما به سطح '+level+' ارتقا یافت🎉')
    // }
});