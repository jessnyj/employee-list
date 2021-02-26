import React, { useEffect, useState } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table/table";
import API from "./utils/API";


function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  // const [sort, setSort] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    loadUsers()
  }, [search]);

  const loadUsers = () => {
    API.getUsers(search)
    .then((users) => {
      if (users.data.length === 0) {
        throw new Error("No results found.");
      }
      setUsers(users)
    })
    .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return(
    <div>
      <Jumbotron />
      <Search 
      handleInputChange={handleInputChange}
      results={search}
      />
      <Table 
      users={users}
      />
    </div>
  );
}

export default App;
