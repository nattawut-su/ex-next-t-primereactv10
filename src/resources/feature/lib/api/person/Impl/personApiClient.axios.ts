import PersonInterface from '@/resources/feature/lib/api/person/person.interface';
import { createAxiosHttp } from '@/resources/feature/lib/api/wrapper/axios-http.wrapper';
import PersonModel from '@/resources/feature/models/person';

const personApi = createAxiosHttp(process.env.NEXT_PUBLIC_API_BASE_URL);

export const personApiClient: PersonInterface = {
  getPersons: async () => {
    const resp = await personApi.get<PersonModel[]>('/person');
    return resp.data;
  },

  getPersonsDelay: async () => {
    const resp = await personApi.get<PersonModel[]>('/person/delay');
    return resp.data;
  },

  getPersonById: async (id: number) => {
    const resp = await personApi.get<PersonModel>(`/person/${id}`);
    return resp.data;
  },

  createPerson: async (input: Omit<PersonModel, 'id'>) => {
    const resp = await personApi.post<PersonModel>('/person', input);
    return resp.data;
  },

  updatePerson: async (id: number, input: Partial<Omit<PersonModel, 'id'>>) => {
    const resp = await personApi.put<PersonModel>(`/person/${id}`, input);
    return resp.data;
  },

  deletePerson: async (id: number) => {
    const { status } = await personApi.delete(`/person/${id}`);
    return status >= 200 && status < 300;
  },
};
