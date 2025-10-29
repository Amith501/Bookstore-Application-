import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import AppNavbar from "../components/Navbar";
import { Container, Form, Button } from "react-bootstrap";

export default function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishyear: "",
    category: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      const res = await API.get(`/${id}`);
      setBook(res.data);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/${id}`, book);
    navigate("/");
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <h3>Edit Book</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" value={book.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" value={book.author} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publish Year</Form.Label>
            <Form.Control name="publishyear" value={book.publishyear} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" value={book.category} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary">Update</Button>
        </Form>
      </Container>
    </>
  );
}
