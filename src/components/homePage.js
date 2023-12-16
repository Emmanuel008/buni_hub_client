import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateVisitor = () => {
    navigate("/visitor");
  };
  const handleNavigateMember = () => {
    navigate("/member");
  };
  return (
    <div className="flex  items-center justify-center h-screen ">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-10 px-20 rounded-md mr-4" onClick={handleNavigateMember}>
        Member
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-10 px-20 rounded-md "
        onClick={handleNavigateVisitor}
      >
        Visitors
      </button>
    </div>
  );
};

export default HomePage;
