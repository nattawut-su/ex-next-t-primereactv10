import PersonModel from '@/models/person';

let seq = 2;

export const db = {
  personData: [{ id: 1, fname: 'Mock', lname: 'example' }] as PersonModel[],
};

export function nextId() {
  return seq++;
}
