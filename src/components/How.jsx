import React from 'react';
import { Download, SearchX, ScanSearch, PictureInPicture2,CarFront } from 'lucide-react';
import { div } from 'three/tsl';

const How = () => {
  const steps = [
    {
      number: "01",
      icon: <Download className="w-8 h-8" />,
      title: "Download the App",
      description: "Get started by downloading the Drizzy App from iOS App Store or Android Play Store. "
    },
    // {
    //   number: "02",
    //   icon:   <SearchX />,
    //   title: "Some Basics ",
    //   description: "Create your profile in seconds to begin your journey."
    // },
    {
      number: "02",
      icon:  <ScanSearch className="w-8 h-8" />,
      title: "Customise your Journey ",
      description: "Choose your preferred time slot, day to start, plan, car style, your pickup location and any specific learning requirements."
    },
     {
      number: "03",
      icon:  <PictureInPicture2 className="w-8 h-8" />  ,
      title: "Let’s get your Add-Ons ",
      description: "Let our experts handle your hassle of getting a License (Learner's + Permanent) done, if you don’t already have one. Don’t worry you can learn with us, even if you don’t have these in place in the start. So don’t consider this a road block!"
    },
   
      {
      number: "04",
      icon:    <CarFront className="w-8 h-8" />  ,
      title: "Enjoy your Journey ",
      description: "Your instructor will pick you up and start with your hands-on practical sessions. Track your progress, get real-time feedback, and practice until you're confident behind your wheel."
    }


  ];

  return (
    <div id="how" className="relative bg-slate-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

      <section className="relative py-11">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">How Drizzy Works</h2>
          <p className="text-slate-300 text-center mb-20 max-w-2xl mx-auto text-lg">
           Let’s prepare the legos of your journey with Drizzy in less than 2 minutes
          </p>

          <div className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* iPhone Mockup - Centered on Mobile and Tablet */}
            <div className="w-full lg:w-2/5 flex justify-center">
     <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] sm:border-[14px] rounded-[2rem] sm:rounded-[2.5rem] 
        h-full sm:h-full lg:h-full 
            w-[220px] sm:w-[260px] lg:w-[300px] shadow-2xl">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden 
                          w-[200px] sm:w-[240px] lg:w-[272px] 
                            h-full sm:h-full lg:h-full bg-white">
                  <video 
                    src="./demo-drizzy.mp4" 
                    className="w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ playbackRate: 0.25 }}
                    onLoadedMetadata={(e) => {
                      e.target.playbackRate = 0.25;
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Steps - Now Larger */}
          <div className="w-full lg:w-3/5 space-y-8 sm:space-y-10 lg:space-y-12 relative">
              {/* Connecting Line */}
              <div className=" sm:block absolute left-[60px]   top-[100px] w-1 h-[calc(100%-140px)] bg-yellow-400 hidden lg:block"></div>

              {steps.map((step, index) => (
               <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 relative group">
                  {/* Number and Icon Circle */}
                  <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                         rounded-full bg-yellow-400 flex flex-col items-center justify-center 
                           z-10 shadow-lg group-hover:scale-105 transition-transform duration-300">
                   <span className="text-xs sm:text-sm font-bold">{step.number}</span>
                    <div className="text-black mt-2">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content - Enhanced Size */}
                  <div className="flex-grow pt-6 mt-[-21px]">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            

      </section>
    </div>
  );
};

export default How;