console.log("welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')
let songItem = Array.from(document.getElementsByClassName('songItem'));




let song =[
    {songName : 'dil sml ja jra' , filePath:"song\7.mp3" },
    {songName : 'slam e ishq' , filePath: "song\7.mp3" },
    {songName : 'conversation song' , filePath:"song\6.mp3"},
    {songName : 'bigmasongn ' , filePath:"song\8.mp3" },
    {songName : 'kesari song ' , filePath:"song\5.mp3" },
    {songName : 'akhir a hi gya' , filePath:"song\4.mp3"},

]

songItem.forEach((element, i)=>{
    console.log(element, i);
    

    

})

masterPlay.addEventListener('click' ,()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add("fa-circle-pause");
      } else{
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove("fa-circle-pause")
         }

        })
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate')

    progress = parseInt((audioElement.currentTime /audioElement.duration)*100);
    console.log(progress)
    progressBar.value = progress;

})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;

})





const makeAllplays =()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) =>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName("songItemplay")).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause')
        masterPlay.classList.remove("fa-circle-play")


    })
})
document.getElementById('next').addEventListener(`click`,()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");


})

document.getElementById('previous').addEventListener(`click`,()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");


})