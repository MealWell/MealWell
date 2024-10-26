import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Milestone1 from "./milestone1/Milestone1";
import Milestone2 from "./milestone2/Milestone2";

const milestones = [
  {
    id: "m1",
    title: "Milestone 1",
    content: Milestone1,
  },
  {
    id: "m2",
    title: "Milestone 2",
    content: Milestone2,
  },
];

const ProjectAccordion = () => {
  // Extragem parametrii din URL
  const getOpenSectionsFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("openSections")?.split(",") || [];
  };
  // Stare pentru acordoanele deschise, inițializată din URL
  const [openSections, setOpenSections] = useState(getOpenSectionsFromURL());
  // Funcția care sincronizează URL-ul cu starea deschiderii/închiderii
  const updateURL = (updatedSections) => {
    const params = new URLSearchParams(window.location.search);
    if (updatedSections.length) {
      params.set("openSections", updatedSections.join(","));
    } else {
      params.delete("openSections");
    }
    // Actualizăm URL-ul fără a reîncărca pagina
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  // Funcția de toggle pentru secțiuni
  const toggleSection = (sectionId) => {
    const isOpen = openSections.includes(sectionId);
    const updatedSections = isOpen
      ? openSections.filter((id) => id !== sectionId)
      : [...openSections, sectionId];

    setOpenSections(updatedSections);
    updateURL(updatedSections);
  };
  return (
    <div className="w-full flex justify-center mt-5">
      <Accordion type="multiple" className="w-3/4" defaultValue={openSections}>
        {milestones.map((milestone) => (
          <AccordionItem key={milestone.id} value={milestone.id}>
            <AccordionTrigger
              className="flex justify-center hover:no-underline"
              onClick={() => toggleSection(milestone.id)}
            >
              <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {milestone.title}
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <milestone.content />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
