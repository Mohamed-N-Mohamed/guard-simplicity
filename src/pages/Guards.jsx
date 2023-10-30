import { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Security from "../components/Security";

import securityGuards from "../guards";

const Guards = () => {
  //security guards
  const [guards, setGuards] = useState(securityGuards);
  const [search, setSearch] = useState("");

  console.log(guards);
  return (
    <div className='guards-list p-4'>
      <Navbar />

      <div className='guards py-4'>
        <div className='guards-title text-center'>
          <h2 className='text-2xl'>List of secuirty guards</h2>
        </div>


        <div className="search-guard">
          <Search />
        </div>

        <div className='security max-w-7xl mx-auto'>
          <Security guards={guards} />
        </div>
      </div>
    </div>
  );
};

export default Guards;
