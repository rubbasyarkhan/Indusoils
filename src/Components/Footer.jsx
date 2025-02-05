import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 border-b border-gray-700 pb-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold flex items-center">
            <span className="text-red-600 text-3xl mr-2">■</span> INDUS
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
          <span>Copyright © 2023</span>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm pt-4">
        <a href="#" className="hover:text-gray-400">Terms of Use</a> | 
        <a href="#" className="hover:text-gray-400 ml-2">Privacy Policy</a>
        <p className="mt-2">Copyright © 2023 Transparent. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer