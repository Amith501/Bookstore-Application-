import { useState } from "react";
import API from "../api";
import AppNavbar from "../components/Navbar";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CreateBooks() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishyear: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", book);
    navigate("/");
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <h3>Add New Book</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publish Year</Form.Label>
            <Form.Control name="publishyear" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="success">Add Book</Button>
        </Form>
      </Container>
    </>
  );
}
