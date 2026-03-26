import React from "react";
import { FaRoad } from "react-icons/fa";

function Responsive() {
  const offerdesc = [
    "Download Drizzy App from App Store & Play Store",
    "Limited Time Offer",
    "FLAT 30% OFF • Grab Now",
    "Book Now!",
  ];

  return (
    <div className="marquee-container bg-yellow-500 py-2 overflow-hidden">
      <div className="marquee-track flex items-center bg-yellow-500">
        {offerdesc.concat(offerdesc).map((text, index) => (
          <div
            className="marquee-item flex items-center gap-3 px-6 text-2xl font-semibold text-black"
            key={index}
          >
            <span className="whitespace-nowrap">{text}</span>

            <FaRoad className="w-6 h-6 text-black" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Responsive;