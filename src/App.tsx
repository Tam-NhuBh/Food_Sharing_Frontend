import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { AuthContext } from "./context/AuthContext";
import SearchBar from "./components/Search";

function App() {
  // const originalFetch = window.fetch;
  // window.fetch = async (...args) => {
  //   console.log("👉 Fetch called:", args[0]);
  //   try {
  //     const response = await originalFetch(...args);
  //     console.log("✅ Fetch success:", args[0], response);
  //     return response;
  //   } catch (err) {
  //     console.error("❌ Fetch failed:", args[0], err);
  //     throw err;
  //   }
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUserLoading(true);
      if (u) setUser(u);
      else setUser(null);
      setUserLoading(false);
    });
  }, []);

  return (
    <AuthContext value={{ user: user, loading: userLoading }}>
      {/* <main className="min-h-screen w-full">
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </main> */}
      <main className="min-h-screen flex flex-col w-full">
        <Header toggleSearch={() => setToggleSearch(prev => !prev)} isSearchOpen={toggleSearch}/>
        {toggleSearch && <SearchBar/>}  
        <div className="flex-grow flex">
          <Outlet />
        </div>
        <Footer />
      </main>
    </AuthContext>
  );
}

export default App;
