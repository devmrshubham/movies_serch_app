import React from "react";

function Search({ title, handler }) {
  const ChangeHan = (e) => {
    handler(e.target.value);
  };


  return (
    <div className="max-w-[700px] mx-auto  mt-5   ">
      <input
        type="text"
        name=""
        id=""
        onChange={ChangeHan}
        value={title}
        className=" w-[100%] p-3 focus:outline-none border rounded text-2xl  "
      />
    </div>
  );
}

export default Search;
