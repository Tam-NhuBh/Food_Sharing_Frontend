import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/config";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
    }
    catch (err) {
      console.log(err)
    }
  };
    return (
      <div className="flex flex-col gap-3 items-center">
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            className="border-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Login</button>
      </div>
    );
}