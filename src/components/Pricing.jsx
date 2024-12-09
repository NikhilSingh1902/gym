import React from 'react'
import { Link } from "react-router-dom";
// import { Check } from "lucide-react";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/price1.jfif",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/price2.jpg",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/price3.jfif",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
    <h1>FITNESS PLANS</h1>
    <div className="wrapper">
      {pricing.map((element) => {
        return (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="titled">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              <p>
                {/* <Check /> Equipment */}
                # Equipment
              </p>
              <p>
                {/* <Check /> 24/7 Skilled Support */}
                # Skilled
              </p>
              <p>
                {/* <Check /> 20 Days Freezing Option */}
                # Freezing
              </p>
              <Link to={"/"}>Join Now</Link>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default Pricing
