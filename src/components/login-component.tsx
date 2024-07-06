'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function LoginComponent() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 text-primary">
      <div className="grid max-w-md grid-cols-1 gap-6 rounded-2xl bg-background/60 p-8 backdrop-blur-md">
        <div className="space-y-2 text-center flex flex-col justify-center items-center">
          <Image
            src="/logo_ibarra.png"
            width={150}
            height={80}
            alt="logo"
          />
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Bienvenido/a</h2>
          <p className="text-muted-foreground">Secure your financial future with our cutting-edge solutions.</p>
        </div>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background/90 focus:bg-background"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password" className="sr-only">
              Contraseña
            </Label>
            <Input
              id="password"
              placeholder="Contraseña"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              className="rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background/90 focus:bg-background"
            />
          </div>
          <Button onClick={(e) => {
            e.preventDefault();
            router.push("/dashboard")
          }} className="w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
            Acceso
          </Button>
        </div>


        <div className="text-center text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  )
}



function PinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}
