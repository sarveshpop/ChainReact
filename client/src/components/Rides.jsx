import React from "react";
import { ToastContainer } from "react-toastify";
import bike1 from "../assets/bike1.png";
import bike2 from "../assets/bike2.png";
import bike3 from "../assets/bike3.png";
import bike4 from "../assets/bike4.png";
import bike5 from "../assets/bike5.png";
import bike6 from "../assets/bike6.png";
import Bike from "./Bike";
import "react-toastify/dist/ReactToastify.css";

const Rides = () => {
  const bikes = [
    {
      name: "JoyE Hurricane",
      image: bike1,
      description:
        "The JoyE Hurricane is a stylish and high-performance urban bike with a lightweight aluminum frame, a 8-speed Shimano Alfine internal hub, and hydraulic disc brakes.",
    },
    {
      name: "Oben Rorr",
      image: bike2,
      description:
        "Oben Rorr is a stylish and functional urban bike that's designed to tackle the challenges of city cycling. this bike is perfect for commuting or leisurely rides through the city.",
    },
    {
      name: "Revolt RV400",
      image: bike3,
      description:
        "The Revolt RV400 is a stylish and comfortable urban bike that features premium components and accessories, and a sleek, minimalist design that is both practical and eye-catching.",
    },
    {
      name: "Okinawa I Praise",
      image: bike4,
      description:
        "The Okinawa I Praise is an E-Bike which can be used on city Roads and flat trails as well. It has a massive 80mm Suspension Fork providing a smooth and comfortable ride even on rough terrain.",
    },
    {
      name: "Ola S1 Pro",
      image: bike5,
      description:
        "The Ola S1 Pro is an e-bike designed for urban commuting and daily use. It features a lightweight aluminum frame and a powerful electric motor that provides a smooth and efficient ride.",
    },
    {
      name: "Aether 450X",
      image: bike6,
      description:
        "The Aether 450X is a high-performance gravel bike with top-of-the-line components and versatile capabilities on different terrains without a sweat.",
    },
  ];

  return (
    <div className="flex justify-center items-center px-4 ">
      <div className="grid grid-cols-1 gap-x-40 lg:gap-x-64 gap-y-60 sm:grid-cols-3">
        {React.Children.toArray(
          bikes?.map((bike, i) => (
            <div className="my-20">
              <Bike bike={bike} key={i} />
            </div>
          ))
        )}
      </div>
      <ToastContainer theme="dark" autoClose={3000} />
    </div>
  );
};

export default Rides;
