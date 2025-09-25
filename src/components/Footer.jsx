import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
     <motion.footer initial={{opacity: 0, y:100}} transition={{duration: 1}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} className="bg-[#0d1321] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={assets.logo_dark} alt="" />
          </div>
          <p className="text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#Header" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact us
              </a>
            </li>
            <li>
              <a href="https://maharera.maharashtra.gov.in/privacy-policy" target="_blank" className="hover:text-blue-400">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-[#1a2035] text-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        Copyright © 2025. This Website is Made with ❤️ By Sujay.
      </div>
    </motion.footer>
  )
}

export default Footer