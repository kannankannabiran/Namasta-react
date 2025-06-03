import React from "react";
import ReactDOM from "react-dom/client";

const resObj=[
  {
    "deliveryTime": "30 mins",
    "rating": 4.5,
    "resName": "Spice Villa",
    "cuisine": ["Indian", "Chinese"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/6c8a7784-0b42-419e-81f9-f2ab2319a479_1003414.JPG",
    "price": 320
  },
  {
    "deliveryTime": "45 mins",
    "rating": 4.2,
    "resName": "Burger Hub",
    "cuisine": ["American", "Fast Food"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
    "price": 350
  },
  {
    "deliveryTime": "25 mins",
    "rating": 4.7,
    "resName": "Sushi House",
    "cuisine": ["Japanese"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg",
    "price": 390
  },
  {
    "deliveryTime": "40 mins",
    "rating": 4.1,
    "resName": "Pasta Point",
    "cuisine": ["Italian"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4dfbe240cf1a2be01e6f2805c75c4279",
    "price": 310
  },
  {
    "deliveryTime": "35 mins",
    "rating": 4.6,
    "resName": "Taco Land",
    "cuisine": ["Mexican"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
    "price": 375
  },
  {
    "deliveryTime": "20 mins",
    "rating": 4.3,
    "resName": "Salad Station",
    "cuisine": ["Healthy", "Vegan"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
    "price": 300
  },
  {
    "deliveryTime": "50 mins",
    "rating": 3.9,
    "resName": "Biryani Express",
    "cuisine": ["Indian"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eohdm5sdnq6e2u46xeux",
    "price": 340
  },
  {
    "deliveryTime": "28 mins",
    "rating": 4.0,
    "resName": "Pizza Mania",
    "cuisine": ["Italian", "Pizza"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk",
    "price": 360
  },
  {
    "deliveryTime": "19 mins",
    "rating": 4.7,
    "resName": "Smoothie Spot",
    "cuisine": ["Beverages", "Healthy"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
    "price": 310
  },
  {
    "deliveryTime": "33 mins",
    "rating": 3.8,
    "resName": "Momo Corner",
    "cuisine": ["Tibetan", "Snacks"],
    "foodImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng",
    "price": 325
  }
]

const Header = () =>{
  return(
    <div className="header"> 
      <div className="logo-container">
          <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"  className="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

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

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {
       resObj.map((rest,index)=>(
        <ResturantCard key={index} resData={rest}/>
        ))
        };
      </div>
    </div>
  )
}



const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body />
  </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
