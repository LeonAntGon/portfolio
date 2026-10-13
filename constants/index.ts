import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiOpenai,
  SiGooglecloud,
  SiMercadopago,
  SiMeta,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative, TbShoppingBag } from "react-icons/tb";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  nameKey?: string;
  noteKey?: string;
};

export type SkillCategory = {
  id: string;
  titleKey: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      {
        name: "React Native",
        icon: TbBrandReactNative,
        color: "#61DAFB",
        noteKey: "reactNative",
      },
    ],
  },
  {
    id: "backend",
    titleKey: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        noteKey: "postgresql",
      },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    id: "ai_integrations",
    titleKey: "ai",
    skills: [
      {
        name: "AI Integrations",
        nameKey: "aiIntegrations",
        icon: SiOpenai,
        color: "#FFFFFF",
        noteKey: "ai",
      },
      {
        name: "Google Cloud OCR",
        nameKey: "gcloudOcr",
        icon: SiGooglecloud,
        color: "#4285F4",
        noteKey: "gcloud",
      },
      {
        name: "Mercado Pago",
        icon: SiMercadopago,
        color: "#00B1EA",
        noteKey: "mercadopago",
      },
      {
        name: "Meta APIs / Social",
        nameKey: "metaApis",
        icon: SiMeta,
        color: "#0866FF",
        noteKey: "meta",
      },
    ],
  },
  {
    id: "tools",
    titleKey: "tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      {
        name: "Tiendanube & Shopify",
        nameKey: "ecommerce",
        icon: TbShoppingBag,
        color: "#95BF47",
        noteKey: "ecommerce",
      },
    ],
  },
];
