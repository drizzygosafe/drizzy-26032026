import React, { useEffect } from 'react';
import { Star, StarHalf, Users, Calendar } from 'lucide-react';

// ✅ SWIPER IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const InstructorCard = ({ instructor }) => {

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`e-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col w-full  !h-[265px]">

      {/* TOP SECTION */}
      <div className="flex items-start gap-3 mb-4 flex-wrap sm:flex-nowrap">

        <div className="w-14 h-14 rounded-full border-2 border-yellow-400 bg-white flex items-center justify-center overflow-hidden">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base">
            {instructor.name}
          </h3>

          <div className="flex items-center flex-wrap">
            {renderStars(instructor.rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({instructor.rating.toFixed(1)} • {instructor.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm mb-4 break-words">
        {instructor.bio}
      </p>

      {/* BOTTOM SECTION */}
      <div className="mt-auto flex flex-col  sm:flex-row gap-3 sm:justify-between text-sm">

        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-yellow-500" />
          <div>
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-semibold">{instructor.experience} Years</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-yellow-500" />
          <div>
            <p className="text-xs text-gray-500">Students</p>
            <p className="font-semibold">{instructor.studentsCount}+</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const ProfessionalDrivers = () => {

  const instructors = [
    {
      name: "Naveen Kumar",
      rating: 4.8,
      reviews: 1126,
      bio: "Licensed instructor specializing in defensive driving techniques. Known for patient teaching approach.",
      experience: "23+",
      studentsCount: "5198+",
      image: "driver1.jpg",
    },
    {
      name: "Basti Ram",
      rating: 5.0,
      reviews: 1702,
      bio: "Former Military Officer turned instructor. Expert in advanced vehicle control and emergency maneuvers.",
      experience: "31+",
      studentsCount: "7986+",
      image: "driver2.png",
    },
    {
      name: "Anju Sharma",
      rating: 4.6,
      reviews: 602,
      bio: "Certified master instructor with expertise in helping anxious learners build confidence.",
      experience: "21+",
      studentsCount: "3746+",
      image: "driver3.jpg",
    },
    {
      name: "Subham Mishra",
      rating: 4.9,
      reviews: 1051,
      bio: "Well versed with highway driving and narrow parking shortcuts.",
      experience: "20+",
      studentsCount: "4520+",
      image: "Subham Mishra.png",
    },
    {
      name: "Rajeev Pathak",
      rating: 5.0,
      reviews: 2195,
      bio: "Always passing secret tips and tricks to all his students and making them ready for hard turns.",
      experience: "38+",
      studentsCount: "10588+",
      image: "Rajeev Pathak.png",
    },
    {
      name: "Pappu Ray",
      rating: 4.8,
      reviews: 1551,
      bio: "Giving enough time for experimentation and focusing on practical skills.",
      experience: "26+",
      studentsCount: "5976+",
      image: "Pappu Ray.png",
    },
    {
      name: "Sachin Singh",
      rating: 4.7,
      reviews: 809,
      bio: "Punctual with the professional guys and creating time to cover their requests and manage their schedule.",
      experience: "20+",
      studentsCount: "2935+",
      image: "Sachin Singh.png",
    }
  ];

  return (
    <section className="py-11 md:py-11 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            We Provide the Best to You from Over 170+ Trainers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified professional instructors come with an experience of over 15.2+ years.
          </p>
        </div>

        {/* 🚀 SWIPER REPLACEMENT */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
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
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index} style={{ height: "auto", display: "flex" }}>
              <div className="px-3 h-full flex w-full">
                <InstructorCard instructor={instructor} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ProfessionalDrivers;