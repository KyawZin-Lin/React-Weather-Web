import React, { useRef, useState } from "react";

function Form({ fetchWeather }) {
  const [key ,setKey] = useState("");
  const addSearchKey = () => {
    // const key = searchKey.current.value;
    fetchWeather(key);
  };
  return (
    <div className="w-100  d-flex  justify-content-center mt-3 ">
      <input
        className="form-control ms-5 "
        placeholder="Enter Country ..."
        type="text"
        onChange={(e)=>{
          setKey(e.target.value);
        }}
      />
      <input
        type="button"
        onClick={() => {addSearchKey()}}
        className="btn ms-2 me-5 bg-dark text-white"
        value="Search"
      />
    </div>
  );
}

export default Form;
