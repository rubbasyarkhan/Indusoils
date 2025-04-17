// src/pages/ProductPage.jsx
import React from "react";
import productsAndCategory from "../data/productdata";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between w-full h-full overflow-hidden">
        <div className="flex flex-col mb-4 flex-grow">
            <div className="w-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-[90%] w-full object-cover mx-auto"
                />
            </div>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
                {product.description ? product.description.split('. ').slice(0, 1).join('. ') + '.' : "No description available."}
            </p>
            <p className="font-bold text-black mb-2">Rs. {product.price || "N/A"}</p>
        </div>
        <Link
            to={`/product/${encodeURIComponent(product.category)}/${product.id}`}
            className="bg-black text-white w-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 rounded-b-xl"
        >
            Learn more <span className="text-lg">→</span>
        </Link>

    </div>
);

const ProductCategory = ({ title, products }) => (
    <div className="my-8 p-4 rounded">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mb-6 uppercase">{title}</h2>
            <Link to={`/category/${encodeURIComponent(title)}`} className="text-blue-500 hover:underline text-sm">
                Explore {title} Products →
            </Link>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    </div>
);

const ProductPage = () => (
    <div className="  ">
        {Object.entries(productsAndCategory).map(([category, products]) => (
            <ProductCategory key={category} title={category} products={products} />
        ))}
    </div>
);

export default ProductPage;
