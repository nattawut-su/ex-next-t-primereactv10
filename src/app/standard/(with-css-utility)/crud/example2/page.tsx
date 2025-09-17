'use client';
import { EmployeeModel, getAge } from '@/resources/standard/models/crud.employee';
import { Mode } from '@/resources/standard/models/modeBase';

import { CrudModeView } from './crud-view';
import { CrudModeEdit } from './crud-save';
import { useEffect, useState } from 'react';
import { fetchData, saveByAxios, updateByAxios, deleteByAxios } from './crud-api';

export default function PageCrudEx2() {
  let emptyEmployee: Partial<EmployeeModel> = {
    firstName: '',
    lastName: '',
    age: '',
  };

  const [mode, setMode] = useState<Mode>(Mode.VIEW);
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [employee, setEmployee] = useState<Partial<EmployeeModel>>(emptyEmployee);
  const [search, setSearch] = useState({ firstName: '', lastName: '' });

  const axiosData = async (params?: { firstName?: string; lastName?: string }) => {
    await fetchData(params).then((data) => {
      if (data) {
        console.log(data);
        setEmployees(data);
      }
    });
  };

  useEffect(() => {
    axiosData();
  }, []);

  const onAddEmployee = () => {
    setMode(Mode.INSERT);
    setEmployee(emptyEmployee);
  };

  const onUpdateEmployee = (rowData: EmployeeModel) => {
    setMode(Mode.EDIT);
    setEmployee(rowData);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(employee);

    if (mode === Mode.EDIT && employee.id) {
      await updateByAxios(employee);
    } else if (mode === Mode.INSERT) {
      await saveByAxios(employee);
    }
    axiosData();
    setMode(Mode.VIEW);
  };

  const onRemove = async (data: EmployeeModel) => {
    if (data.id) {
      await deleteByAxios(data.id);
      axiosData();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'birthDate') {
        const { label } = getAge({ ...updated } as EmployeeModel);
        updated.age = label;
      }
      return updated;
    });
  };

  // handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  // handle search button
  const handleSearch = () => {
    axiosData({ firstName: search.firstName, lastName: search.lastName });
  };

  return (
    <div>
      <h3>CRUD Example 2</h3>
      {mode === Mode.VIEW && (
        <div className="formgrid grid ui-fluid">
          <CrudModeView
            employees={employees}
            onInsert={onAddEmployee}
            onEdit={onUpdateEmployee}
            onRemove={onRemove}
            search={search}
            onSearchChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </div>
      )}
      {(mode === Mode.INSERT || mode === Mode.EDIT) && (
        <CrudModeEdit
          mode={mode === Mode.INSERT ? 'I' : 'U'}
          employee={employee}
          onChange={handleChange}
          onSubmit={onSubmit}
          onBack={() => setMode(Mode.VIEW)}
        />
      )}
    </div>
  );
}
