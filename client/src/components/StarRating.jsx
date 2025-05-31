import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      <div className="flex items-center gap-1 mt-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <img
              src={
                rating > index ? assets.starIconFilled : assets.starIconOutlined
              }
              alt="star"
              className="h-4.5 w-4.5"
            />
          ))}
      </div>
    </>
  );
};

export default StarRating;
