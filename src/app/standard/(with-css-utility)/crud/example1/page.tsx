'use client';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';
import { Mode } from '@/resources/standard/models/modeBase';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';

export default function PageCrudEx1() {
  let emptyEmployee: Partial<EmployeeModel> = {
    firstName: '',
    lastName: '',
  };

  const [mode, setMode] = useState<Mode>('V');
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [employee, setEmployee] = useState<Partial<EmployeeModel>>(emptyEmployee);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8080/ws-server-rest-jee10/webapi/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const axiosData = async () => {
    try {
      const response = await axios.get<EmployeeModel[]>('http://localhost:8080/ws-server-rest-jee10/webapi/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    axiosData();
    // fetchData();
  }, []);

  function actionBodyComponents(rowData: EmployeeModel) {
    return (
      <>
        <Button
          label="Edit"
          onClick={() => {
            setMode('U');
            setEmployee(rowData);
          }}
        />
        <Button
          label="Delete"
          className="p-button-danger ml-2"
          onClick={() => {
            onRemove(rowData);
          }}
        />
      </>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'U' && employee.id) {
      await updateByAxios();
    } else if (mode === 'I') {
      await saveByAxios();
    }
    axiosData();
    setMode('V');
  };

  const onRemove = async (data: EmployeeModel) => {
    if (data.id) {
      await deleteByAxios(data.id);
    }
    axiosData();
  };

  async function saveByAxios() {
    const response = await axios.post<EmployeeModel>('http://localhost:8080/ws-server-rest-jee10/webapi/employees', employee);
    return response.data;
  }

  async function updateByAxios() {
    const response = await axios.put<EmployeeModel>(`http://localhost:8080/ws-server-rest-jee10/webapi/employees/${employee.id}`, employee);
    return response.data;
  }

  async function deleteByAxios(id: number) {
    const response = await axios.delete(`http://localhost:8080/ws-server-rest-jee10/webapi/employees/${id}`);
    return response.data;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>CRUD Example 1</h3>
      {mode === 'V' && (
        <div className="formgrid grid ui-fluid">
          <div className="col-12">
            <Button
              label="Insert"
              icon="pi pi-plus"
              onClick={() => {
                setMode('I');
                setEmployee(emptyEmployee);
              }}
            />
          </div>
          <div className="col-12">
            <DataTable value={employees}>
              <Column
                header="First Name"
                field="firstName"
              />
              <Column
                header="Last Name"
                field="lastName"
              />
              <Column
                header="actions"
                body={actionBodyComponents}
              />
            </DataTable>
          </div>
        </div>
      )}

      {(mode === 'I' || mode === 'U') && (
        <>
          <div className="formgrid grid ui-fluid">
            <div className="col-12">
              <h4>{mode === 'I' ? 'Insert Employee' : 'Update Employee'}</h4>
            </div>
          </div>
          <form
            className="formgrid grid ui-fluid"
            onSubmit={handleSubmit}
          >
            <div className="col-12 field grid">
              <label
                htmlFor="firstname"
                className="col-12  md:col-1"
              >
                Firstname
              </label>
              <div className="col-12 md:col-11">
                <InputText
                  id="firstname"
                  name="firstName"
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 field grid">
              <label
                htmlFor="lastname"
                className="col-12 md:col-1"
              >
                Lastname
              </label>
              <div className="col-12 md:col-11">
                <InputText
                  id="lastname"
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 field grid">
              <Button
                label="Save"
                className="ml-2"
                type="submit"
              />
              <Button
                label="baack"
                className="p-button-secondary ml-2"
                onClick={() => setMode('V')}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
