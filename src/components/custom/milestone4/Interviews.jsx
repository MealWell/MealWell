import { Button } from "@/components/ui/button";
import { TypographyH3 } from "../typography/TypographyH3";
import { TypographyP } from "../typography/TypographyP";
import { gradientClassNames } from "@/styles/gradient";
import { useContext, useEffect, useState } from "react";
import { StatesContext } from "../ProjectAccordion";

const Interviews = () => {
  const states = useContext(StatesContext);
  const [shouldScroll, setShouldScroll] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!states.m2InterviewsRef || !states.m2InterviewsRef.current) {
      states.toggleSection("m2");
      setShouldScroll(true);
    } else {
      states.m2InterviewsRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    if (shouldScroll) {
      const interval = setInterval(() => {
        if (states.m2InterviewsRef.current) {
          states.m2InterviewsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          setShouldScroll(false);
          clearInterval(interval);
        }
      }, 200); // Check every 100ms if the ref is set
    }
  }, [shouldScroll, states.m2InterviewsRef]);

  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Interviuri cu potențiali clienți
      </TypographyH3>
      <div className="text-justify space-y-2">
        <TypographyP>
          Echipa noastră a realizat interviuri cu potențiali clienți in cadrul
          milestone-ului 2. Aceste interviuri pot fi vizualizate accesând
          acordionul cu titlul "Milestons 2" in secțiunea "Interviuri cu
          clienți".
        </TypographyP>
        <Button
          onClick={handleClick}
          variant="outline"
          type="button"
          className="w-full md:w-auto"
        >
          Vezi interviurile
        </Button>
      </div>
    </div>
  );
};

export default Interviews;
