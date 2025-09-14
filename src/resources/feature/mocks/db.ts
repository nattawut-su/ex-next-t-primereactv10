import PersonModel from '@/resources/feature/models/person';

export const db = {
  personData: [
    { id: 1, fname: 'Mock', lname: 'example' },
    { id: 2, fname: 'Example', lname: 'Data' },
  ] as PersonModel[],
};

let seqPerson = 3;
export function nextIdPerson() {
  return seqPerson++;
}
