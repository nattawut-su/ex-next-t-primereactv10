export default interface PersonModel {
  id: number;
  fname: string;
  lname: string;
}

export type PersonFormModel = Omit<PersonModel, 'id'> & { id?: number };
