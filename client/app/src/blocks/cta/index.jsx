import { Button } from "@/components/ui/button";

const Cta10 = ({
    heading = "Pronto para um novo visual?",
    description = "Agende seu horário agora e experimente o melhor em cuidados.",
    buttons = {
        primary: {
            text: "Agendar agora",
            url: "/login",
        },
    },
}) => {
    return (
        <section className="">
            <div className="">
                <div className="bg-muted flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
                    <div className="flex-1">
                        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                            {heading}
                        </h3>
                        <p className="text-muted-foreground max-w-xl lg:text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {buttons.secondary && (
                            <Button variant="outline" asChild>
                                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                            </Button>
                        )}
                        {buttons.primary && (
                            <Button asChild variant="default" size="lg">
                                <a href={buttons.primary.url}>{buttons.primary.text}</a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Cta10 };
