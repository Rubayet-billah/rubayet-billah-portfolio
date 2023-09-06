import React from "react";
import { BsStarFill } from "react-icons/bs";

const UserReview = ({ review }) => {
  review = {
    email: "rubayetbillah@gmail.com",
    name: "Rubayet Billah",
    rating: 4,
    comment:
      "Gorgeous design! Even more responsive than the previous version. A pleasure to use!",
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold">
          <div className="w-7 h-7 text-center rounded-full bg-red-500 grid place-items-center">
            {review.name[0]}
          </div>
          <span>{review.name}</span>
        </div>
        <div className="flex p-1 gap-1 text-yellow-500">
          {[...Array(review.rating)].map((_, index) => (
            <BsStarFill key={index} />
          ))}
        </div>
      </div>
      <div>{review.comment}</div>
    </div>
  );
};

export default UserReview;
