import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('.movie');
const button = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer({element: video, plugins :[new AutoPlay()]});

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleSound();
