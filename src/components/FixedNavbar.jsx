import React from 'react';

function FixedNavbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      
      <div className="flex justify-around md:justify-center gap-4 md:gap-6 px-4 md:px-6 py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-full">
        
        <button
          onClick={() => {
            document.getElementById("testimonials-section")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="text-xs md:text-sm"
        >
          Testimonials
        </button>

      </div>

    </div>
  );
}

export default FixedNavbar;