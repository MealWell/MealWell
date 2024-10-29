import { TypographyH3 } from "@/components/custom/typography/TypographyH3.jsx";
import { TypographyP } from "@/components/custom/typography/TypographyP.jsx";
import { gradientClassNames } from "@/styles/gradient.js";

const Solution = () => {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Soluția Propusă
      </TypographyH3>
      <div className="text-justify">
        <TypographyP>
          Considerăm că o soluție eficientă pentru problema alimentației
          sănătoase într-un program aglomerat este dezvoltarea unei aplicații
          care să ofere mese personalizate și livrare la domiciliu. Această
          aplicație ar permite utilizatorilor să aleagă planuri de mese adaptate
          nevoilor și preferințelor lor, inclusiv opțiuni pentru diferite diete,
          cum ar fi cele bogate în proteine, vegetariene sau fără gluten.
        </TypographyP>
      </div>
    </div>
  );
};

export default Solution;
