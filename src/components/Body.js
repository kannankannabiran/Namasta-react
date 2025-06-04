import React from "react";
import resObj from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
const Body = () => {
  
const [ListOfRest,setListOfRest]=useState(resObj);

  return (
    <div className="body">
      <div className="filter">
       <button type="button" onClick={()=>{
        const FillterPrice = ListOfRest.filter(
          (ListOfRest)=>ListOfRest.price > 500
        )
        setListOfRest(FillterPrice);
       }}>Price</button>
      </div>

      <div className="res-container">
        {ListOfRest.map((rest, index) => (
          <ResturantCard key={index} resData={rest} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
