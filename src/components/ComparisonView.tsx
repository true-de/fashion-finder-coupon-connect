import React from "react";
import ProductCard from "./ProductCard";

const ComparisonView = () => {
  // Mock data - in a real extension this would come from the current page
  const products = [
    {
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      store: "H&M",
      couponCode: "SUMMER20",
    },
    {
      name: "Essential Cotton Tee",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
      store: "Zara",
      couponCode: "FIRST10",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="mb-6 text-2xl font-bold">Compare Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;