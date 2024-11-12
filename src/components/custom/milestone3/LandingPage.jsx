import { TypographyH3 } from "@/components/custom/typography/TypographyH3";
import { gradientClassNames } from "@/styles/gradient.js";
import { TypographyP } from "@/components/custom/typography/TypographyP.jsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const LandingPage = () => {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Landing page
      </TypographyH3>
      <div className="text-justify space-y-2">
        <TypographyP>
          Vizualizează landing page-ul nostru:{" "}
          {
            <Button asChild variant={"outline"}>
              <Link to={`/landing`}>Landing page</Link>
            </Button>
          }
        </TypographyP>
      </div>
    </div>
  );
};

export default LandingPage;
