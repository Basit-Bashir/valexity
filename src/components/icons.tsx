import {
  Bot,
  Cloud,
  CodeXml,
  Compass,
  Globe,
  Headset,
  MonitorCog,
  Palette,
  PhoneCall,
  Plug,
  Printer,
  RadioTower,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Users,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/services";

const map: Record<IconName | "headset" | "compass" | "zap", LucideIcon> = {
  shield: ShieldCheck,
  server: ServerCog,
  cloud: Cloud,
  printer: Printer,
  cart: ShoppingCart,
  users: Users,
  palette: Palette,
  plug: Plug,
  code: CodeXml,
  phone: PhoneCall,
  wifi: Wifi,
  smartphone: Smartphone,
  monitor: MonitorCog,
  globe: Globe,
  radio: RadioTower,
  bot: Bot,
  headset: Headset,
  compass: Compass,
  zap: Zap,
};

export function Icon({ name, className }: { name: keyof typeof map; className?: string }) {
  const C = map[name];
  return <C aria-hidden className={className} strokeWidth={1.6} />;
}

/** Brand glyphs (lucide v1 no longer ships brand icons). */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
