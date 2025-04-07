
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp } from "lucide-react";

interface QuickStatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  icon: LucideIcon;
}

export const QuickStatCard = ({
  title,
  value,
  trend,
  icon: Icon,
}: QuickStatCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            {trend && (
              <p className={`text-xs ${trend.isPositive !== false ? "text-green-600" : "text-red-600"} flex items-center mt-1`}>
                <TrendingUp className="h-3 w-3 mr-1" /> {trend.value}
              </p>
            )}
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};