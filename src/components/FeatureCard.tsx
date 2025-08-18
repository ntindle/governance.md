import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: React.ReactNode;
}

export function FeatureCard({ title, description, icon: Icon, children }: FeatureCardProps) {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-lg transition-all duration-smooth group">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
            <p className="text-muted-foreground mt-2 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>
      {children && (
        <CardContent className="pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
}