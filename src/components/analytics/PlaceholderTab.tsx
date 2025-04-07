
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderTabProps {
  title: string;
  description: string;
  message: string;
}

export const PlaceholderTab = ({ title, description, message }: PlaceholderTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
          <p className="text-muted-foreground text-sm">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
};