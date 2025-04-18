import React from "react";
import { useParams, Link } from "react-router-dom";
import productsAndCategory from "../data/updatedProductData";
import Header from "./Header";

const SingleProductPage = () => {

    const { name } = useParams();
    const decodedName = decodeURIComponent(name);

    let currentProduct = null;
    let currentCategory = null;

    // Find product and its category
    for (const [category, products] of Object.entries(productsAndCategory)) {
        const match = products.find((p) => p.name === decodedName);
        if (match) {
            currentProduct = match;
            currentCategory = category;
            break;
        }
    }

    if (!currentProduct) {
        return <div className="text-center p-6 text-red-500">Product not found</div>;
    }

    // Get related products (excluding the current one)
    const relatedProducts = productsAndCategory[currentCategory]
        .filter((p) => p.name !== currentProduct.name)
        .slice(0, 4);

    return (
        <>
        <Header/>
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Main Product Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-10 grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="w-full h-72 object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-900 mb-3">{currentProduct.name}</h1>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{currentProduct.description}</p>
                    <p className="text-xl font-semibold text-black mb-4">
                        Price: Rs. {currentProduct.price || "N/A"}
                    </p>
                    <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedProducts.map((item, index) => (
                            <Link
                                to={`/product/${encodeURIComponent(item.name)}`}
                                key={index}
                                className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition duration-200 flex flex-col items-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-32 object-contain mb-3"
                                />
                                <h3 className="text-sm font-medium text-center text-gray-900">{item.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default SingleProductPage;
