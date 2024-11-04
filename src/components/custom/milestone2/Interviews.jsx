import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "tailwindcss/tailwind.css";
import { Button } from "@/components/ui/button.jsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { gradientClassNames } from "@/styles/gradient.js";
import { TypographyH3 } from "@/components/custom/typography/TypographyH3.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";

const interviews = [
  {
    interviewee: "Liviu",
    picture: "interviews/interviewees/liviu.jpg",
    interviewSrc: "interviews/liviu.MOV",
  },
  {
    interviewee: "Veaceslav",
    picture: "interviews/interviewees/veaceslav.jpg",
    interviewSrc: "interviews/veaceslav.MOV",
  },
  {
    interviewee: "Sample",
    picture: "interviews/interviewees/sample.jpg",
    interviewSrc: "interviews/3.mp4",
  },
];

export default function Interviews() {
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <TypographyH3 className={`${gradientClassNames}`}>
        Interviuri cu clienții
      </TypographyH3>
      <div className={"flex flex-col items-center"}>
        <Carousel
          className="max-w-sm w-full"
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {interviews.map((interview, index) => (
              <CarouselItem key={index} className={""}>
                <div className="flex flex-col max-w-sm items-center">
                  <Avatar className={"size-16 xl:size-24 mb-2"}>
                    <AvatarImage
                      className="object-cover"
                      src={interview.picture}
                      alt={interview.interviewee}
                    />
                    <AvatarFallback>
                      <span className="text-3xl">{interview.interviewee}</span>
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant={
                      selectedInterview === interview ? "primary" : "outline"
                    }
                    onClick={() => setSelectedInterview(interview)}
                    disabled={selectedInterview === interview}
                  >
                    {interview.interviewee}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Intervievatul {current} din {count} (glisează)
        </div>
      </div>

      {/* Videoclipul selectat */}
      {selectedInterview && (
        <div className={"xl:px-32"}>
          <div
            className={"mt-8 flex justify-center aspect-square md:aspect-video"}
          >
            <ReactPlayer
              url={selectedInterview.interviewSrc}
              controls={true}
              playbackRate={1.25}
              width="100%"
              height={"100%"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
