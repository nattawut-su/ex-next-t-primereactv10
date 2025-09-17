import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { EmployeeModel, getAge } from '@/resources/standard/models/crud.employee';
import React from 'react';
import { InputText } from 'primereact/inputtext';

interface CrudProps {
  employees: EmployeeModel[];
  onInsert: () => void;
  onEdit: (employee: EmployeeModel) => void;
  onRemove: (employee: EmployeeModel) => void;
  search: { firstName: string; lastName: string };
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const CrudModeView: React.FC<CrudProps> = (props) => {
  const actionBodyTemplate = (rowData: EmployeeModel) => (
    <>
      <Button
        label="Edit"
        onClick={() => props.onEdit(rowData)}
      />
      <Button
        label="Delete"
        className="p-button-danger ml-2"
        onClick={() => props.onRemove(rowData)}
      />
    </>
  );

  return (
    <>
      <div className="col-12">
        <div className="formgrid grid ui-fluid">
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
                placeholder="Search first name..."
                className="mb-2"
                value={props.search.firstName}
                onChange={props.onSearchChange}
              />
            </div>
          </div>

          <div className="col-12 field grid">
            <label
              htmlFor="lastname"
              className="col-12  md:col-1"
            >
              Lastname
            </label>
            <div className="col-12 md:col-11">
              <InputText
                id="lastname"
                name="lastName"
                placeholder="Search last name..."
                className="mb-2"
                value={props.search.lastName}
                onChange={props.onSearchChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <Button
          label="search"
          icon="pi pi-search"
          className="ml-2"
          onClick={props.onSearch}
        />
        <Button
          label="Add"
          icon="pi pi-plus"
          onClick={props.onInsert}
          className="ml-2"
        />
      </div>
      <div className="col-12">
        <DataTable value={props.employees}>
          <Column
            field="firstName"
            header="First Name"
          />
          <Column
            field="lastName"
            header="Last Name"
          />
          <Column
            header="Birthdate"
            body={(rowData) => (rowData.birthDate ? new Date(rowData.birthDate).toLocaleDateString() : '')}
          />
          <Column
            header="Age"
            body={(rowData) => getAge(rowData).label}
          />
          <Column
            header="actions"
            body={actionBodyTemplate}
          />
        </DataTable>
      </div>
    </>
  );
};
