import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react"

const practiceAreas = [
  { name: "Criminal Defense", href: "/practice-areas/criminal-defense" },
  { name: "DUI Defense", href: "/practice-areas/dui-defense" },
  { name: "Personal Injury", href: "/practice-areas/personal-injury" },
  { name: "Family Law", href: "/practice-areas/family-law" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Attorney", href: "/attorney" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Firm info */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">Anderson Law</span>
            </a>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Providing experienced legal representation to individuals and families 
              throughout Chautauqua County for over 20 years.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold">Practice Areas</h3>
            <ul className="mt-4 space-y-2">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Main Street, Suite 200<br />Jamestown, NY 14701</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(716) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@andersonlaw.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Mon–Fri: 9AM–5PM<br />24/7 Emergency Line</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-background/20 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-background/60">
              © {new Date().getFullYear()} Anderson Law Firm. All rights reserved.
            </p>
            <p className="text-xs text-background/60 leading-relaxed max-w-2xl">
              <strong>Legal Disclaimer:</strong> The information on this website is for general informational purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
