import React, { useEffect, useState } from "react";
import Suggesstion from "./Suggesstion";

function Search() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterusers, setFilterusers] = useState([]);

  async function fetchListUser() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json(); // Don't forget to await here
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListUser();
  }, []);
  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.name && item.name.toLowerCase().includes(query))
          : [];
      setFilterusers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  
  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        type="text"
        name="search-users"
        placeholder="Search Users here"
        onChange={handleChange}
      />
      {
        showDropdown && <Suggesstion data ={filterusers}/>
        
      }
</div>
  );
}

export default Search;
