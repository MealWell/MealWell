import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMemo } from "react";

const Member = ({ member }) => {
  const fallback = useMemo(() => {
    return member.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, [member.name]);
  return (
    <Card className="w-full">
      <CardHeader className="w-full flex items-center">
        <Avatar className="w-1/3 h-1/3">
          <AvatarImage
            className="object-cover"
            src={member.img}
            alt={member.name}
          />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="space-y-2">
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-md text-gray-500">{member.role}</p>
        <p className="text-md">{member.description}</p>
      </CardContent>
    </Card>
  );
};

export default Member;
