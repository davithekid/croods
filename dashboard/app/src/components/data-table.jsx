'use client'

import * as React from "react"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconClock,
  IconDotsVertical,
  IconLayoutColumns,
  IconLoader,
  IconTrash,
  IconX,
  IconSearch,
} from "@tabler/icons-react"
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { z } from "zod"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ChartContainer = ({ children, config, className }) => <div className={`w-full ${className}`}>{children}</div>
const ChartTooltip = ({ children }) => <>{children}</>
const ChartTooltipContent = ({ indicator }) => null

import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const useIsMobile = () => {
  if (typeof window === 'undefined') return false
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

export const schema = z.object({
  id: z.number(),
  header: z.string(), // Nome do Cliente
  service: z.string(), // Serviço Detalhado
  type: z.string(), // Tipo de Serviço (Corte, Barba, etc.)
  status: z.enum(["Done", "In Process", "Cancelled"]),
  target: z.string().optional(),
  limit: z.string().optional(),
  price: z.number().optional(),
})

const STATUS_MAP = {
  "Done": {
    label: "Concluído",
    icon: <IconCircleCheckFilled className="size-4 fill-green-500 dark:fill-green-400" />,
    style: "border-green-500 text-green-700 bg-green-50/50 dark:bg-green-900/10",
  },
  "In Process": {
    label: "Agendado",
    icon: <IconClock className="size-4 text-blue-500 dark:text-blue-400" />,
    style: "border-blue-500 text-blue-700 bg-blue-50/50 dark:bg-blue-900/10",
  },
  "Cancelled": {
    label: "Cancelado",
    icon: <IconX className="size-4 text-red-500 dark:text-red-400" />,
    style: "border-red-500 text-red-700 bg-red-50/50 dark:bg-red-900/10",
  },
}

function TableCellViewer({ item }) {
  const isMobile = useIsMobile()

  const localChartConfig = {
    desktop: { label: "Desktop", color: "hsl(var(--primary))" },
    mobile: { label: "Mobile", color: "hsl(var(--secondary))" }
  }
  
  const formatPrice = (price) => {
    if (typeof price !== 'number') return 'N/A'
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  return (
    <Drawer direction={!isMobile ? "right" : "bottom"}>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-foreground w-fit px-0 text-left font-semibold hover:underline">
          {item.header}
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={!isMobile ? "max-w-xl fixed right-0 h-full mt-0 shadow-2xl" : "h-[90vh]"}
      >
        <div className="flex flex-col h-full">
          <DrawerHeader className="gap-1 p-4 border-b">
            <DrawerTitle className="text-2xl">{item.header}</DrawerTitle>
            <DrawerDescription>
              Serviço: {item.service}. Status: {STATUS_MAP[item.status]?.label}
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-6 overflow-y-auto p-6 text-sm flex-1">
            {!isMobile && (
              <>
                <ChartContainer config={localChartConfig} className="min-h-[200px] w-full border rounded-lg p-4 bg-muted/50">
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="dot" />} />
                    <Area
                      dataKey="mobile"
                      type="natural"
                      fill="var(--color-mobile)"
                      fillOpacity={0.7}
                      stroke="var(--color-mobile)"
                      stackId="a"
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.5}
                      stroke="var(--color-desktop)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-green-600 dark:text-green-400">
                    5.2% de aumento neste mês <IconLoader className="size-4 animate-spin text-green-600" />
                  </div>
                  <p className="text-muted-foreground">
                    Notas: Última atualização de status realizada em 10/10/2025.
                  </p>
                </div>
                <Separator />
              </>
            )}
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="header">Cliente</Label>
                <Input id="header" defaultValue={item.header} />
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="service">Serviço Detalhado</Label>
                <Input id="service" defaultValue={item.service} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="type">Tipo (Categoria)</Label>
                  <Select defaultValue={item.type}>
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Corte">Corte</SelectItem>
                      <SelectItem value="Barba">Barba</SelectItem>
                      <SelectItem value="Completo">Completo</SelectItem>
                      <SelectItem value="Tratamento">Tratamento</SelectItem>
                      <SelectItem value="Estética">Estética</SelectItem>
                      <SelectItem value="Coloração">Coloração</SelectItem>
                      <SelectItem value="Cuidado">Cuidado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={item.status}>
                    <SelectTrigger id="status" className="w-full">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Done">Concluído</SelectItem>
                      <SelectItem value="In Process">Agendado</SelectItem>
                      <SelectItem value="Cancelled">Cancelado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="price">Preço</Label>
                  <Input id="price" defaultValue={formatPrice(item.price)} readOnly />
                </div>
              </div>
            </form>
          </div>

          <DrawerFooter className="p-4 border-t flex-row justify-end gap-2">
            <Button variant="outline" className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
              <IconTrash className="size-4" /> Deletar
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
            <Button>Salvar Alterações</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const columns = [
  {
    accessorKey: "header",
    header: "Cliente",
    cell: ({ row }) => <TableCellViewer item={row.original} />,
    enableHiding: false,
  },
  {
    accessorKey: "service",
    header: "Serviço Detalhado",
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {row.original.service}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      const price = row.original.price
      const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price)

      return (
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {formattedPrice}
        </div>
      )
    },
    enableSorting: true,
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-muted-foreground px-2 py-0.5 font-normal">
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusInfo = STATUS_MAP[row.original.status] || STATUS_MAP["In Process"]
      return (
        <Badge
          variant="outline"
          className={`flex items-center gap-1 w-fit px-2 py-0.5 text-xs font-medium border ${statusInfo.style}`}
        >
          {statusInfo.icon}
          {statusInfo.label}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical className="size-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Fazer uma cópia</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600 dark:text-red-400 focus:bg-red-500/10 flex items-center gap-2"
          >
            <IconTrash className="size-4" /> Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

function TableRowComponent({ row }) {
  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      className="hover:bg-muted/50 transition-colors"
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} className="py-3">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

export function DataTable({ data: initialData }) {
  const [data, setData] = React.useState(() => initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [columnFilters, setColumnFilters] = React.useState([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [sorting, setSorting] = React.useState([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <Tabs defaultValue="outline" className="w-full flex-col justify-start gap-6">
      <div className="flex flex-col gap-4 px-4 lg:px-6">
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Filtrar por cliente, serviço ou tipo..."
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="w-full max-w-sm pl-10"
          />
        </div>

        <div className="flex items-center justify-between">
          <Select defaultValue="outline">
            <SelectTrigger className="flex w-fit lg:hidden" size="sm" id="view-selector">
              <SelectValue placeholder="Selecionar Visualização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outline">Todos</SelectItem>
              <SelectItem value="agendado">Agendado</SelectItem>
              <SelectItem value="concluido">Concluído</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>

          <TabsList className="hidden lg:flex">
            <TabsTrigger value="outline">Todos</TabsTrigger>
            <TabsTrigger value="agendado">
              Agendado <Badge variant="secondary" className="ml-1 px-1.5 py-0 font-normal">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="concluido">
              Concluído <Badge variant="secondary" className="ml-1 px-1.5 py-0 font-normal">2</Badge>
            </TabsTrigger>
            <TabsTrigger value="cancelado">Cancelado</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <IconLayoutColumns className="size-4 mr-2" />
                  Colunas
                  <IconChevronDown className="size-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    const headerName = typeof column.columnDef.header === 'string'
                      ? column.columnDef.header
                      : column.id
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                        {headerName}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-xl border shadow-xl">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} colSpan={header.colSpan} className="p-3">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRowComponent key={row.id} row={row} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 py-2 lg:flex-row">
          <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
            {table.getFilteredRowModel().rows.length} linha(s) visível(is).
          </div>
          <div className="flex w-full items-center justify-between gap-4 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Linhas por página
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>{pageSize}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Página {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Primeira página</span>
                <IconChevronsLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Página anterior</span>
                <IconChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Próxima página</span>
                <IconChevronRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Última página</span>
                <IconChevronsRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="agendado" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed bg-gray-50/50 flex items-center justify-center text-muted-foreground">Visualização: Agendado</div>
      </TabsContent>
      <TabsContent value="concluido" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed bg-gray-50/50 flex items-center justify-center text-muted-foreground">Visualização: Concluído</div>
      </TabsContent>
      <TabsContent value="cancelado" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed bg-gray-50/50 flex items-center justify-center text-muted-foreground">Visualização: Cancelado</div>
      </TabsContent>
    </Tabs>
  )
}

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Fev", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Abr", desktop: 73, mobile: 190 },
  { month: "Mai", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const baseData = [
  {
    "id": 1,
    "header": "Cliente João S.",
    "service": "Corte Clássico",
    "type": "Corte",
    "status": "In Process",
    "target": "18",
    "limit": "5",
    "price": 45.00
  },
  {
    "id": 2,
    "header": "Cliente Pedro A.",
    "service": "Barba Desenhada",
    "type": "Barba",
    "status": "Done",
    "target": "29",
    "limit": "24",
    "price": 60.00
  },
  {
    "id": 3,
    "header": "Cliente Carlos R.",
    "service": "Corte + Barba (Completo)",
    "type": "Completo",
    "status": "Done",
    "target": "10",
    "limit": "13",
    "price": 100.00
  },
  {
    "id": 4,
    "header": "Cliente Gabriel M.",
    "service": "Relaxamento Capilar",
    "type": "Tratamento",
    "status": "Done",
    "target": "27",
    "limit": "23",
    "price": 85.00
  },
  {
    "id": 5,
    "header": "Cliente Fernando P.",
    "service": "Design de Sobrancelha",
    "type": "Estética",
    "status": "In Process",
    "target": "2",
    "limit": "16",
    "price": 30.00
  },
  {
    "id": 6,
    "header": "Cliente Rafael N.",
    "service": "Corte Fade",
    "type": "Corte",
    "status": "In Process",
    "target": "20",
    "limit": "8",
    "price": 55.00
  },
  {
    "id": 7,
    "header": "Cliente Lucas D.",
    "service": "Hidratação da Barba",
    "type": "Barba",
    "status": "In Process",
    "target": "19",
    "limit": "21",
    "price": 40.00
  },
  {
    "id": 8,
    "header": "Cliente Mateus V.",
    "service": "Tinta (Retoque de Cor)",
    "type": "Coloração",
    "status": "Done",
    "target": "25",
    "limit": "26",
    "price": 120.00
  },
  {
    "id": 9,
    "header": "Cliente Daniel F.",
    "service": "Corte Infantil",
    "type": "Corte",
    "status": "Done",
    "target": "7",
    "limit": "23",
    "price": 35.00
  },
  {
    "id": 10,
    "header": "Cliente Bruno C.",
    "service": "Progressiva Masculina",
    "type": "Tratamento",
    "status": "Done",
    "target": "30",
    "limit": "28",
    "price": 150.00
  },
  {
    "id": 11,
    "header": "Cliente Marcelo B.",
    "service": "Corte + Barba + Máscara",
    "type": "Completo",
    "status": "Done",
    "target": "9",
    "limit": "31",
    "price": 130.00
  },
  {
    "id": 12,
    "header": "Cliente Thiago L.",
    "service": "Limpeza de Pele",
    "type": "Estética",
    "status": "Done",
    "target": "12",
    "limit": "0",
    "price": 75.00
  },
  {
    "id": 13,
    "header": "Cliente André G.",
    "service": "Pigmentação de Barba",
    "type": "Barba",
    "status": "Done",
    "target": "22",
    "limit": "33",
    "price": 70.00
  },
  {
    "id": 14,
    "header": "Cliente Felipe X.",
    "service": "Lavagem e Secagem",
    "type": "Cuidado",
    "status": "Done",
    "target": "15",
    "limit": "34",
    "price": 25.00
  },
  {
    "id": 15,
    "header": "Cliente Diego H.",
    "service": "Corte Clássico (Ajuste)",
    "type": "Corte",
    "status": "Done",
    "target": "3",
    "limit": "35",
    "price": 40.00
  },
  {
    "id": 16,
    "header": "Cliente Vitor Z.",
    "service": "Massagem Capilar",
    "type": "Tratamento",
    "status": "In Process",
    "target": "6",
    "limit": "36",
    "price": 50.00
  },
  {
    "id": 17,
    "header": "Cliente Guilherme E.",
    "service": "Barba + Design Sobrancelha",
    "type": "Completo",
    "status": "Done",
    "target": "4",
    "limit": "37",
    "price": 85.00
  },
  {
    "id": 18,
    "header": "Cliente Renan L.",
    "service": "Manicure Masculina",
    "type": "Estética",
    "status": "Done",
    "target": "14",
    "limit": "38",
    "price": 40.00
  },
  {
    "id": 19,
    "header": "Cliente Henrique O.",
    "service": "Corte Social",
    "type": "Corte",
    "status": "Done",
    "target": "17",
    "limit": "39",
    "price": 45.00
  },
  {
    "id": 20,
    "header": "Cliente Ricardo P.",
    "service": "Coloração Completa",
    "type": "Coloração",
    "status": "Done",
    "target": "11",
    "limit": "40",
    "price": 140.00
  },
  {
    "id": 21,
    "header": "Cliente Alex J.",
    "service": "Barba Alinhada à Navalha",
    "type": "Barba",
    "status": "In Process",
    "target": "24",
    "limit": "18",
    "price": 65.00
  },
  {
    "id": 22,
    "header": "Cliente Cauã S.",
    "service": "Corte Undercut",
    "type": "Corte",
    "status": "Done",
    "target": "15",
    "limit": "22",
    "price": 50.00
  },
  {
    "id": 23,
    "header": "Cliente Luan K.",
    "service": "Coloração de Mechas",
    "type": "Coloração",
    "status": "In Process",
    "target": "31",
    "limit": "27",
    "price": 180.00
  },
  {
    "id": 24,
    "header": "Cliente Igor M.",
    "service": "Barba Real",
    "type": "Barba",
    "status": "Done",
    "target": "8",
    "limit": "12",
    "price": 70.00
  },
  {
    "id": 25,
    "header": "Cliente Enzo V.",
    "service": "Tratamento Pós-Barba Especial",
    "type": "Cuidado",
    "status": "In Process",
    "target": "19",
    "limit": "25",
    "price": 35.00
  },
  {
    "id": 26,
    "header": "Cliente Pietro G.",
    "service": "Corte Militar",
    "type": "Corte",
    "status": "Done",
    "target": "22",
    "limit": "20",
    "price": 40.00
  },
  {
    "id": 27,
    "header": "Cliente Elias B.",
    "service": "Design de Bigode",
    "type": "Barba",
    "status": "In Process",
    "target": "17",
    "limit": "14",
    "price": 30.00
  },
  {
    "id": 28,
    "header": "Cliente Davi S.",
    "service": "Corte + Tratamento Anticaspa",
    "type": "Completo",
    "status": "Done",
    "target": "26",
    "limit": "30",
    "price": 95.00
  },
  {
    "id": 29,
    "header": "Cliente Otávio Z.",
    "service": "Pé e Mão Masculino",
    "type": "Estética",
    "status": "In Process",
    "target": "10",
    "limit": "15",
    "price": 40.00
  }
]

export default function TableDemo() {
  return <DataTable data={baseData} />
}