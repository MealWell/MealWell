import "tailwindcss/tailwind.css";
import { gradientClassNames } from "@/styles/gradient.js";
import { TypographyH3 } from "@/components/custom/typography/TypographyH3.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel.jsx";
import ResponsiveCarouselControls from "@/components/ui/responsive-carousel-controls.jsx";

const results = [
  "form-results/Q1.png",
  "form-results/Q2.png",
  "form-results/Q3.png",
  "form-results/Q4.png",
  "form-results/Q5.png",
  "form-results/Q6.png",
  "form-results/Q7.png",
  "form-results/Q8.png",
];

export default function FormResults() {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>Rezultate</TypographyH3>
      <div className="flex flex-col items-center px-6 xl:px-16">
        <Carousel
          className="max-w-full w-[85%] xl:w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {results.map((result, index) => (
              <CarouselItem
                key={index}
                className="flex xl:h-[32rem] items-center justify-center w-full xl:basis-1/2"
              >
                <img
                  src={result}
                  alt={`result-Q${index + 1}`}
                  className="h-full w-full object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <ResponsiveCarouselControls />
        </Carousel>
      </div>
    </div>
  );
}
