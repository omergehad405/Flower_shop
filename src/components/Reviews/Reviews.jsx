import React, { useState } from "react";

import "./Reviews.scss";
function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewInfo:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Asperiores Laboriosam Praesentium Enim Maiores? Ad Repellat Voluptates Alias Facere Repudiandae Dolor Accusamus Enim Ut Odit, Aliquam Nesciunt Eaque Nulla Dignissimos.",
      userImg: "/images/pic-1.jpg",
      userName: "john deo",
    },
    {
      id: 2,
      reviewInfo:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Asperiores Laboriosam Praesentium Enim Maiores? Ad Repellat Voluptates Alias Facere Repudiandae Dolor Accusamus Enim Ut Odit, Aliquam Nesciunt Eaque Nulla Dignissimos.",
      userImg: "/images/pic-2.jpg",
      userName: "john deo",
    },
    {
      id: 3,
      reviewInfo:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Asperiores Laboriosam Praesentium Enim Maiores? Ad Repellat Voluptates Alias Facere Repudiandae Dolor Accusamus Enim Ut Odit, Aliquam Nesciunt Eaque Nulla Dignissimos.",
      userImg: "/images/pic-3.jpg",
      userName: "john deo",
    },
  ]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        <span>latest </span>Products
      </h1>
      <div className="container">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <p>{review.reviewInfo}</p>
            <div className="user_details">
              <img src={review.userImg} />
              <h3>{review.userName}</h3>
            </div>
            <span>,,</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
