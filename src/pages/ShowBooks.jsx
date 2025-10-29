import { useEffect, useState } from "react";

import AppNavbar from "../components/Navbar";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("/");
      setBooks(res.data.books);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    await API.delete(`/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <h3>All Books</h3>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishyear}</td>
                  <td>{book.category}</td>
                  <td>
                    <Link
                      to={`/edit/${book._id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteBook(book._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}
