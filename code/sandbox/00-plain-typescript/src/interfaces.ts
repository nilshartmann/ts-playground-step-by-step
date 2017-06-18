function interfaces() {

	interface Person {
		name: string
	}

	interface Programmer extends Person {
		language: string
	}

	const susi:Programmer = { name: 'Susi', language: 'TypeScript'};

	interface Auditable { audit: () => void }
	type Loggable = { log: string };

	interface X extends Auditable, Loggable {

	}


	class Logger implements Loggable, Auditable {
		log: string
		audit() { }
	}

}
