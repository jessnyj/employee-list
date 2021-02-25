import React, { useEffect } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table/table";
import API from "./utils/API";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  });

  const loadUsers = (user) => {
    API.getUsers(user).then((users) => {
      setUsers(users)
    })
    .catch(err => console.log(err));
  };


  return(
    <div>
      <Jumbotron />
      <Search />
      <Table />
    </div>
  );
}

export default App;
