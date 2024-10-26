import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CustomerSegment = ({ segment }) => {
  return (
    <Card className="w-full">
      <CardHeader className="w-full flex items-center">
        <segment.icon className="text-8xl text-blue-600" />
      </CardHeader>
      <CardContent className="space-y-2">
        <h2 className="text-xl font-bold">{segment.segment}</h2>
        <ul className="list-disc list-inside">
          {segment.descrieri.map((descriere) => (
            <li key={descriere} className="text-md">
              {descriere}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CustomerSegment;
