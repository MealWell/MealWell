import React from "react";
import { TypographyH3 } from "../typography/TypographyH3";
import { gradientClassNames } from "@/styles/gradient";

function FormResults() {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>Rezultate</TypographyH3>
    </div>
  );
}

export default FormResults;
