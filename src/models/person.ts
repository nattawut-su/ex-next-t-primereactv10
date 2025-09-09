export default interface PersonModel {
  id: number;
  fname: string;
  lname: string;
}

export type PersonFormModel = Omit<PersonModel, 'id'> & { id?: number };

export type PersonReqModel = {
  firstName: string;
  lastName: string;
};

export type PersonRespModel = {
  fullName: string;
};
