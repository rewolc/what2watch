import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.component/header";
import Collection from "./components/collection/collection";
import Search from "./components/search.component/search";
import { Route, Routes, Redirect } from "react-router-dom";
import { Component, createContext, useState, useEffect } from "react";
import FilmPage from "./pages/film-page/film-page";

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
