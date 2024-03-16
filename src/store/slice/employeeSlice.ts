import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IEmployee {
    id: string;
    name: string;
    email: string;
}

interface IEmployees {
   employees: IEmployee[];
}

const initialState: IEmployees = {
    employees: []
};

export const EmployeeSlice = createSlice({
    name: 'employeeDetails',
    initialState: initialState,
    reducers: {
        // Add reducer functions here
        resetSections: () => initialState,
        addEmployee: (state, action: PayloadAction<IEmployee>) => {
            state.employees.push(action.payload);
        },
        removeEmployeeById: (state, action: PayloadAction<string>) => {
            state.employees = state.employees.filter(employee => employee.id !== action.payload);
        }
    }
});

export default EmployeeSlice.reducer;

export const { resetSections, addEmployee, removeEmployeeById } = EmployeeSlice.actions; // Export action creators