import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH4 } from "@/components/custom/typography/TypographyH4.jsx";
import { TypographyList } from "@/components/custom/typography/TypographyList.jsx";

const CustomerSegment = ({ segment }) => {
  return (
    <Card className="w-full">
      <CardHeader className="w-full flex items-center">
        <segment.icon className="text-7xl text-blue-600" />
      </CardHeader>
      <CardContent className="space-y-2">
        <TypographyH4>{segment.segment}</TypographyH4>
        <TypographyList className="ml-0">
          {segment.descrieri.map((descriere) => (
            <li key={descriere}>{descriere}</li>
          ))}
        </TypographyList>
      </CardContent>
    </Card>
  );
};

export default CustomerSegment;
