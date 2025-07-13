import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");
        setEmployees(response.data);

      } catch (e) {
        console.error("Error:", e.message);
      }
    };
    fetchEmployee();
  }, []);

  const handleDelete = async (employeeId)=>{
    try{
        const response = await axios.delete(`http://localhost:8080/api/employee/${employeeId}`);
        console.log(`Employee with ID ${employeeId} Deleteed successfully`)
    
        setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.id !== employeeId));


    }catch(e){
        console.error("Error : ",e.message);
    }
  }

  const handleUpdate = (employeeId)=>{
    navigate(`/employee/${employeeId}`);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4" style={{color: "#b907ffff" }}>
            All Employees
          </h1>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2"
                        onClick={()=>handleUpdate(employee.id)}>
                        Edit</Button>
                    <Button variant="danger" size="sm" 
                        onClick={()=>handleDelete(employee.id)}>
                            Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
