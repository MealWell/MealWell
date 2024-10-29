import { TypographyH3 } from "@/components/custom/typography/TypographyH3.jsx";
import { TypographyP } from "@/components/custom/typography/TypographyP.jsx";
import { TypographyList } from "@/components/custom/typography/TypographyList.jsx";
import { gradientClassNames } from "@/styles/gradient.js";

const CustomerDiscoveryPlan = () => {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Plan de Descoperire a Clienților
      </TypographyH3>
      <div className="text-justify space-y-2">
        <TypographyP>
          Planul nostru pentru descoperirea clienților se va concentra pe
          înțelegerea nevoilor și preferințelor potențialilor utilizatori ai
          aplicației. Vrem să identificăm principalele provocări legate de
          alimentația sănătoasă în rândul tinerilor și profesioniștilor ocupați,
          pentru a adapta soluția noastră la cerințele lor.
        </TypographyP>
        <TypographyP>
          Pentru a realiza acest lucru, vom urma acești pași:
        </TypographyP>
        <TypographyList className="my-3">
          <li>
            <strong className="me-2">Interviuri cu utilizatorii:</strong>
            <span>
              Vom organiza interviuri individuale și focus grupuri cu potențiali
              clienți pentru a discuta despre obiceiurile alimentare,
              provocările întâmpinate și preferințele lor în ceea ce privește
              mesele.
            </span>
          </li>
          <li>
            <strong className="me-2">Chestionare online: </strong>
            <span>
              Vom distribui chestionare pentru a colecta date despre obiceiurile
              alimentare, nevoile de livrare și așteptările utilizatorilor față
              de aplicație.
            </span>
          </li>
          <li>
            <strong className="me-2">Observație directă:</strong>
            <span>
              Vom analiza comportamentele alimentare ale studenților și
              angajaților în medii sociale, precum cafenele și campusuri, pentru
              a înțelege mai bine alegerile lor alimentare.
            </span>
          </li>
        </TypographyList>
      </div>
    </div>
  );
};

export default CustomerDiscoveryPlan;
