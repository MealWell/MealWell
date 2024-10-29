import { TypographyH1 } from "@/components/custom/typography/TypographyH1.jsx";
import { gradientClassNames } from "@/styles/gradient.js";

const Title = () => {
  return (
    <div className="w-full flex justify-center items-center mt-5">
      <TypographyH1 className={`${gradientClassNames}`}>MealWell</TypographyH1>
    </div>
  );
};

export default Title;
