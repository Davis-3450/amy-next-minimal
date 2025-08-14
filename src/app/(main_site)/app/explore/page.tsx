import { Metadata } from "next";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ServiceProvidersList } from "@/components/service-providers-list";
import tanstackQueryClient from "@/lib/tanstack-query-client";

export const metadata: Metadata = {
  title: "Explorar proveedores",
  description: "Encuentra y conecta con profesionales de servicios",
};

const categories = [
  "Todas",
  "Belleza y Estética",
  "Salud",
  "Mantenimiento y Hogar",
  "Educación",
  "Bienestar",
  "Tecnología",
  "amongus",
];

// Placeholders
const providers = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Lorem",
    location: "Centro",
    rating: 4.8,
    reviews: 156,
    price: "$$",
    available: true,
    services: ["Corte", "Color", "Tratamientos"],
    image: "/placeholder-salon.jpg",
  },
  {
    id: "2",
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Salud",
    location: "Norte",
    rating: 4.9,
    reviews: 203,
    price: "$$$",
    available: true,
    services: ["Consulta", "Limpieza", "Ortodoncia"],
    image: "/placeholder-dental.jpg",
  },
  {
    id: "3",
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Tecnología",
    location: "Sur",
    rating: 4.6,
    reviews: 89,
    price: "$",
    available: false,
    services: ["Reparaciones", "Soporte", "Mantenimiento"],
    image: "/placeholder-tech.jpg",
  },
  {
    id: "4",
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Bienestar",
    location: "Centro",
    rating: 4.7,
    reviews: 124,
    price: "$$",
    available: true,
    services: ["Yoga", "Meditación", "Terapias"],
    image: "/placeholder-yoga.jpg",
  },
  {
    id: "5",
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Mantenimiento y Hogar",
    location: "Ciudad",
    rating: 4.5,
    reviews: 78,
    price: "$$",
    available: true,
    services: ["Limpieza", "Jardinería", "Reparaciones"],
    image: "/placeholder-home.jpg",
  },
  {
    id: "6",
    name: "Lorem ipsum dolor sit amet",
    description: "Cursos de programación, diseño y marketing digital",
    category: "Educación",
    location: "En línea/Presencial",
    rating: 4.8,
    reviews: 95,
    price: "$$$",
    available: true,
    services: ["Programación", "Diseño", "Marketing"],
    image: "/placeholder-education.jpg",
  },
];

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Explorar negocios</h1>
          <p className="text-muted-foreground">
            Encuentra profesionales calificados para tus necesidades
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por servicio, nombre o ubicación..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <ServiceProvidersList providers={providers} />

      <div className="text-center">
        <Button variant="outline">Cargar más proveedores</Button>
      </div>
    </div>
  );
}
