import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TypographyH3 } from "../typography/TypographyH3";
import { TypographyP } from "../typography/TypographyP";
import { gradientClassNames } from "@/styles/gradient";
import { TypographyList } from "../typography/TypographyList";
import { TypographyH4 } from "../typography/TypographyH4";

const Persona = ({ persona, stories }) => {
  return (
    <div className="container py-2 space-y-4">
      <PersonaCard persona={persona} />
      <PersonaStories stories={stories} />
    </div>
  );
};

const PersonaCard = ({ persona }) => {
  return (
    <section className="space-y-6">
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6 pt-6">
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48">
              <AvatarImage src={persona.avatar} alt={persona.name} />
              <AvatarFallback>
                {persona.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-4">
            <div>
              <TypographyH3 className="text-2xl font-semibold">
                {persona.name}
              </TypographyH3>
              <TypographyP className="text-muted-foreground">
                {persona.details.age} ani • {persona.details.location}
              </TypographyP>
            </div>
            <div>
              <TypographyP className="font-medium">
                {persona.details.occupation}
              </TypographyP>
              <TypographyP className="text-sm text-muted-foreground">
                {persona.details.lifestyle}
              </TypographyP>
            </div>
            <div>
              <TypographyP className="font-medium">Hobby</TypographyP>
              <div className="flex gap-2 mt-1">
                {persona.details.hobbies.map((hobby, index) => (
                  <Badge key={index}>{hobby}</Badge>
                ))}
              </div>
            </div>
            <div>
              <TypographyP className="font-medium">Motivație</TypographyP>
              <TypographyList>
                {persona.motivations.map((motivation, index) => (
                  <li key={index}>{motivation}</li>
                ))}
              </TypographyList>
            </div>
            <div>
              <TypographyP className="font-medium">Comportamente</TypographyP>
              <TypographyList>
                {persona.behaviors.map((behavior, index) => (
                  <li key={index}>{behavior}</li>
                ))}
              </TypographyList>
            </div>
            <div>
              <TypographyP className="font-medium">Nevoi</TypographyP>
              <TypographyList>
                {persona.needs.map((need, index) => (
                  <li key={index}>{need}</li>
                ))}
              </TypographyList>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

const PersonaStories = ({ stories }) => {
  return (
    <section className="space-y-6">
      <TypographyH3 className={`${gradientClassNames}`}>
        User Stories
      </TypographyH3>
      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                <strong>Ca un</strong> {story.as_a},
              </TypographyP>
              <TypographyP className="!mt-0">
                <strong>Eu doresc</strong> {story.i_want},
              </TypographyP>
              <TypographyP className="!mt-0">
                <strong>Astfel încât</strong> {story.so_that}.
              </TypographyP>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Persona;
