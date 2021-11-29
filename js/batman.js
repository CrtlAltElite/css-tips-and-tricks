const playlist=()=>{

    var audio = new Audio('../audio/rain.mp3');
    var audio2 = new Audio('../audio/bats.mp3');
    var audio3 = new Audio('../audio/glass.mp3');
    var audio4 = new Audio('../audio/theme.mp3');
    var audio5 = new Audio('../audio/typing.mp3')
    audio.play();
    audio.currentTime=4;
    id1=pauser(audio,7)
    audio2.play();
    id2=pauser(audio2,7)
    index=1;
    setTimeout(()=>audio3.play(),5000)
    setTimeout(()=>audio4.play(),5500)
    setTimeout(()=>clearInterval(id1),10000)
    setTimeout(()=>clearInterval(id2),10000)
    setTimeout(()=>audio5.play(),15000)
};


const pauser=(audio,endTime)=>{
    const id=setInterval(function(){
    if(audio.currentTime > endTime) {
        audio.pause()
    }
    console.log(audio.src,audio.currentTime);
}, 1000);
return id;
}

document.addEventListener('click',()=>playlist(),{once:true})