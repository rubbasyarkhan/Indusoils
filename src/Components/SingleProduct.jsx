import React from 'react';

const SingleProduct = ({ imgURL, name }) => {
  return (
    <div className="flex flex-col  w-full sm:w-[60%] lg:w-[80%] items-center gap-4 py-10 transition-shadow group">
      {/* Image Container */}
      <div className="p-6 w-40 h-40 sm:w-56 sm:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full flex relative items-center justify-center">
        {/* Circle */}
        <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bottom-6 z-0 bg-blue-600 opacity-25 group-hover:opacity-100 absolute rounded-full transition-opacity duration-300"></div>
        
        {/* Image */}
        <img
          src={imgURL}
          alt={name}
          className="w-[110%] sm:w-[120%] lg:w-[90%] xl:w-[80%] z-10 object-cover p-2" // Increased size for mobile
        />
      </div>

      {/* Product Name */}
      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">{name}</h2>
    </div>
  );
};

export default SingleProduct;
