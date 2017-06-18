function interfaces() {

	// Basic interface

	interface Person {
		name: string
	}

	interface Programmer extends Person {
		language: string
	}

	const susi:Programmer = { name: 'Susi', language: 'TypeScript'};

	// Interface vs Type
	interface Auditable { audit: () => void }
	type Loggable = { log: string };

	interface IAuditableAndLoggable extends Auditable, Loggable {

	}

	interface ConfigurableLoggable extends Loggable {
		level: string;
	}

	type TAuditableAndLoggable = Auditable & Loggable;


	class Logger implements Loggable, Auditable {
		log: string
		audit() { }
	}

	class ExtendedLogger implements ConfigurableLoggable {
		log: string;
		level: string;
		audit() {}
	}

}
