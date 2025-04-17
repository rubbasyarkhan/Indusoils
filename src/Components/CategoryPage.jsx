// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import productsAndCategory from "../data/productdata"; // adjust path as needed
import ProductCard from "../components/ProductCard";  // adjust path as needed
import Header from "./Header";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const categoryProducts = productsAndCategory[decodedCategory];

  return (<>
  <Header />
    <div className="my-8  p-4 rounded">
      {/* <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back to Home</Link> */}

      <h1 className="text-2xl font-bold mb-6 uppercase">{decodedCategory}</h1>

      {categoryProducts ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  </>

  );
};

export default CategoryPage;
