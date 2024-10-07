import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ({ listing }) {
  return (
    <div
      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden 
    rounded-lg w-full sm:w-=[330px]"
    >
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "data:image/jpeg;base64,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"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover 
        hover:scale-105 transition duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-xl font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1 ">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-700 mt-2 font-semibold">
            ${" "}
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/ month"}
          </p>
          <div className="text-slate-700 flex gap-4 ">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
