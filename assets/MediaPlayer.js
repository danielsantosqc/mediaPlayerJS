function MediaPlayer(config) {
  this.media = config.element;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function (){
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};
MediaPlayer.prototype.toggleSound = function(){
  // if(this.media.muted){
  //   this.unmute()
  // }else {
  //   this.mute()
  // }
  this.media.muted ? this.unmute() : this.mute();
};

export default MediaPlayer;