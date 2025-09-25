import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section initial={{opacity: 0, x:200}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-16 bg-gray-50"
      id="testimonails"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Customer{' '}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Testimonails
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
          Real Stories from Those who Found Home with Us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {testimonial.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;