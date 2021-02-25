import React from "react";
// import Wrapper from "./components/Wrapper/wrapper";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table";

function App() {
  return(
    <div>
      <Jumbotron />
      <Search />
      <Table />
    </div>
  );
}

export default App;
