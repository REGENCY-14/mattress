import React from "react";
import Product from "./Product";

export default function FeaturedProducts() {
  return (
    <>
      <section className="bg-white px-10 py-16 my-7 shadow-md text-center w-full">
        <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
        <p className="">
          Take a look at our trending porducts. Browse throguh and see <br />
          and see what other people are buying
        </p>
        <div className="mt-14">
          <Product />
        </div>
      </section>
    </>
  );
}
