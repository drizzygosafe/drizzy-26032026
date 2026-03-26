import React, { useState } from "react";

const Box = ({ item }) => {
	const [isYellow, setYellow] = useState(false);

	const handleClick = () => {
		setYellow(!isYellow);
	};


	return (
	 
		<div
			onClick={handleClick}
			className={`cursor-pointer px-4 py-3 rounded-xl text-black  text-center transition-all
				${isYellow ? "bg-slate-900  border-slate-600 hover:border-yellow-400 text-white font-bold" : "bg-yellow-400 text-black font-bold border-yellow-500"}
			`}
		>
		<div className="w-full h-40 flex items-center justify-center bg-white rounded-md mb-2">
	<img
		src={item.image}
		alt={item.name}
		className="max-h-full max-w-full object-contain"
	/>
</div>
	<span>{item.name}</span>
	<br/>
  	<span>{item.sub}</span>
</div>

		
		
	 
	);
};


const TextBox = ({ item }) => {
	const [isYellow, setYellow] = useState(false);

	const handleClick1 = () => {
		setYellow(!isYellow);
	};

	return (
		<div
			onClick={handleClick1}
			className={`cursor-pointer px-4 py-3 rounded-xl text-white border text-center transition-all
				${isYellow ? "bg-yellow-400 !text-black font-bold border-yellow-500" : " bg-slate-900 font-bold border-slate-600 hover:border-yellow-400"}
			`}
		>
			{item}
		</div>
	);
};




const CurriculumSection = () => {
	const carStyles = [
	{ name: "Hatchback", sub: "(Manual / Automatic)", image: "yellow-car-png-26.png" },
	{ name: "Sedan", sub: "(Manual / Automatic)", image: "png-transparent-audi-a3.png" },
	{ name: "SUV", sub: "(Manual / Automatic)", image: "suv.png" },
	{ name: "Self", sub: "(Own Car)", image: "combined-cars2.png" }
];

	const plans = [
		"7 Days",
		"10 Days",
		"15 Days",
		"21 Days",
		"28 Days",
		"Mini Day",
		"Half Day",
		"Full Day",
	];

	const learnings = [
		"Rollback + Brake Control",
		"Advance Clutch Operations",
		"Reverse Driving",
		"Parallel Parking",
		"Night, Smog & Rain Driving",
		"45°, 60° & 90° Parkings",
		"Steep Basements & High Rise Parkings",
		"Market Congestion Handling",
		"Lane Change",
		"Highway Driving",
		"Emergency Braking",
		"U-Turn Handling"
	 
	];

	return (
		<section className="bg-white py-11 px-4 " id="Services">
			<div className="max-w-7xl mx-auto ">

				<h2 className="text-4xl md:text-5xl font-bold text-center text-black">
					Sneak Peek into Our Curriculum
				</h2>

				<p className="text-center text-black mt-3 mb-14">
					What’s in the Palette for Our Cult
				</p>

				<h3 className="text-xl text-blaclk text-center mb-5">Vehicle Type</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
					{carStyles.map((item) => (
						<Box key={item} item={item} />
					))}
				</div>

				<h3 className="text-xl text-black text-center mb-5">Plans</h3>
				<div className="grid grid-cols-2   md:grid-cols-4 gap-4 mb-12">
					{plans.map((item) => (
						<TextBox key={item} item={item} />
					))}
				</div>

				<h3 className="text-xl text-black text-center mb-5">What You Learn</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{learnings.map((item) => (
						<TextBox key={item} item={item} />
					))}
				</div>

			</div>
		</section>
	);
};

export default CurriculumSection;