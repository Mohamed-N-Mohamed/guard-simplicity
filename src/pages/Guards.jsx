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

  useEffect(() => {
    //if there is a search term. find the person && if location is selected find the person with location

    let filterGuardsByName = [];
    let filterGuardsByLocation = [];

    //if all is selected  set the filtered guards

    //check if there is a search term
    if (search || selectedLoction === "All") {
      filterGuardsByName = guards.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredGuards(filterGuardsByName);
      //check selected location is either london, manchester, birmingham
    } else if (selectedLoction !== "") {
      filterGuardsByLocation = guards.filter((item) =>
        item.location.includes(selectedLoction)
      );
      setFilteredGuards(filterGuardsByLocation);
    } else {
      //if all cases not true set the filtered guards
      setFilteredGuards(guards);
    }
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
