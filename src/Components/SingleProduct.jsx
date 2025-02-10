import React from 'react';  

const SingleProduct = ({ imgURL, name }) => {   
  return (     
    <div className="flex flex-col w-full sm:w-[50%] lg:w-[60%] items-center  bg-red-700 gap-2 py-6 transition-shadow group">       
      {/* Image Container */}       
      <div className="p-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full flex relative items-center justify-center">         
        {/* Circle */}         
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bottom-4 z-0 bg-blue-600 opacity-25 group-hover:opacity-100 absolute rounded-full transition-opacity duration-300"></div>                  
        {/* Image */}         
        <img           
          src={imgURL}           
          alt={name}           
          className="w-[100%] sm:w-[110%] lg:w-[90%] xl:w-[80%] z-10 object-cover p-2" // Adjusted size for mobile
        />       
      </div>        
      {/* Product Name */}       
      <h2 className="text-sm sm:text-lg lg:text-xl xl:text-xl font-semibold text-center">{name}</h2>     
    </div>   
  ); 
};

export default SingleProduct;
