import { gradientClassNames } from "@/styles/gradient";
import { TypographyH3 } from "../typography/TypographyH3";
import { useState } from "react";
import data from "@/data/personas.json";
import Persona from "./Persona";

const Personas = () => {
  const [personas, _] = useState(JSON.parse(JSON.stringify(data)));
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        User Persona
      </TypographyH3>
      <div className="space-y-4">
        {personas.map((obj, index) => (
          <Persona key={index} persona={obj.persona} stories={obj.stories} />
        ))}
      </div>
    </div>
  );
};

export default Personas;
