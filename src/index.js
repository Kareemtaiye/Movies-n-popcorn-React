import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./App-v1";
import StarRatings from "./components-reusable/StarRatings";
import AppTextExtender from "./components-reusable/TextExpander";

function Test() {
  const [productRating, setProductRating] = useState(0);
  return (
    <div>
      <StarRatings
        color="blue"
        onSetRating={setProductRating}
        maxRatings={10}
      />
      <p>You have rated this product {productRating} starts</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRatings />
    <StarRatings
      color="red"
      size={25}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    <App />
    {/* <Test /> */}
    {/* <AppTextExtender /> */}
  </React.StrictMode>
);
