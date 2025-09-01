'use client';
import { useReducer, useState } from 'react';
import PersonModel, { PersonFormModel } from '@/models/person';

type State = PersonModel[];

type Action =
  | { type: 'ADD_USER'; payload: PersonFormModel }
  | { type: 'EDIT_USER'; payload: PersonModel }
  | { type: 'REMOVE_USER'; payload: { id: number } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_USER': {
      const newUser: PersonModel = { id: Date.now(), fname: action.payload.fname, lname: action.payload.lname };
      return [...state, newUser];
    }
    case 'EDIT_USER':
      return state.map((u) => (u.id === action.payload.id ? { ...u, fname: action.payload.fname, lname: action.payload.lname } : u));
    case 'REMOVE_USER':
      return state.filter((u) => u.id !== action.payload.id);
    default:
      return state;
  }
}

export default function AdvancedPage() {
  const [persons, dispatch] = useReducer(reducer, []);
  const [formValue, setFormValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const [editFormValue, setEditFormValue] = useState<PersonModel>({ id: 0, fname: '', lname: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <>
      <h2>Person List</h2>
      {/* Add */}
      <div>
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" value={formValue?.fname || ''} onChange={(e) => setFormValue((v) => ({ ...v, fname: e.target.value }))} />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" value={formValue?.lname || ''} onChange={(e) => setFormValue((v) => ({ ...v, lname: e.target.value }))} />
      </div>
      <button onClick={() => dispatch({ type: 'ADD_USER', payload: formValue })}>Add Person</button>
      <br />
      {/* List */}
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {editingId === person.id ? (
              <>
                <input value={editFormValue?.fname || ''} onChange={(e) => setEditFormValue((v) => ({ ...v, fname: e.target.value }))} />
                <input value={editFormValue?.lname || ''} onChange={(e) => setEditFormValue((v) => ({ ...v, lname: e.target.value }))} />
                <button
                  onClick={() => {
                    dispatch({
                      type: 'EDIT_USER',
                      payload: { ...person, ...editFormValue },
                    });
                    setEditingId(null); // ออกจากโหมดแก้ไข
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {person.fname} {person.lname}
                <button
                  onClick={() => {
                    setEditingId(person.id);
                    setEditFormValue(person);
                  }}
                >
                  Edit
                </button>
              </>
            )}
            <button onClick={() => dispatch({ type: 'REMOVE_USER', payload: { id: person.id } })}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
