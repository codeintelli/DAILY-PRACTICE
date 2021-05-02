import React, { useState } from "react";
import Navbar from "./Navbar";
import ImgResult from "./ImgResult";
const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <Navbar />
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Any Thing"
          onChange={inputEvent}
          value={img}
        />
      </div>
      {img === "" ? null : <ImgResult name={img} />}
    </>
  );
};
export default Search;
