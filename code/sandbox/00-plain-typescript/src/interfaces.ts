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

	// Interface extends both a Type and an Interface
	interface IAuditableAndLoggable extends Auditable, Loggable {
	}

	// Interface extends a Type
	interface ConfigurableLoggable extends Loggable {
		level: string;
	}

    // Type combines Interface and Type
	type TAuditableAndLoggable = Auditable & Loggable;

	// Class implements both an Interface and a Type
	class Logger implements Loggable, Auditable {
		log: string
		audit() { }
	}


	// Class implements a Type (that "consists" of Interface and Type itself)
	class ExtendedLogger implements TAuditableAndLoggable {
		log: string;
		level: string;
		audit() {}
	}

}
