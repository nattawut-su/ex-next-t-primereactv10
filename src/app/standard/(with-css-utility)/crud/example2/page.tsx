'use client';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';
import { Mode } from '@/resources/standard/models/modeBase';

import { EmployeeTableView } from './EmployeeTableView';
import { EmployeeForm } from './EmployeeForm';
import { useEffect, useState } from 'react';
import { fetchData, saveByAxios, updateByAxios, deleteByAxios } from './employeeApi';

export default function PageCrudEx2() {
  let emptyEmployee: Partial<EmployeeModel> = {
    firstName: '',
    lastName: '',
  };

  const [mode, setMode] = useState<Mode>('V');
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [employee, setEmployee] = useState<Partial<EmployeeModel>>(emptyEmployee);

  const axiosData = async () => {
    await fetchData().then((data) => {
      if (data) {
        setEmployees(data);
      }
    });
  };

  useEffect(() => {
    axiosData();
  }, []);

  const onAddEmployee = () => {
    setMode('I');
    setEmployee(emptyEmployee);
  };

  const onUpdateEmployee = (rowData: EmployeeModel) => {
    setMode('U');
    setEmployee(rowData);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'U' && employee.id) {
      await updateByAxios(employee);
    } else if (mode === 'I') {
      await saveByAxios(employee);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>CRUD Example 2</h3>
      {mode === 'V' && (
        <EmployeeTableView
          employees={employees}
          onInsert={onAddEmployee}
          onEdit={onUpdateEmployee}
          onRemove={onRemove}
        />
      )}
      {(mode === 'I' || mode === 'U') && (
        <EmployeeForm
          mode={mode}
          employee={employee}
          onChange={handleChange}
          onSubmit={onSubmit}
          onBack={() => setMode('V')}
        />
      )}
    </div>
  );
}
