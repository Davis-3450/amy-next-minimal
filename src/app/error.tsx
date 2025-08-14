"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report or log the error
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center space-y-4">
        <h1 className="text-2xl font-semibold">Algo salió mal</h1>
        <p className="text-muted-foreground">
          Se ha producido un error inesperado. Puedes intentarlo de nuevo o
          volver al inicio.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => reset()}>Intentar de nuevo</Button>
          <Button asChild variant="outline">
            <Link href="/">Ir al inicio</Link>
          </Button>
        </div>
        {error?.message ? (
          <details className="text-left mx-auto max-w-prose text-sm text-muted-foreground">
            <summary className="cursor-pointer select-none">
              Detalles técnicos
            </summary>
            <pre className="mt-2 whitespace-pre-wrap break-words p-3 rounded-md border bg-muted/50">
              {error.message}
              {error.digest ? `\n\nDigest: ${error.digest}` : ""}
            </pre>
          </details>
        ) : null}
      </div>
    </div>
  );
}
