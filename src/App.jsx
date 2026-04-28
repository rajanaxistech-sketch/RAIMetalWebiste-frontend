import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import SecondaryMetalPage from "./pages/SecondaryMetalPage"
import Private from "./pages/Private";

function App() {
  return (
    <BrowserRouter>
          <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories/:categorySlug" element={<CategoryPage />} />
            <Route path="/secondary-metal" element={<SecondaryMetalPage />} />
            <Route path="/private" element={<Private />} />
            <Route
              path="/categories/:categorySlug/:subcategorySlug"
              element={<SubcategoryPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
