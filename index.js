
const video = document.querySelector('.movie');
const button = document.querySelector('#playButton');

function MediaPlayer (config){
  this.media = config.element
}

MediaPlayer.prototype.play = function(){
  this.media.play();
}

const player = new MediaPlayer({element: video});

button.onclick = () => player.play();
// video.play();
