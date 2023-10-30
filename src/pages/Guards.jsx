import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Security from "../components/Security";

import securityGuards from "../guards";

const Guards = () => {
  //security guards
  const [guards, setGuards] = useState(securityGuards);
  const [filteredGuards, setFilteredGuards] = useState([]);
  const [search, setSearch] = useState("");

  console.log(filteredGuards);

  useEffect(() => {
    //if there is a search term. find the person
    if (search) {
      const filterGuardsByName = guards.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredGuards(filterGuardsByName);
    } else {
      // If search is empty, reset the filtered guards
      setFilteredGuards(guards);
    }
  }, [search]);

  return (
    <div className='guards-list p-4'>
      <Navbar />

      <div className='guards py-4'>
        <div className='guards-title text-center'>
          <h2 className='text-2xl'>List of secuirty guards</h2>
        </div>

        <div className='search-guard'>
          <Search searchTerm={search} setSearch={setSearch} />
        </div>

        <div className='security max-w-7xl mx-auto'>
          <Security guards={filteredGuards} />
        </div>
      </div>
    </div>
  );
};

export default Guards;
