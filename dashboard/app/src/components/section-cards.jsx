import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div
  className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

  {/* Faturamento Total */}
  <Card className="@container/card">
    <CardHeader>
      <CardDescription>Faturamento Total</CardDescription>
      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
        R$ 12.500,00
      </CardTitle>
      <CardAction>
        <Badge variant="outline">
          <IconTrendingUp />
          +15%
        </Badge>
      </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        Crescimento este mês <IconTrendingUp className="size-4" />
      </div>
      <div className="text-muted-foreground">
        Comparado com os últimos 6 meses
      </div>
    </CardFooter>
  </Card>

  {/* Novos Clientes */}
  <Card className="@container/card">
    <CardHeader>
      <CardDescription>Novos Clientes</CardDescription>
      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
        87
      </CardTitle>
      <CardAction>
        <Badge variant="outline">
          <IconTrendingUp />
          +8%
        </Badge>
      </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        Mais clientes neste período <IconTrendingUp className="size-4" />
      </div>
      <div className="text-muted-foreground">
        Captação de clientes ativa
      </div>
    </CardFooter>
  </Card>

  {/* Agendamentos Ativos */}
  <Card className="@container/card">
    <CardHeader>
      <CardDescription>Agendamentos Ativos</CardDescription>
      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
        120
      </CardTitle>
      <CardAction>
        <Badge variant="outline">
          <IconTrendingUp />
          +10%
        </Badge>
      </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        Crescimento de reservas <IconTrendingUp className="size-4" />
      </div>
      <div className="text-muted-foreground">
        Mantendo ocupação saudável
      </div>
    </CardFooter>
  </Card>

  {/* Taxa de Crescimento */}
  <Card className="@container/card">
    <CardHeader>
      <CardDescription>Taxa de Crescimento</CardDescription>
      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
        12%
      </CardTitle>
      <CardAction>
        <Badge variant="outline">
          <IconTrendingUp />
          +12%
        </Badge>
      </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        Crescimento consistente <IconTrendingUp className="size-4" />
      </div>
      <div className="text-muted-foreground">
        Alcançando metas do salão
      </div>
    </CardFooter>
  </Card>

</div>

  );
}
