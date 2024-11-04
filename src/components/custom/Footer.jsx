import { TypographyH1 } from "@/components/custom/typography/TypographyH1.jsx";
import { GiHotMeal } from "react-icons/gi";

const Footer = () => {
  return (
    <div
      className={`w-full h-[20dvh] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-row justify-center items-center rounded-t-2xl space-y-4 mt-10 gap-x-8`}
    >
      <GiHotMeal className={"text-6xl md:text-9xl"} />
      <TypographyH1>MealWell</TypographyH1>
    </div>
  );
};

export default Footer;
