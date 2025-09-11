import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.error("❌ Firebase error:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center py-20">
      <h2 className="font-lobster text-primary text-lg sm:text-xl md:text-3xl lg:text-5xl mb-3">
        Let's join Nom Nom
      </h2>
      <label
        htmlFor="email"
        className="flex flex-col gap-1 font-medium text-primary"
      >
        Email
        <input
          type="email"
          id="email"
          className="rounded-[20px] border-[1px] border-input-border bg-input w-[20rem] px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        htmlFor="password"
        className="flex flex-col gap-1 font-medium text-primary"
      >
        Password
        <input
          type="password"
          id="password"
          className="rounded-[20px] border-[1px] border-input-border bg-input w-[20rem] px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        onClick={handleClick}
        className="bg-primary text-white font-medium py-2 px-12 rounded-[20px] mt-2 cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
}
