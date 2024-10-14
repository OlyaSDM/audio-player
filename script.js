const music = {
    1: {
        singer: "Benson Boone",
        song: 'Beautiful Things',
        img: './assets/images/things.png',
        src:'./assets/audio/Benson-Boone-Beautiful-Things.mp3'
    },
    2: {
      singer: "Billie Eilish",
        song: 'Bad Guy',
        img: './assets/images/bad.png',
        src:'./assets/audio/Billie-Eilish-bad-guy.mp3'
    },
    3: {
      singer: "Ed Sheeran",
        song: 'Shape of You',
        img: './assets/images/shape.png',
        src: './assets/audio/Ed-Sheeran-Shape-of-You.mp3'
    },
     4: {
      singer: "The Kolors",
        song: 'ITALODISCO',
        img: './assets/images/disco.png',
        src: './assets/audio/The-Kolors-Italo-Disco.mp3'
    },
  }
  
  
  function load() {
    const audio = new Audio()
    for (let i = 1; i <= 4; i++){
         audio.src = music[ `${i}`]['src']
    }
  }
  
  load();
  function loadImg() {
    const img = new Image();
    for (let i = 1; i <= 4; i++){
        img.scr =music[ `${i}`]['img']
    }
  }
  loadImg()
  
  const play = document.querySelector('.pause')
  const audio = new Audio()
  let index = 1;
  let isPlay = false;
  const songImg=document.querySelector('.photo')
  function playAudio(current) {
    if (isPlay) {
        play.classList.remove('active')
        isPlay=false
        audio.pause()
        songImg.classList.remove('active')
        
    }
    else {
        audio.src = music[index]['src'];
        audio.currentTime=current
        audio.play();
        play.classList.add('active')
        isPlay = true
        songImg.classList.add('active')
        
    }
  }
  
  
  play.addEventListener('click', () => playAudio(audio.currentTime))
  
  const playNext = document.querySelector('.right')
  const playPrevious = document.querySelector('.left')
  let artistName = document.querySelector('.singer')
  let song = document.querySelector('.song')
  let repeat = document.querySelector('.repeat')
  let photo = document.querySelector('img')
 
  function change(index) {
    audio.scr = music[index]['src']
    artistName.textContent = music[index]['singer']
    song.textContent = music[index]['song']
    photo.src =  music[index]['img']
  }
  
  function nextMusic() {
    if (index ==4) {
        index = 0;
    }
    currentTime = 0;
     ++index;
    change(index);
    isPlay = false;
    playAudio(0);
  }
  
  function prevMusic() {
   if (index == 1) {
        index = 5;
    } 
     --index;
    change(index)
    isPlay = false;
    playAudio(0);
    console.log(music.length)
    console.log(index)
  }
  playNext.addEventListener('click', nextMusic)
  playPrevious.addEventListener('click',prevMusic)
  
  
  
  let progress= document.querySelector('.progress-bar')
  audio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;
    let musicCurrentTime = document.querySelector('.start');
    let musicDuration = document.querySelector('.finish');
     audio.addEventListener('loadeddata', () => {
        let mainDuration = audio.duration;
        let totalMin = Math.floor(mainDuration / 60);
        let totalSec = Math.floor(mainDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`
        }
        musicDuration.textContent = `${totalMin}:${totalSec}`;
  
    })
   
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.textContent = `${currentMin}:${currentSec}`
  
  });
  
  let progressArea = document.querySelector('.progressArea')
    progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; 
    let clickedOffsetX = e.offsetX; 
    let songDuration = audio.duration;
    audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    isPlay=false
    playAudio(audio.currentTime); 
    });
  
  let mixx = document.querySelector('.mix')
  
  let wrapper = document.querySelectorAll('.wrapper')
  mixx.classList.add('active')
  wrapper[0].classList.add('active')
  
  function shuffleActive() {
    repeat.classList.remove('active')
    mixx.classList.add('active')
    wrapper[1].classList.remove('active')
    wrapper[0].classList.add('active')
  }
  function repeatActive() {
    repeat.classList.add('active')
    mixx.classList.remove('active')
    wrapper[1].classList.add('active')
    wrapper[0].classList.remove('active')
  }
  mixx.addEventListener('click', shuffleActive)
  repeat.addEventListener('click',repeatActive)
  
  audio.addEventListener('ended', () => {
    if (mixx.classList.contains('active')) {
      nextMusic()
    }
    else {
        isPlay=false
        playAudio(0)
        console.log('finish')
    }
  })

  
let volumeIcon = document.querySelector('.volume-icon');
let volumeArea = document.querySelector('.volume-area');
let selectedVolumeArea = document.querySelector('.volume-bar');
let selectedWidth = 120;

function setVolume(e) {
    let volumeAreaWidth = volumeArea.clientWidth;
    selectedWidth = e.offsetX;
    audio.volume = selectedWidth / volumeAreaWidth;
    selectedVolumeArea.style.width = `${selectedWidth}px`;
    changeVolumeIcon(selectedWidth);
}

function changeVolumeIcon(selectedWidth) {
    if (selectedWidth > 100) {
        volumeIcon.style.backgroundImage = "url('./assets/icons/loud-volume.png')";
    } else if (50 < selectedWidth && selectedWidth < 100) {
        volumeIcon.style.backgroundImage = "url('./assets/icons/medium-volume.png')";
    } else if (selectedWidth < 40) {
        volumeIcon.style.backgroundImage = "url('./assets/icons/low-volume.png')";
    }
}

volumeArea.addEventListener('click', event => setVolume(event));

let isMute = true;
function muteMode(selectedWidth) {
    if (audio.muted == false) {
        audio.muted = true;
        volumeIcon.style.backgroundImage = "url('./assets/icons/mute.png')";
    } else {
        audio.muted = false;
        changeVolumeIcon(selectedWidth);
    }
}

volumeIcon.addEventListener("click", () => muteMode(selectedWidth));
  
  
  