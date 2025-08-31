import PersonModel from '@/models/person';

let seq = 3;

export const db = {
  personData: [
    { id: 1, fname: 'Mock', lname: 'example' },
    { id: 2, fname: 'Example', lname: 'Data' },
  ] as PersonModel[],
};

export function nextId() {
  return seq++;
}
