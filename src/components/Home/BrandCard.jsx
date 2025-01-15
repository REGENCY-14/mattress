import "react";
import { Link } from "react-router-dom";

export default function BrandCard({brand}) {
  console.log(brand.imageUrl);
  return (

    <div className="rounded-md shadow-md md:h-60 flex flex-col md:flex-row bg-white w-full h-96">
      <div 
      style={{backgroundImage: `url(${brand.imageUrl})`}}
      className="h-full rounded-md rounded-b-none md:rounded-r-none w-full md:w-1/2  bg-cover bg-center"></div>
      <div className="h-full flex flex-col md:w-1/2 w-full justify-between px-5 py-6">
        <div>
          <h2 className="font-bold text-2xl mb-3">{brand.name}</h2>
          <p>{brand.description}</p>
        </div>
        <div>

          <Link to={brand.url}>
          <button className="border max-font-semibold py-2 px-3 max-w-[90%] md:max-w-[60%]  border-black rounded-xl">
            Explore brand
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
