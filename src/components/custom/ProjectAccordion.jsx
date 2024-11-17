import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createContext, useRef, useState } from "react";
import Milestone1 from "./milestone1/Milestone1";
import Milestone2 from "./milestone2/Milestone2";
import { TypographyH2 } from "@/components/custom/typography/TypographyH2.jsx";
import { gradientClassNames } from "@/styles/gradient.js";
import Milestone3 from "@/components/custom/milestone3/Milestone3.jsx";
import Milestone4 from "./milestone4/Milestone4";

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
  {
    id: "m3",
    title: "Milestone 3",
    content: Milestone3,
  },
  {
    id: "m4",
    title: "Milestone 4",
    content: Milestone4,
  },
];

export const StatesContext = createContext();

const ProjectAccordion = () => {
  const getOpenSectionsFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("openSections")?.split(",") || [];
  };
  const [openSections, setOpenSections] = useState(getOpenSectionsFromURL());

  const updateURL = (updatedSections) => {
    const params = new URLSearchParams(window.location.search);
    if (updatedSections.length) {
      params.set("openSections", updatedSections.join(","));
    } else {
      params.delete("openSections");
    }

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const toggleSection = (sectionId) => {
    const isOpen = openSections.includes(sectionId);
    const updatedSections = isOpen
      ? openSections.filter((id) => id !== sectionId)
      : [...openSections, sectionId];

    setOpenSections(updatedSections);
    updateURL(updatedSections);
  };

  const states = {
    m2InterviewsRef: useRef(),
    toggleSection,
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <StatesContext.Provider value={states}>
        <Accordion type="multiple" className="w-3/4" value={openSections}>
          {milestones.map((milestone) => (
            <AccordionItem key={milestone.id} value={milestone.id}>
              <AccordionTrigger
                className="flex justify-center hover:no-underline"
                onClick={() => toggleSection(milestone.id)}
              >
                <TypographyH2 className={`${gradientClassNames}`}>
                  {milestone.title}
                </TypographyH2>
              </AccordionTrigger>
              <AccordionContent>
                <milestone.content />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </StatesContext.Provider>
    </div>
  );
};

export default ProjectAccordion;
