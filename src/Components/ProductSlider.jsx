import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const products = [
  { id: 1, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 1" },
  { id: 2, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 2" },
  { id: 3, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 3" },
  { id: 4, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 4" },
  { id: 5, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 5" }
];

const SingleProduct = ({ imgURL, name }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center rounded-lg overflow-hidden">
        <img src={imgURL} alt={name} className="object-cover w-full h-full" />
      </div>
      <h2 className="text-lg font-semibold mt-4 text-center">{name}</h2>
    </div>
  );
};

const ProductSlider = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center">Highlighted Products</h1>
      
      {/* Carousel */}
      <div className="w-full max-w-5xl px-4">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
          showDots={true}
        >
          {products.map((product) => (
            <SingleProduct key={product.id} imgURL={product.imgURL} name={product.name} />
          ))}
        </Carousel>
      </div>
      
      {/* View More Button */}
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors">
        View More
      </button>
    </section>
  );
};

export default ProductSlider;
