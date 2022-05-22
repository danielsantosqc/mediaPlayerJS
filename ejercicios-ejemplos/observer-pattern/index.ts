
interface Observer {
	update: (data: any) => void;
}
interface Subject {
	subscribe: (opserver: Observer) => void;
	unsubscribe: (opserver: Observer) => void;
}

class BitcoinPrice implements Subject {
	
}