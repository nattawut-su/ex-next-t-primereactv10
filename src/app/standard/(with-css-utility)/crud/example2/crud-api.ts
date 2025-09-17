import axios from 'axios';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';

const API_URL = 'http://localhost:8080/ws-server-rest-jee10/webapi';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchData(params?: { firstName?: string; lastName?: string }) {
  try {
    const response = await instance.get<EmployeeModel[]>('/employees', {
      params: params || {},
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function saveByAxios(employee: Partial<EmployeeModel>) {
  const response = await instance.post<EmployeeModel>('/employees', employee);
  return response.data;
}

export async function updateByAxios(employee: Partial<EmployeeModel>) {
  const response = await instance.put<EmployeeModel>(`/employees/${employee.id}`, employee);
  return response.data;
}

export async function deleteByAxios(id: number) {
  const response = await instance.delete(`/employees/${id}`);
  return response.data;
}
