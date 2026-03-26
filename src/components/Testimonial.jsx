import React, { useState, useEffect } from 'react';
import { Star, StarHalf, Car, Calendar, Award, SwitchCamera, Rocket, TrafficCone, UserSearch, KeySquare, TentTree } from 'lucide-react';

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`f-${i}`} size={20} className="text-yellow-400 fill-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" size={20} className="text-yellow-400 fill-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`e-${i}`} size={20} className="text-gray-300 fill-gray-300" />
      );
    }

    return stars;
  };

  
  const testimonials = [
    {
      id: 1,
      name: "Sehaj Preet",
      achievement: "Passed First Try!",
      rating: 4.8,
      review: "Drizzy made learning to drive so easy! The booking process was smooth, and my instructor was incredibly patient. Passed my test on the first attempt!",
      imageUrl: "student4.jpg",
      icon: <Car className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 2,
      name: "Aditya Kumar",
      achievement: "Flexible Schedule!",
      rating: 4.9,
      review: "As a busy student, I loved how easy it was to schedule lessons and decided to take Drizzy's course before moving abroad. The reminders and progress tracking were super helpful.",
      imageUrl: "student2.jpg",
      icon: <Calendar className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 3,
      name: "Sharvi Aggarwal",
      achievement: "Confident Driver!",
      rating: 5.0,
      review: "The structured learning approach and supportive instructors helped me overcome my driving anxiety. Now I'm a confident driver thanks to Drizzy!",
      imageUrl: "student1.jpg",
      icon: <Award className="w-5 h-5 text-yellow-500" />
    },
    
    {
       id: 9,
      name: "Shivanand",
      achievement: "Cut Throat Simplicity!",
      rating: 4.9,
      review: "Just wanted to have some brush up sessions wherein traditional trainers were just taking the booking but weren’t showing up at all with some random excuses. Drizzy aligned their trainer within minutes for me.",
      imageUrl: "Shivanand.png",
      icon: <Rocket className="w-5 h-5 text-yellow-500" />

    },
    
    {
       id: 4,
      name: "Hema",
      achievement: "Easily Switched Trainers!",
      rating: 4.8,
      review: "During my 10th session, the trainer informed me, due to some family emergency, he won’t be able to complete my last 5 days but Drizzy arranged a replacement for him from the very next day",
      imageUrl: "Hema.png",
      icon: <SwitchCamera className="w-5 h-5 text-yellow-500" />

    },

     {
       id: 5,
      name: "Srijeeta",
      achievement: "Practical from Day 1!",
      rating: 5.0,
      review: "The car was very well maintained and the trainer was super focused on the sessions and gave enough time for experimentation and took it as per my speed.",
      imageUrl: "Srijeeta (2).png",
      icon: <TrafficCone className="w-5 h-5 text-yellow-500" />

    },
     {
       id: 6,
      name: "Dr. Sneha Singh",
      achievement: "Personally Curated & Managed!",
      rating: 5.0,
      review: "My sister referred me to Drizzy's Curriculum and post going through it, now I certainly know why she did so. Super well managed by their team with my hectic hospital shifts.",
      imageUrl: "Dr. Sneha Singh.png",
      icon: <UserSearch className="w-5 h-5 text-yellow-500" />

    },
    
     {
       id: 7,
      name: "Shree",
      achievement: "Personal Car Explored!",
      rating: 4.5,
      review: "I wanted to experience learning in my personally owned car because that’s what I have to drive everyday, right! We had some challenges here and there, but Drizzy stood at the right corner for us.",
      imageUrl: "Shree.png",
      icon: <KeySquare className="w-5 h-5 text-yellow-500" />

    },
  {
       id: 8,
      name: "Ranjeet Singh",
      achievement: "Leaves Approved!",
      rating: 4.9,
      review: "I was running into critical situations at my office but Drizzy’s trainers managed my leave requests easily and gave me alternate options to cover my classes.",
      imageUrl: "Ranjeet Singh.png",
      icon: <TentTree className="w-5 h-5 text-yellow-500" />

    },

  ];

  return (
    <section
      id="testimonials-section"
      className="px-4 py-11 bg-gradient-to-b from-yellow-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold mb-4">
            Our Cult and their Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Let’s hear from the thousands of learners joining our cult and completing each day.
          </p>
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          slidesPerView={4}   // ⭐ DEFAULT DESKTOP FIX
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto flex">
    <div className="px-3 h-full flex">
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-[305px] w-full">

               <div className="flex items-start gap-3 mb-4">
  
  {/* IMAGE + ICON WRAPPER */}
  <div className="relative">
    <img
      src={t.imageUrl}
      className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
      alt={t.name}
    />

    {/* ICON BOTTOM CORNER */}
    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow">
      {t.icon}
    </div>
  </div>

  {/* TEXT */}
  <div>
    <h3 className="font-semibold">{t.name}</h3>
    <p className="text-xs text-gray-600">{t.achievement}</p>
  </div>

</div>

                  {/* STARS */}
                  <div className="flex items-center mb-3">
                    {renderStars(t.rating)}
                    <span className="text-xs text-gray-500 ml-2">
                      ({t.rating.toFixed(1)})
                    </span>
                  </div>

                  {/* REVIEW */}
                 <p className="text-gray-700 text-sm flex-grow line-clamp-3">
                  {t.review}
                    </p>
                   

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;