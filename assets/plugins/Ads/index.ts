import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;

  constructor(){
    this.ads = Ads.getInstant();
    this.adsContainer = document.createElement('div');
    // this.adsContainer.style.position = 'absolute';
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }
  
  run(playerr: MediaPlayer){
     this.player = playerr;
     this.player.container.appendChild(this.adsContainer);
     this.media = this.player.media;
     this.media.addEventListener('timeupdate', this.handleTimeUpdate);
  }

  private handleTimeUpdate(){
    const currentTime = Math.floor(this.media.currentTime);
    if(currentTime % 10 === 0){
      this.renderAd();
    }
  }

  private renderAd(){
    if(this.currentAd){
      return;
    }
    const ad = this.ads.getAd();
    this.currentAd = ad;
    console.log(this.currentAd);
    this.adsContainer.innerHTML = `
    <div class="ads">
      <a class="ads__link" href="${this.currentAd.url}" target="_blank" >
        <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
      </a>
    </div>
    `;

    setTimeout(() => {
      this.currentAd = null;
      this.adsContainer.innerHTML = '';
    }, 5000);

  }
}

export default AdsPlugin;