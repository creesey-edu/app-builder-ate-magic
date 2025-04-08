
import { TournamentPackage } from "@/types/tournament";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TournamentPackageCardProps {
  pkg: TournamentPackage;
  isSelected: boolean;
  onSelect: () => void;
}

export function TournamentPackageCard({
  pkg,
  isSelected,
  onSelect
}: TournamentPackageCardProps) {
  return (
    <Card 
      className={`relative cursor-pointer transition-all ${
        isSelected 
          ? "ring-2 ring-primary ring-offset-2" 
          : "hover:border-primary/50"
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-bold text-lg">{pkg.name}</h4>
            <p className="text-muted-foreground text-sm">{pkg.description}</p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-xl font-bold">${pkg.price.toFixed(2)}</div>
            {pkg.isPopular && (
              <Badge variant="secondary" className="mt-1">
                Popular Choice
              </Badge>
            )}
          </div>
        </div>
        
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {isSelected && (
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );
}
