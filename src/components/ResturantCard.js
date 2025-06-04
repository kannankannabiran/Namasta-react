import React from "react";

const ResturantCard = (props)=>{
  const {resData}=props;
  return(
    <div className="res-card">
      <img src={resData.foodImage} alt="Gupta Bhojnalay" className="food_img" />
      <h3>{resData.resName}</h3>
      <h4>{resData.rating} - {resData.deliveryTime}</h4>
      <p>{resData.cuisine}</p>
      <h4>Rs:{resData.price}</h4>
      <button type="button" className="btn_add_cart">Add Cart</button>
    </div>
  )
}
 export default ResturantCard;