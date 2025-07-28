import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Send,
  Mail,
  MessageCircle,
  Smartphone,
  Store,
} from "lucide-react";
import type {
  SocialLink,
  FooterSection,
  AppDownloadButton,
  ContactMethod,
} from "../app/types/footer";

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
  },
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
    bgColor: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
  },
  {
    name: "Telegram",
    href: "#",
    icon: Send,
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Updates", href: "#" },
      { label: "Account Deletion", href: "#" },
    ],
  },
  {
    title: "Our Centres",
    links: [
      { label: "New Delhi", href: "#" },
      { label: "Patna", href: "#" },
      { label: "Kota", href: "#" },
      { label: "Noida", href: "#" },
      { label: "Dhanbad", href: "#" },
      { label: "Varanasi", href: "#" },
      { label: "View All", href: "#" },
    ],
  },
  {
    title: "Popular Exams",
    links: [
      { label: "IIT JEE", href: "#" },
      { label: "NEET", href: "#" },
      { label: "GATE", href: "#" },
      { label: "Defence", href: "#" },
      { label: "UPSC", href: "#" },
      { label: "School Prep", href: "#" },
    ],
  },
];

export const appDownloadButtons: AppDownloadButton[] = [
  {
    platform: "google",
    subtitle: "GET IT ON",
    title: "Google Play",
    href: "#",
  },
  {
    platform: "apple",
    subtitle: "Download on the",
    title: "App Store",
    href: "#",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email us",
    href: "#",
    icon: Mail,
  },
  {
    label: "Talk to a counsellor",
    href: "#",
    icon: MessageCircle,
  },
];

export const quickLinks = [
  { label: "PW Prerna", href: "#" },
  { label: "PW SIP", href: "#" },
];

export const products = [
  { label: "PW Learning App", href: "#" },
  { label: "PW Offline Payments (Fin-Z)", href: "#" },
];
