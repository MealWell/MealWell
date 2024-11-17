import { gradientClassNames } from "@/styles/gradient";
import { TypographyH3 } from "../typography/TypographyH3";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ResponsiveCarouselControls from "@/components/ui/responsive-carousel-controls.jsx";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { useEffect, useState } from "react";

const flows = [
  {
    src: "user-flows/user_flow_new_subscription.jpg",
    alt: "New subscription user flow",
    description: "User flow pentru crearea unui nou abonament.",
  },
  {
    src: "user-flows/user_flow_manage_active_subscriptions.jpg",
    alt: "Manage active subscriptions user flow",
    description: "User flow pentru gestionarea abonamentelor active.",
  },
];

const UserFlows = () => {
  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        User Flows
      </TypographyH3>
      <UserFlowCarousel />
    </div>
  );
};

const UserFlowCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="relative">
        <Carousel className="relative" setApi={setApi}>
          <CarouselContent>
            {flows.map((flow, index) => (
              <CarouselItem key={index}>
                <Dialog className="md:max-w-[90dvw] md:max-h-[90dvh]">
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={flow.src}
                          alt={flow.alt}
                          className="object-contain w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className={"max-w-[90%] max-h-[90%] p-0"}>
                    <div className={"max-w-[90vw] max-h-[90vh] p-0"}>
                      <img
                        src={flow.src}
                        alt={flow.alt}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <ResponsiveCarouselControls />
        </Carousel>
      </div>
      <div className="mt-4 text-center p-4 bg-gray-100 rounded-md">
        <p>{flows[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default UserFlows;
