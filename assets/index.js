import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('.movie');
const button = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer(
	{
		element: video, 
		plugins :[new AutoPlay(), new AutoPause()],
	}
);

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleSound();

// SERVICE WORKER -----------
if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js').catch(error =>{
		console.log(error.message);
	})
}