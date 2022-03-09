import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.component/header";
import Collection from "./components/collection/collection";
import Filter from "./components/filter.component/filter";

import { Component, createContext, useState, useEffect } from "react";
const Serials = createContext("without provider");

const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Collection />
    </div>
  );
};

export default App;
