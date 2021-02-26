import React, { useEffect, useState } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table/table";
import API from "./utils/API";


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = () => {
    API.getUsers().then((users) => {
      setUsers(users)
    })
    .catch(err => console.log(err));
  };


  return(
    <div>
      <Jumbotron />
      <Search />
      <Table 
      users={users}
      />
    </div>
  );
}

export default App;
