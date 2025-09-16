import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';
import React from 'react';

interface EmployeeFormProps {
  mode: 'I' | 'U';
  employee: Partial<EmployeeModel>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ mode, employee, onChange, onSubmit, onBack }) => {
  return (
    <>
      <div className="formgrid grid ui-fluid">
        <div className="col-12">
          <h4>{mode === 'I' ? 'Insert Employee' : 'Update Employee'}</h4>
        </div>
      </div>
      <form
        className="formgrid grid ui-fluid"
        onSubmit={onSubmit}
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
              onChange={onChange}
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
              onChange={onChange}
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
            onClick={onBack}
          />
        </div>
      </form>
    </>
  );
};
