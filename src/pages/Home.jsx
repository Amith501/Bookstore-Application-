import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import API from "../api";

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await API.get("/");
    setBooks(res.data.books);
  };

  const deleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      await API.delete(`/${id}`);
      getBooks();
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-center">All Books</h2>
      {books.length === 0 ? (
        <p className="text-center">No books found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Category</th>
              <th style={{ width: "150px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b) => (
              <tr key={b._id}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.publishyear}</td>
                <td>{b.category}</td>
                <td>
                  <Link to={`/edit/${b._id}`} className="btn btn-warning btn-sm me-2">
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteBook(b._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Home;
