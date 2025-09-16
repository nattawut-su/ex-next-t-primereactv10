import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { EmployeeModel } from '@/resources/standard/models/crud.employee';
import React from 'react';

interface EmployeeTableViewProps {
  employees: EmployeeModel[];
  onInsert: () => void;
  onEdit: (employee: EmployeeModel) => void;
  onRemove: (employee: EmployeeModel) => void;
}

export const EmployeeTableView: React.FC<EmployeeTableViewProps> = ({ employees, onInsert, onEdit, onRemove }) => {
  const actionBodyTemplate = (rowData: EmployeeModel) => (
    <>
      <Button
        label="Edit"
        onClick={() => onEdit(rowData)}
      />
      <Button
        label="Delete"
        className="p-button-danger ml-2"
        onClick={() => onRemove(rowData)}
      />
    </>
  );

  return (
    <div className="formgrid grid ui-fluid">
      <div className="col-12">
        <Button
          label="Insert"
          icon="pi pi-plus"
          onClick={onInsert}
        />
      </div>
      <div className="col-12">
        <DataTable value={employees}>
          <Column
            field="firstName"
            header="First Name"
          />
          <Column
            field="lastName"
            header="Last Name"
          />
          <Column
            header="actions"
            body={actionBodyTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};
