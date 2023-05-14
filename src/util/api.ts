export interface APIPerson {
  name: string;
  year: string;
  dev: boolean;
  des: boolean;
  pm: boolean;
  core: boolean;
  mentor: boolean;
  major: string;
  minor: string;
  birthday: string;
  home: string;
  quote: string;
  'favorite thing 1': string;
  'favorite thing 2': string;
  'favorite thing 3': string;
  'favorite dartmouth tradition': string;
  'fun fact': string;
  picture: string;
}

// todo: tests
export function getPersonPosition(person: APIPerson): string {
  const roleMap = {
    core: 'Core Member',
    dev: 'Developer',
    des: 'Designer',
    pm: 'Project Manager',
  };
  const roles = Object.entries(roleMap).reduce<string[]>(
    (acc, [role, value]) =>
      (person as Record<string, any>)[role] === true
        ? ([...acc, value] as string[])
        : [...acc],
    []
  );
  return `${roles.join(', ')}${
    person.mentor && roles.length > 1 ? ', and ' : ' '
  }${person.mentor ? 'Mentor' : ''}`;
}

export function getShortYear({ year }: APIPerson): string {
  if (/\d{4}/.test(year)) {
    return `'${year.substring(2)}`;
  }
  return year;
}
