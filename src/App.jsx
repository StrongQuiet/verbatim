import { useRef, useState } from "react";
import "./app.css";
import { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";

const App = () => {
  return <BrowserRouter>
      <Routes>
          <Route
              path="/verbatim"
              element={
                  <Home
                  />
              }
          />
          <Route
              path="/content"
              element={
                  <Content
                  />
              }
          />
      </Routes>
  </BrowserRouter>
};

export default App;
