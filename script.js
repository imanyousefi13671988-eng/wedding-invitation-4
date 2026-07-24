
window.onload = function () {

setTimeout(() => {

document.getElementById("loading").style.display = "none";

},1500);

}

const envelope=document.getElementById("envelope");

const invitation=document.getElementById("invitation");

envelope.onclick=function(){

envelope.style.display="none";

invitation.style.display="block";

}

const weddingDate=new Date("September 20, 2026 20:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/60000);

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);

const song=document.getElementById("song");

const play=document.getElementById("playMusic");

play.onclick=function(){

if(song.paused){

song.play();

play.innerHTML="⏸ توقف موزیک";

}else{

song.pause();

play.innerHTML="🎵 پخش موزیک";

}

}
