import React, { useEffect, useState } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Search from "./components/Search/search";
import Table from "./components/Table/table";
import API from "./utils/API";


function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    loadUsers()
  }, []);

  // Getting all users and allowing for search
  const loadUsers = () => {
    API.getUsers()
      .then((users) => {
        setUsers(users);
        setUserSearch(users);
      })
      .catch(err => console.log(err));
  };

  // Sorting by Name
  const sortByName = (event) => {
    let sortDir = event.target.getAttribute("data-value");
    if (sortDir === "ascending") {
      setUsers(users.sort((a, b) => (a.name < b.name ? 1 : -1)));
      setSort("descending");
    } else if (sortDir === "descending") {
      setUsers(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setSort("ascending");
    } else {
      setUsers(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setSort("ascending");
    }
  }

  // Search for Users
  const searchForUser = (currentSearch) => {
    const searchedUsers = users.filter(
      user => {
        if (user.name.includes(currentSearch)) {
          return user;
        }
      }
    )
    setUserSearch(searchedUsers);
  };

  // Input change
  const handleInputChange = event => {
    setSearch(event.target.value);
    searchForUser(event.target.value);
  };

  return (
    <div>
      <Jumbotron />
      <Search
        handleInputChange={handleInputChange}
        results={search}
      />
      <Table
        users={userSearch}
        sortByName={sortByName}
        sort={sort}
      />
    </div>
  );
}

export default App;
