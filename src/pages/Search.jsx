import axios from "axios";
import { useState, useEffect } from "react";
function Search() {
  const [search, setSearch] = useState("");

    const searchHandle = async (event) => {
      event.preventDefault();
      // setIsLoading(true);
      try {
        const response = await axios.post("http://localhost:5000/search", {
          search: search,
        })
        console.log(typeof(search))
        console.log(response.data);
      }
        catch{
          console.log("hii")
        }


      }
  
    return (
<>
<div>
<center>
<div class="search">
        <input onChange={(e) => setSearch(e.target.value)} placeholder="Search..." type="text"></input>
        <button onClick={searchHandle}  type="submit">Search</button>
      </div>

</center>
      </div>
      <div>{search}</div>


</>

   
    );
  }
  
  export default Search;