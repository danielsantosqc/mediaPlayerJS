class Singleton{
	private static instance: Singleton;
  
	private constructor(){
		//init
	}

  //siendo un metodo estatico podemos llamarlo asi (Singleton.getInstance), sin la
  //necesidad de instancial la classe 
	static getInstance(){
    if (!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
	}
}

export default  Singleton;