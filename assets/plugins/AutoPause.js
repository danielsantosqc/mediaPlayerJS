class AutoPause{
	constructor(){
		this.threshold = 0.3;
		this.handleIntersection = this.handleIntersection.bind(this)
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
	}
	run(player){
		this.player = player;

		// Intersection Observer---------------
		// IntersectionObserver(recibe como primer elemento el manipulador, 
				// como segundo elemento la intersecion de la pantalla, el umbral
				//  para el uncionamiento del primer elemento)
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: this.threshold,
		})

		observer.observe(this.player.media)

		// Visibility Change-----------------
		document.addEventListener("visibilitychange", this.handleVisibilityChange)
	}

	handleIntersection(entries){
		const entry = entries[0];
		// console.log(entry)
		const isVisible = entry.intersectionRatio >= this.threshold;

		if (isVisible){
			this.player.play();
			// console.log("el video volvio a reproducirse")
		}else {
				this.player.pause();
			// console.log("el video se pauso")
		}
	}

	handleVisibilityChange(){
		const isVisible = document.visibilityState ==="visible"
		if(isVisible){
			this.player.play();
		}else {
			this.player.pause();
		}
	}
}

export default AutoPause;