import PersonInterface from '@/lib/api/person/person.interface';
import { createFetchHttp } from '@/lib/api/wrapper/fetch-http.wrapper';
import PersonModel from '@/models/person';

const personApi = createFetchHttp(process.env.NEXT_PUBLIC_API_BASE_URL);

export const personApiClient: PersonInterface = {
  getPersons: async () => {
    const data = await personApi.get<PersonModel[]>(`/person`);
    return data;
  },

  getPersonById: async (id: number) => {
    const data = await personApi.get<PersonModel>(`/person/${id}`);
    return data;
  },

  createPerson: async (input: Omit<PersonModel, 'id'>) => {
    const data = await personApi.post<PersonModel>('/person', input);
    return data;
  },

  updatePerson: async (id: number, input: Partial<Omit<PersonModel, 'id'>>) => {
    const data = await personApi.put<PersonModel>(`/person/${id}`, input);
    return data;
  },

  deletePerson: async (id: number) => {
    await personApi.del(`/person/${id}`);
    return true;
  },
};
