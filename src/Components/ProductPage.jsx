import React from "react";

const productsByCategory = {
    "ENGINE OIL": [
        {
            name: "Guard Engine Oil",
            image: "https://images.unsplash.com/photo-1613214293055-5678e2f6d7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsJTIwY2FyfGVufDB8fDB8fHww",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "XVC Engine Oil",
            image: "/images/engine2.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Shield Engine Oil",
            image: "/images/engine3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Shield Engine Oil",
            image: "/images/engine3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
    ],
    "GREASES": [
        {
            name: "EP Grease",
            image: "/images/grease1.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Lithium Grease",
            image: "/images/grease2.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Graphite Grease",
            image: "/images/grease3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Graphite Grease",
            image: "/images/grease3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
    ],
    "TRANSFORMER OIL": [
        {
            name: "Transformer Oil 1",
            image: "/images/transformer1.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Transformer Oil 2",
            image: "/images/transformer2.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Transformer Oil 3",
            image: "/images/transformer3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Transformer Oil 3",
            image: "/images/transformer3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
    ],
    "GEAR OIL": [
        {
            name: "Heavy Duty Gear Oil",
            image: "/images/gear1.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Shield Gear Oil",
            image: "/images/gear2.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Guard Gear Oil",
            image: "/images/gear3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
        {
            name: "Guard Gear Oil",
            image: "/images/gear3.png",
            description: "Lorem Ipsum Dolor Sit Amet",
        },
    ],
};

const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col justify-between w-full h-full overflow-hidden">
        <div className=" flex flex-col flex-grow">
            <div className="h-full w-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover mx-auto"
                />
            </div>
            <div className="mt-4 p-4">
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-500 text-sm mt-1 leading-snug">
                    {product.description}
                </p>
            </div>
        </div>
        <button className="bg-black text-white w-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 rounded-b-2xl">
            learn more <span className="text-lg">→</span>
        </button>
    </div>
);

const ProductCategory = ({ title, products }) => (
    <div className="my-8 border border-dashed border-blue-400 p-4 rounded">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold uppercase">{title}</h2>
            <a href="#" className="text-blue-500 hover:underline text-sm">
                Explore {title} Products →
            </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    </div>
);


const ProductPage = () => (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-red-200">
        {Object.entries(productsByCategory).map(([category, products]) => (
            <ProductCategory key={category} title={category} products={products} />
        ))}
    </div>
);


export default ProductPage;
