import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleProduct from "./SingleProduct";

// Define the custom right arrow component
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-black border-none"
    >
      {/* You can customize this button to add any icon or style */}
      <span className="text-3xl">&#8594;</span> {/* Example arrow icon */}
    </button>
  );
};

// Define the custom left arrow component
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-black border-none"
    >
      {/* You can customize this button to add any icon or style */}
      <span className="text-3xl">&#8592;</span> {/* Example arrow icon */}
    </button>
  );
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5, partialVisibilityGutter: 20 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 15 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 10 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const products = [
  { id: 1, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 1" },
  { id: 2, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 2" },
  { id: 3, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 3" },
  { id: 4, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 4" },
  { id: 5, imgURL: "https://www.caltex.com/content/dam/caltex/lubricants/product-images/havoline-prods-fully-synthetic-eco-5-sae-5w-30%20SP.png", name: "Category 5" }
];

const ProductSlider = () => {
  return (
    <section className="w-full flex justify-center flex-col items-center  py-10 mb-40 h-[80%]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-14 sm:mb-40 text-center">lknc</h1>
      <Carousel
        className="h-full w-[90%] "
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={false} // Disable default arrows
        customRightArrow={<CustomRightArrow />} // Custom right arrow
        customLeftArrow={<CustomLeftArrow />} // Custom left arrow
      >
        {products.map((product) => (
          <SingleProduct key={product.id} imgURL={product.imgURL} name={product.name} />
        ))}
      </Carousel>
    </section>
  );
};

export default ProductSlider;
