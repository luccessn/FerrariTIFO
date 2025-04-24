import React from "react";
import { useFetchData } from "../../HOC/useFetchData";
export const FirstSlide = () => {
  const [info, error, isLoading] = useFetchData(
    "https://ferraritifo.onrender.com/getImages"
  );
  console.log(info);
  if (error) {
    return <h1>ER: {error}</h1>;
  }

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div className="flex justify-center items-center h-screen">
        <img
          src={info[0]?.ferrari?.frlogo}
          alt=""
          className="w-40 ransition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in "
        />
      </div>
    </div>
  );
};
