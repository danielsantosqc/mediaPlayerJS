import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('.movie');
const button = document.querySelector('#playButton');

const player = new MediaPlayer({element: video});

button.onclick = () => player.togglePlay();
