import "./App.css";

import Header from "./components/header.component/header";
import Collection from "./components/collection/collection";
import Search from "./components/search.component/search";
import FilmPage from "./pages/film-page/film-page";

import { Route, Routes, Redirect } from "react-router-dom";
import { Component, createContext, useState, useEffect } from "react";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={[<Search key={"srch"} />, <Collection key={"collection"} />]}
        />
        <Route path="/:filmName" element={<FilmPage key={"collection"} />} />
      </Routes>
    </div>
  );
};

export default App;
