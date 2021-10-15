import React, { useState } from "react";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="mx-auto my-10 overflow-hidden rounded mx-w-sm">
      <form onSubmit={onSubmit} className="w-full max-w-sm mx-auto">
        <div className="flex items-center py-2 my-2 border-b border-b-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="w-full bg-transparent appearance-none "
            placeholder="Search Image Term..."
            name="text"
          />
          <button className="flex-shrink-0 px-4 py-1 text-white transition-all bg-green-500 rounded hover:bg-green-700">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
