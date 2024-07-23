process.stdin.on('data',(data)=>{

    let number = parseInt(data);
    console.log(number*100/20);
    process.exit();
});