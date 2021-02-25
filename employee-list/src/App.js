import React, { useEffect, useState } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table/table";
import API from "./utils/API";


function App() {

  // const [user, setUser] = useState({});
  // const [users, setUsers] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = () => {
    API.getUsers().then((users) => {
      // setUsers(users)
    })
    .catch(err => console.log(err));
  };


  return(
    <div>
      <Jumbotron />
      <Search />
      <Table 
      // image={user.image}
      // name={(user.firstname) + (user.lastname)}
      // phone={user.phone}
      // email={user.email}
      // dob={user.dob}
      />
    </div>
  );
}

export default App;
