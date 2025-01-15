import React, { useEffect, useState } from "react";

const Product = () => {
  return (
    <>
      <div className="shodow w-full h-[22rem] border border-black">
        <div className="h-[82%] w-full">
          <img src="/products/image.jpg" alt="" className="h-full" />
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <h3 className="text-left">Majesty 8. Covered Mattress</h3>
          <h3 className="text-right">GH₵ 3341</h3>
        </div>
      </div>
    </>
  );
};

const Products = () => {
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)

  useEffect(() => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default Products;
