function moretypes() {
  type Person = { name: string; }

  type Musician = Person & {
	  instrument: string;
  }

  const klaus: Person = { name: 'Klaus' };
  const hans: Musician = { name: 'Hans',
                           instrument: 'Guitar'
						};

type Nameable = { name: string };
type Identifiable = { id: string };

function merge(n: Nameable, i: Identifiable): Nameable & Identifiable {
	return {
		name: n.name,
		id: i.id
	};
}


}
