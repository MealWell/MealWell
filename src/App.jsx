import ProjectAccordion from "./components/custom/ProjectAccordion";
import Title from "./components/custom/Title";
import Footer from "@/components/custom/Footer.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landing";
import ErrorPage from "@/pages/error.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title />
                <ProjectAccordion />
                <div className="mt-auto">
                  <Footer />
                </div>
              </>
            }
            errorElement={<ErrorPage />}
          />
          <Route
            path="/landing"
            element={<LandingPage />}
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
