import { TypographyH1 } from "@/components/custom/typography/TypographyH1.jsx";
import { ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <div
      className={`w-full h-[20dvh] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-row justify-center items-center rounded-t-2xl space-y-4 mt-10 gap-x-8`}
    >
      <ChefHat className={"size-16 md:size-32"} />
      <TypographyH1>MealWell</TypographyH1>
    </div>
  );
};

export default Footer;
