import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import UserListPage from "./pages/UserListPage";

import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favoris" element={<UserListPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
