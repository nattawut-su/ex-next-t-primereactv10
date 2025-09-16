import axios from 'axios';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';

const API_URL = 'http://localhost:8080/ws-server-rest-jee10/webapi/employees';

export async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function saveByAxios(employee: Partial<EmployeeModel>) {
  const response = await axios.post<EmployeeModel>(API_URL, employee);
  return response.data;
}

export async function updateByAxios(employee: Partial<EmployeeModel>) {
  const response = await axios.put<EmployeeModel>(`${API_URL}/${employee.id}`, employee);
  return response.data;
}

export async function deleteByAxios(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
