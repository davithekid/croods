"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { name: "Todos os Serviços", value: "todos" },
  { name: "Cortes", value: "cortes" },
  { name: "Barba", value: "barba" },
  { name: "Especiais", value: "especiais" },
];

export default function TabsCategorias() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={'cursor-pointer'}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
