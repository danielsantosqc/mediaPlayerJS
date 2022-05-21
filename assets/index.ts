import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('.movie');
const button: HTMLButtonElement = document.querySelector('#playButton');
const muteButton: HTMLButtonElement = document.querySelector('#muteButton');

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