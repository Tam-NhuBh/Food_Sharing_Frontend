import { useState } from "react";

export default function ReviewComment() {
    const [rating, setRating] = useState(0);
    const [finalRating, setFinalRating] = useState(0);

    const handleSubmit = () => {

    }
    
    return (
      <div className="relative mb-4 flex flex-col items-end gap-2 w-full">
        <p className="text-gray-800 absolute left-4 top-4">abc@gmail.com</p>
        <textarea className="w-full bg-white border border-gray-300 px-4 pt-10 rounded-lg"></textarea>
        <span className="absolute flex top-4 right-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i + 1 <= rating ? "text-yellow-400" : "fill-gray-200"
              } cursor-pointer`}
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onMouseOver={() => setRating(i + 1)}
              onClick={() => setFinalRating(i + 1)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </span>
        <button className="bg-primary text-white font-medium rounded-lg py-2 px-5 cursor-pointer" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
}