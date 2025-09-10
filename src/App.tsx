import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

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
// };

  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
