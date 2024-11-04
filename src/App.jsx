import ProjectAccordion from "./components/custom/ProjectAccordion";
import Title from "./components/custom/Title";
import Footer from "@/components/custom/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Title />
      <ProjectAccordion />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
