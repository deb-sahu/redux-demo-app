import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IEmployee, removeEmployeeById } from "../store/slice/employeeSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const List = () => {
  // Get the employees from the store using the useAppSelector hook
  const employees = useAppSelector((state) => state.employeesData.employees);

  // Get the dispatch function
  const dispatch = useAppDispatch(); 

  const handleRemoveEmployee = (id: string) => {
    dispatch(removeEmployeeById(id)); // Dispatch removeEmployeeById action with the employee's id
  };

  return (
    <div>
      <h2 style={{marginRight:'2em'}}>Employee List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {employees.map((employee: IEmployee) => (
          <li key={employee.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginRight:'2em' }}>
            <div style={{ flex: '1' }}>
              <strong>Name:</strong> {employee.name}, <strong>Email:</strong> {employee.email}
            </div>
            <div>
              <button onClick={() => handleRemoveEmployee(employee.id)} style={{ padding: '0.5rem', borderRadius: '4px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};