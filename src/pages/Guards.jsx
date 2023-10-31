import { useState, useEffect } from "react";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Security from "../components/Security";

import securityGuards from "../guards";

const Guards = () => {
  //security guards
  const [guards, setGuards] = useState(securityGuards);
  const [filteredGuards, setFilteredGuards] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLoction, setSelectedLocation] = useState("");

  console.log(selectedLoction);

  useEffect(() => {
    //if there is a search term. find the person

    let filterGuardsByName = [];
    let filterGuardsByLocation = [];

    console.log(selectedLoction);

    // if (search) {
    //   filterGuardsByName = guards.filter(({ name }) =>
    //     name.toLowerCase().includes(search.toLowerCase())
    //   );
    //   setFilteredGuards(filterGuardsByName);
    // } else {
    //   // If search is empty, reset the filtered guards to guards state
    //   setFilteredGuards(guards);
    // }

    if (search) {
      filterGuardsByName = guards.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredGuards(filterGuardsByName);
    } else if (selectedLoction !== "") {
      // If search is empty, reset the filtered guards to guards state
      filterGuardsByLocation = guards.filter((item) =>
        item.location.includes(selectedLoction)
      );
      setFilteredGuards(filterGuardsByLocation);
    } else {
      setFilteredGuards(guards);
    }

    // if (selectedLoction === "All") {
    //   setFilteredGuards(guards);
    // } else {
    //   filterGuardsByLocation = guards.filter((item) =>
    //     item.location.includes(selectedLoction)
    //   );
    //   setFilteredGuards(filterGuardsByLocation);
    // }
  }, [search, selectedLoction]);

  //handle on change location and get the value
  const handleChangeLocation = (e) => {
    const { value } = e.target;
    console.log(value);
    setSelectedLocation(value);
  };

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

        <div className='security max-w-7xl mx-auto flex gap-8'>
          <Location
            changeLocation={handleChangeLocation}
            location={selectedLoction}
          />
          <Security guards={filteredGuards} />
        </div>
      </div>
    </div>
  );
};

export default Guards;
