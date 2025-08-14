import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center space-y-4">
        <h1 className="text-3xl font-semibold">Página no encontrada</h1>
        <p className="text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
