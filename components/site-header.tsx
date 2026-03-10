"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X, Phone } from "lucide-react"

const navigation: { name: string; href: string }[] = []

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Scale className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-bold text-foreground">Anderson Law</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Chautauqua County</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Phone number and CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a 
            href="tel:+17165551234" 
            className="flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5 text-primary" />
            (716) 555-1234
          </a>
          <Button size="sm">Free Consultation</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4">
              <a 
                href="tel:+17165551234" 
                className="flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-5 w-5 text-primary" />
                (716) 555-1234
              </a>
              <Button className="w-full">Free Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
