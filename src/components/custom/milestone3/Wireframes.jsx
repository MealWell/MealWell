import { gradientClassNames } from "@/styles/gradient";
import React from "react";
import { TypographyH3 } from "../typography/TypographyH3";
import ImageCarousel from "@/components/custom/milestone3/WireframesCarousel.jsx";

function Wireframes() {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Wireframes (mockups)
      </TypographyH3>
      <ImageCarousel />
    </div>
  );
}

export default Wireframes;
