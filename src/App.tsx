import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
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
