import React from 'react';
import { Check } from 'lucide-react';
import {Link} from 'react-router-dom'
import QRCode from 'react-qr-code';


const DownloadSection = () => {
  // const features = [
  //   "Learn from certified instructors",
  //   "Flexible scheduling that fits your lifestyle",
  //   "Track your progress in real-time",
  //   "Practice tests and learning materials"
  // ];

  return (
    <section className="py-2 md:py-6 bg-white relative overflow-hidden">
      <div id="DownloadSection" className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row  items-center gap-8 md:gap-16 lg:gap-24">
          {/* Phone Mockups - Centered on Mobile */}
       {/* Phone Mockups */}
<div className="w-full md:w-2/5 relative flex items-center justify-center min-h-[420px] md:min-h-[400px]">

  {/* Center Phone */}
  <div className="relative z-20 w-[160px] sm:w-[200px] md:w-[240px]">
 <div className="relative border-gray-800 bg-gray-800 border-[10px] md:border-[14px] rounded-[2.5rem] 
                h-[320px] sm:h-[550px] md:h-[425px] w-full shadow-xl">
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        <img src="/drizzy-startng.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>

  {/* Left Phone */}
  <div className="absolute top-10 left-[-10px] sm:left-[-20px] md:left-[-8px]
                  w-[160px] sm:w-[160px] md:w-[200px]
                  transform -rotate-12 scale-75 opacity-70 z-10">

    <div className="relative border-gray-800 bg-gray-800 border-[10px] md:border-[14px]
                    rounded-[2.5rem] h-[320px] sm:h-[380px] md:h-full w-full shadow-xl">

      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        <img src="/mobile-no-drizzy.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>

  {/* Right Phone */}
  <div className="absolute top-10 right-[-10px] sm:right-[-20px] md:right-0
                  w-[160px] sm:w-[160px] md:w-[200px]
                  transform rotate-12 scale-75 opacity-70 z-10">

    <div className="relative border-gray-800 bg-gray-800 border-[10px] md:border-[14px]
                    rounded-[2.5rem] h-[320px] sm:h-[380px] md:h-full w-full shadow-xl">

      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        <img src="/drizzy-right.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>

</div>

          {/* Content - Centered on Mobile, Left-Aligned on Desktop */}
          <div className="w-full md:w-3/5 text-center md:text-left z-30">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
             Start the Journey Today and become a part of Drizzy’s Cult
            </h2>
           

            {/* Features List
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div> */}

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row  gap-4 justify-center md:justify-start">
              {/* Google Play Button */}
              <Link to="https://play.google.com/store/apps/details?id=com.drizzy.user" id='google-play-download-section'>
              <button className="inline-flex items-center px-6 py-3 rounded-lg  bg-gray-900 text-white hover:bg-gray-800 transition-colors justify-center">
                <img src="/google-play.png" alt="Google Play" className="w-6 h-6 mr-2" />
                <div className="text-left  ">
                  <div className="text-xs ">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              </Link>



              {/* App Store Button */}
              <Link to="https://apps.apple.com/app/drizzy/id6752537717" id='google-play-download-section'>
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <img src="/AppStore.png" alt="App Store" className="w-6 h-6 mr-2" />
                <div className="text-left ">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              </Link>
             
 


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
