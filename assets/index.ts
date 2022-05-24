import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('.movie');
const button: HTMLButtonElement = document.querySelector('#playButton');
const muteButton: HTMLButtonElement = document.querySelector('#muteButton');

const player = new MediaPlayer(
	{
		element: video, 
		plugins :[new AutoPlay(), new AutoPause(), new Ads()],
	}
);

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleSound();

document.addEventListener('keyup',(event)=>{
	switch(event.key){
		case "p":
			player.togglePlay();
			console.log("letra", event.key);
			break;
		case "P":
			player.togglePlay();
			console.log("letra", event.key);
			break;
		case 'm':
			player.toggleSound();
			console.log("letra m");
			break;
		case 'M':
			player.toggleSound();
			console.log("letra m");
			break;
	}
});

// ---------------------SERVICE WORKER -----------
// if('serviceWorker' in navigator){
// 	navigator.serviceWorker.register('/sw.js').catch(error =>{
// 		console.log(error.message);
// 	})
// }