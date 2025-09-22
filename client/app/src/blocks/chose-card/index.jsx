"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

export default function PricingCard() {
    return (<>
        <div className="flex flex-col">
            <h1
                className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
                Escolha seu barbeiro
            </h1>
            <div className="flex gap-9 justify-center py-6">

                <Card className="max-w-xs w-full">
                    <CardHeader className="flex flex-col items-center gap-2">
                        <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                            <User className="h-12 w-12 text-muted-foreground" />
                        </div>

                        <CardTitle className="text-xl font-bold text-center">
                            Nome do Barbeiro
                        </CardTitle>
                        <CardDescription className="text-center text-sm text-muted-foreground">
                            Barbeiro Especialista
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="mt-2 flex justify-center">
                        <Button size="lg" className="w-full">
                            Selecionar Barbeiro
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-xs w-full">
                    <CardHeader className="flex flex-col items-center gap-2">
                        <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                            <User className="h-12 w-12 text-muted-foreground" />
                        </div>

                        <CardTitle className="text-xl font-bold text-center">
                            Nome do Barbeiro
                        </CardTitle>
                        <CardDescription className="text-center text-sm text-muted-foreground">
                            Barbeiro Especialista
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="mt-2 flex justify-center">
                        <Button size="lg" className="w-full">
                            Selecionar Barbeiro
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </>
    );
}
