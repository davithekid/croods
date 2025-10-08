"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Localization() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold md:text-4xl font-serif mb-8 text-center lg:text-left">
          Nossa Localização
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          
          <Card className="flex-1 shadow-lg border">
            <CardHeader>
              <CardTitle>Barbearia Croods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-sm text-muted-foreground">
                  Rua Juquiá, 1188<br />
                  Vila Eldizia, Santo André<br />
                  CEP: 09210-000
                </p>
              </div>

              <div className="flex items-start gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <p className="text-sm">
                  Seg-Sex: 09:00 - 20:00<br />
                  Sáb: 09:00 - 14:00
                </p>
              </div>

              <div className="flex items-start gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <p className="text-sm">
                  (11) 98765-4321
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 w-full h-64 lg:h-80 rounded-md overflow-hidden border shadow-md">
            <iframe
              title="Mapa da Barbearia Croods"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456!2d-46.5369!3d-23.6512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce2b123456789%3A0xabcdef1234567890!2sRua+Juqui%C3%A1,+1188,+Vila+Eldizia,+Santo+Andr%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1697090000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
