import { ProgressDemo } from "@/components/progress/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const popularServices = [
  { name: "Cabelo básico", value: 33, quantity: "2/5" },
  { name: "Corte + Barba", value: 45, quantity: "3/5" },
  { name: "Luzes", value: 60, quantity: "5/8" },
  { name: "Hidratação Capilar", value: 50, quantity: "4/6" },
  { name: "Pacote Premium", value: 70, quantity: "7/10" },
];

export default function BestServices() {
  return (
    <Card className="w-full rounded-xl border border-muted-foreground/20 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-foreground">
          Serviços mais populares
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground leading-6 space-y-6">
        {popularServices.map((service, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">{service.name}</span>
              <span className="text-xs font-medium text-muted-foreground">{service.quantity}</span>
            </div>
            <ProgressDemo value={service.value} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
