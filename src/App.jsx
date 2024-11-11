import ProjectAccordion from "./components/custom/ProjectAccordion";
import Title from "./components/custom/Title";
import Footer from "@/components/custom/Footer.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "@/pages/landing";
import ErrorPage from "@/pages/error.jsx";

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: (
            <>
                <Title />
                <ProjectAccordion />
                <div className="mt-auto">
                    <Footer />
                </div>
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: `${import.meta.env.BASE_URL}landing`,
        element: (
            <LandingPage/>
        ),
        errorElement: <ErrorPage />,
    }
]);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
