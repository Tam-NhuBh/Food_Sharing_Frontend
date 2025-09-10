import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      console.log("👉 Bắt đầu gọi Firebase signup...");
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ User created:", credentials.user);
    } catch (err) {
      console.error("❌ Firebase error:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <input
        type="email"
        placeholder="Email"
        className="border-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
}
