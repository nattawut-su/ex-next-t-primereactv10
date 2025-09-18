export interface PersonReqModel {
  firstName: string;
  lastName: string;
  title: string;
  sex: string;
  contact: 'M' | 'P';
  email: string;
  phone: string;
}

export interface PersonRespModel {
  fullName: string;
}

export interface TitleOption {
  label: string;
  value: string;
}

export interface SexOption {
  label: string;
  value: string;
}

export interface ContactOption {
  label: string;
  value: string;
}
