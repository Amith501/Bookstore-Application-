import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBooks from "./pages/ShowBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/books/Create" element={<CreateBooks />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBooks />} />
          <Route path="/books/edit/:id" element={<EditBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
