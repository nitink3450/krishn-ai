import Image from "next/image";
import React from "react";

export default function Card({
  data: {
    id,
    image,
    firstName,
    lastName,
    age,
    gender,
    phone,
    email,
    address: { address, city, state, postalCode },
  },
}: any) {
  return (
    <div className="flex p-5 rounded-xl shadow-xl shadow-gray-700" key={id}>
      <div className="rounded-full shadow-lg shadow-gray-700">
        {image && <Image src={image} alt="" height={200} width={200} />}
      </div>
      <div className="ml-5">
        {firstName && lastName && (
          <p>
            <b>Full Name : </b>
            {`${firstName} ${lastName}`}
          </p>
        )}

        {age && (
          <p>
            <b>Age : </b>
            {age}
          </p>
        )}
        {gender && (
          <p>
            <b>Gender : </b>
            {gender}
          </p>
        )}
        {phone && (
          <p>
            <b>Phone : </b>
            {phone}
          </p>
        )}
        {email && (
          <p>
            <b>Email : </b>
            {email}
          </p>
        )}
        {address && (
          <p>
            <b>Address : </b>
            {address}
          </p>
        )}
        {city && (
          <p>
            <b>City :</b>
            {city}
          </p>
        )}
        {state && (
          <p>
            <b>State :</b>
            {state}
          </p>
        )}
        {postalCode && (
          <p>
            <b>Postal Code :</b>
            {postalCode}
          </p>
        )}
      </div>
    </div>
  );
}
