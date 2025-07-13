import "./updateUser.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching employee:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/api/employee/${id}`, formData)
      .then(() => navigate("/"))
      .catch((err) => console.error("Error updating employee:", err));
  };

  return (
    <div className="center-form">
      <h1>Edit Employee</h1>
      <Form onSubmit={handleSubmit}>
        {["name", "email", "phone", "department"].map((field) => (
          <Form.Group key={field} className="mb-3">
            <Form.Control
              type="text"
              name={field}
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleChange}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
