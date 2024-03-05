import React, { useRef } from "react";

function Form({ fetchWeather }) {
  const searchKey = useRef();
  const addSearchKey = () => {
    const key = searchKey.current.value;
    console.log(key);
    fetchWeather(key);
  };
  return (
    <div className="w-100  d-flex  justify-content-center mt-3 ">
      <input
        className="form-control ms-5 "
        ref={searchKey}
        placeholder="Enter Country ..."
        type="text"
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
