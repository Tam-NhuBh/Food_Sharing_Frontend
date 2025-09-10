import { useEffect, useState } from "react";
import { hashPassword } from "../../utils";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    fetch("api/users").then(res => res.json())
                      .then(res => console.log(res));
    
  }, [])
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const hashedPassword = await hashPassword(password);
      console.log(hashedPassword);
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