import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I book my first driving lesson?",
      answer: "Booking your first lesson is easier than making your maggi! Download the Drizzy App from the App Store or Google Play, create an account and choose your preferred time slot, day to start, plan and vehicle type. You can also specify your pickup location and any specific learning requirements. We'll confirm your booking instantly!"
    },
    {
      id: 2,
      question: "What documents do I need before starting lessons?",
      answer: "You'll need a valid learning or permanent license, if you have got one. Fret not, if you don’t have any, just apply for one via the app. Our team will assist you throughout the journey. Just make sure to have a valid Aadhaar Card .We recommend uploading this to the app during registration. Additionally, keep the physical documents handy during your lessons"
    },
    {
      id: 3,
      question: "	How much does it cost and what payment methods are accepted?",
      answer: "Just explore our App live with all pricing options and some amazing discounts. We accept all major Credit / Debit Cards, UPI and Net Banking through our secure payment system in the App."
    },
    {
      id: 4,
      question: "Is a trainer switch possible or can I apply for a leave?",
      answer: "Yes, absolutely! We understand certain days are messed up and you can’t attend the session on that. No worries, we have got it covered for you because we value the journey with you, more than the money. So you can simply apply for a leave for certain days through the App or inform your trainer a day prior. We never leave our customers hanging through this journey and cover a trainer switch in any emergency situation or on customer's special request without an extra penny."
    },
    {
      id: 5,
      question: "	How many lessons will I need to be comfortable behind the wheel?",
      answer: "Disclaimer, it is a super personal approach of catching up lessons. But keeping an average, for First Time Learners it ranges between 15 - 21 hours of training and for Brush Up Learners it ranges between 10 - 15 hours of training and then practice. The Drizzy App tracks your progress and provides estimates based on your learning speed. Your instructor will also give you regular feedback and recommendations throughout the journey."
    }
  ];

  const [openId, setOpenId] = useState(null);

  return (
    <section className="px-4 py-5 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know about getting started with Drizzy
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-50/80 transition-colors duration-300"
            >
              <button
                id='faq-question'
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div id='contact-faq' className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href="#contact" 
              className="text-yellow-600 hover:text-yellow-700 font-medium underline decoration-2 decoration-yellow-200 hover:decoration-yellow-400 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
