let y = 0;
let x = 0;
let level = 1;
let home = 0;
let speed = 1;

window.addEventListener('keydown',function(e){

    if (home < 15 ){
        home ++;
        if(e.key == 's'){
            y+=speed;
            tank.style.top = y+"px";
        } else if (e.key == 'w'){
            y-=speed;
            tank.style.top = y+"px";
        } else if (e.key == 'a'){
            x-=speed;
            tank.style.left = x+"px";
        } else if (e.key == 'd'){
            x+=speed;
            tank.style.left = x+"px";
        }
    }else{
        level += 1;
        if (level <= 3){
            document.getElementById("tankimg").src = 'img'+level+'.png';
        }
        speed += 5;
        home -= speed;

        this.alert('🎉 تبریک❗️ سطح شما به سطح '+level+' ارتقا یافت🎉')
    }
});