import PersonModel from '@/resources/feature/models/person';

export default interface PersonInterface {
  getPersons(): Promise<PersonModel[]>;
  getPersonsDelay(): Promise<PersonModel[]>;
  getPersonById(id: number): Promise<PersonModel>;
  createPerson(input: Omit<PersonModel, 'id'>): Promise<PersonModel>;
  updatePerson(id: number, input: Partial<Omit<PersonModel, 'id'>>): Promise<PersonModel>;
  deletePerson(id: number): Promise<boolean>;
}
