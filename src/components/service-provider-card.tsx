import Link from "next/link";
import { MapPin, Star, Clock, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

//TODO: adapt to the slugs and routes

interface ServiceProvider {
  id: string; //NOTE: we are not sure what we will use for the slug, eg: /business/123 or /business/name-slug
  slug: string;
  name: string;
  description: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  available: boolean;
  services: string[];
  image?: string;
}

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

export function ServiceProviderCard({ provider }: ServiceProviderCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <Users className="h-8 w-8" aria-hidden="true" />
        </div>
        {!provider.available && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">No disponible</Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg leading-tight">
              {provider.name}
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              {provider.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{provider.rating}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              ({provider.reviews} reseñas)
            </p>
          </div>
        </div>
        <CardDescription className="text-sm">
          {provider.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{provider.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">{provider.price}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {provider.services.slice(0, 3).map((service, i) => (
            <Badge
              key={`${service}-${i}`}
              variant="secondary"
              className="text-xs"
              title={service}
            >
              {service}
            </Badge>
          ))}
          {provider.services.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs"
              title={`+${provider.services.length - 3} servicios`}
            >
              +{provider.services.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>
            {provider.available
              ? "Disponible hoy"
              : "Próxima disponibilidad: mañana"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link
              href={`/app/negocios/${provider.slug}`}
              aria-label={`Ver perfil de ${provider.name}`}
            >
              Ver perfil
            </Link>
          </Button>
          <Button
            size="sm"
            className="flex-1"
            disabled={!provider.available}
            asChild={provider.available}
          >
            {provider.available ? (
              <Link
                href={`/app/negocios/${provider.slug}/reservar`}
                aria-label={`Reservar en ${provider.name}`}
              >
                Reservar ahora
              </Link>
            ) : (
              "No disponible"
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
