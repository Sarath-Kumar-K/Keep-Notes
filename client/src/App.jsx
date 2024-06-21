import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionalRedirect />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const ConditionalRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && !location.search) {
      navigate('/?tab=notes', { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default App;
