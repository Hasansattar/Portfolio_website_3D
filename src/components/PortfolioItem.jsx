import React from "react";

const PortfolioItem = ({ title, active, setSelected, id }) => {
  return (
    <div
      className={
        "border-2 border-r-[#15c2b2] border-t-[#15c2b2] border-b-[#9479eb] border-l-[#9479eb] bg-[#2a205e]   py-2 px-8 rounded-lg m-3 hover:bg-[#0d0147] cursor-pointer text-center " +
        (active && "active")
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
};

export default PortfolioItem;
