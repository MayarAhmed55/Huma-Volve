import react from "react";

export default function Card({
     title, 
     description, 
     img, 
     children }) {

  return (
    <div className="bg-pink-100 shadow-md rounded-lg p-4">
      <p className="text-2xl text-blue-950 font-bold my-2">{title}</p>
      <p className="text-gray-600 my-2">{description}</p>
      {img && <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />}
      {children}
    </div>
  );
}
