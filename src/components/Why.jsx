import React from 'react';
import { Car, Shield, Book, Clock, CheckCircle, Users } from 'lucide-react';

const features = [
  {
    title: "Trainers at Door Step",
    description: "You don’t have to leave your place, our trainer will pick and drop you. You just take a deep breath and focus on the real task, mastering the vehicle!"
  },
  {
    title: "Super Scheduling",
    description: "Practically all slots available from 5 AM to 11 PM since we have the largest trainer fleet in your city!"
  },
  {
    title: "Curriculum Focused Approach",
    description: "Our trainer’s follow a well crafted curriculum to train you from basics to advanced tricks. Don’t worry we keep a scope for experimentation!"
  },
  {
    title: "Trainer Switching",
    description: "Our trainer gets any family or medical emergency, don’t worry we will switch the trainer for you. Not a day skipped, not an extra penny, no change in the training method. Never left hanging!"
  },
  {
    title: "Let’s be On-Road",
    description: "From day 1, you are behind the wheel driving on a real road. Don’t worry, we also hate boring tracks!"
  },
  {
    title: "Leave your License Headache",
    description: "We take care of the entire license process and application for you. We will just involve you for certain tasks!"
  },
  {
    title: "RTO Exam Prep",
    description: "Standard learning leads of 80% failure. With us next to NIL!"
  },
  {
    title: "What’s More",
    description: "On-time pick ups because we value your time, guardian updates, well maintained cars, safety mechanisms are always ON so you can be relieved about the female member learning, apply a leave on a messed up day!"
  }
];

const WhyDrizzy = () => {
  return (
    <section id="features" className="bg-gray-50 pt-5 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">There’s Something Different in Our DNA</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
         Simplifying the learning experience with our structured training mechanisms
        </p>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {features.map((feature, index) => (
            <div 
  key={index} 
  className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-50"
>
              <div className="text-black bg-amber-300 w-14 p-1 rounded-lg mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDrizzy;