const playlist=()=>{

    var audio = new Audio('./../audio/rain.mp3');
    var audio2 = new Audio('./../audio/bats.mp3');
    var audio3 = new Audio('./../audio/glass.mp3');
    var audio4 = new Audio('./../audio/theme.mp3');
    var audio5 = new Audio('./../audio/typing.mp3')
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

const startAnimation=()=>{
    console.log('clicked')
document.getElementsByTagName('body')[0].innerHTML=`
<nav class="navbar navbar-expand-sm navbar-dark start-hidden">
    <div class="container-fluid">
        <a class="navbar-brand"  href="#">I Am Batman</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarID">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                
            </div>
        </div>
    </div>
</nav>
    <div class="hero-image start-hidden">
      <div class="hero-text start-hidden">
        <h1>Bruce Wayne</h1>
        <p class="type-writer">I am vengeance, I am the night, I am Batman!</p>
        <img id="bat1" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat2" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat3" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat4" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat5" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat6" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat7" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat8" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat9" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat10" class="bat start-hidden" src="images/flyingbat.gif">

        <img id="bat11" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat12" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat13" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat14" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat15" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat16" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat17" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat18" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat19" class="bat start-hidden" src="images/flyingbat.gif">
        <img id="bat20" class="bat start-hidden" src="images/flyingbat.gif">
      </div>
    </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
`;
    playlist();
}

document.getElementById('start-btn').addEventListener('click',()=>{startAnimation(); console.log('clicking')},{once:true})

newDiv=document.createElement('div');
newDiv.innerText="Enter the Batcave";
newDiv.style.color='#FDE311';
newDiv.style.position="absolute";
newDiv.style.top="25%";
newDiv.style.left="55%";
newDiv.style.backgroundColor='black';
newDiv.style.fontFamily='batman';
newDiv.style.fontSize='2.5em';

document.getElementsByClassName('slowmo-img')[0].onmouseover=(()=>setTimeout(()=>document.getElementsByClassName('slowmo-img')[0].appendChild(newDiv),3000))
