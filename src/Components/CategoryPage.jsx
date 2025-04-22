import React from "react";
import { useParams, Link } from "react-router-dom";
import productsAndCategory from "../data/productdata"; // adjust path as needed
import ProductCard from "../components/ProductCard"; // adjust path as needed
import Header from "./Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const categoryData = productsAndCategory[decodedCategory];

  return (
    <>
      <Header />
      {/* Breadcrumbs component */}
      <Breadcrumb aria-label="breadcrumb" className="flex items-center py-2 px-4 rounded bg-gray-100">
        <BreadcrumbList className="flex space-x-2 text-lg font-medium">
          <BreadcrumbItem>
            <BreadcrumbLink href="/product" className="cursor-pointer hover:text-blue-600">
              Product
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-500" />
          {/* Make the category clickable by wrapping it with BreadcrumbLink */}
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/category/${encodeURIComponent(decodedCategory)}`}
              className="cursor-pointer font-semibold hover:text-blue-600"
            >
              {decodedCategory}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-8 p-4 rounded">
        <h1 className="text-2xl font-bold mb-2 uppercase">{decodedCategory}</h1>
        {categoryData?.description && (
          <p className="text-gray-700 mb-6">{categoryData.description}</p>
        )}

        {categoryData?.products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
