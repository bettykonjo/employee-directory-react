import React,{useState} from 'react';
import Employee from './Employee.json';
import './EmployeeList.css' ;

const EmployeeList = () => { 

  const [employees, setEmployees] = useState(Employee);
//New value
  const [addFormData, setAddFormData] = useState({
    fistName: '',
    lastName: '',
    email: '',
    department: '',
    location: ''
  });
  // addFormData
  //Handle events
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    //new employees
    const addNewEmployees = {
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      department: addFormData. department,
      location: addFormData.location,
    };
    const newEmployee = [...employees, addNewEmployees];
    setEmployees(newEmployee);
  }
return (
  <div>
   
   <h2>Add a New Employee</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="firstName" required="required" placeholder="Enter First Name" onChange={handleAddFormChange}/>
      <input type="text" name="lastName" required="required" placeholder="Enter Last Name" onChange={handleAddFormChange}/>
        <input type="text" name="email" required="required" placeholder="Enter Email" onChange={handleAddFormChange}/>
      <input type="text" name="department" required="required" placeholder="Enter Department" onChange={handleAddFormChange}/>
      <input type="text" name="location" required="required" placeholder="Enter Location" onChange={handleAddFormChange}/>
        <button type='submmit'>
     Add
    </button>
    </form>
   <table>
               <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp =>(
            <tr >
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
               <td>{emp.department}</td>
              <td>{emp.location}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    );
          }
export default EmployeeList;