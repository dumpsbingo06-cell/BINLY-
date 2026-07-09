import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Binly home">
          <img
            src="/binly-icon.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            decoding="async"
          />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Binly
          </span>
          <span className="hidden rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline">
            BIN Intelligence
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm" aria-label="Primary">
          <Link
            to="/"
            className="rounded-md px-3 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:text-foreground"
            activeOptions={{ exact: true }}
          >
            Lookup
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-3 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
