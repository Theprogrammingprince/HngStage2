import React from "react";

const Header = ({ header, listLength }) => {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h1 className="font-bold text-4xl">{header}</h1>
      </div>
    </div>
  );
};

export default Header;
