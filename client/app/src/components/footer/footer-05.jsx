import { Separator } from "@/components/ui/separator";
import { InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "Agendamentos", href: "/agendar" },
  { title: "Serviços", href: "/servicos" },
  { title: "Planos", href: "/planos" },
  { title: "Sobre Nós", href: "/sobre" },
  { title: "Contato", href: "/contato" },
];

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow" /> {/* Mantém footer no fundo da página */}
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-center items-center space-y-6">
            {/* Logo */}
            <div className="block dark:hidden">
              <img src="./logo-dark.svg" className="w-28" alt="Logo" />
            </div>
            <div className="hidden dark:block">
              <img src="./logo.svg" className="w-28" alt="Logo" />
            </div>

            {/* Links do footer */}
            <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Copyright e redes sociais */}
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-4 gap-x-2 px-6 xl:px-0">
            <span className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
              &copy; {new Date().getFullYear()} Barber Shop Croods - Todos os direitos reservados - Desenvolvido por: Davi Chagas
            </span>

            <div className="flex items-center gap-5">
              <Link href="#" target="_blank" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 hover:text-foreground transition-colors" />
              </Link>
              <Link href="#" target="_blank" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
