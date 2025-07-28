export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  hoverColor: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface AppDownloadButton {
  platform: "google" | "apple";
  subtitle: string;
  title: string;
  href: string;
}

export interface ContactMethod {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
