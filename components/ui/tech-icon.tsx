import {
  SiAngular,
  SiCss,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiReact,
  SiShopify,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  vuedotjs: SiVuedotjs,
  angular: SiAngular,
  nodedotjs: SiNodedotjs,
  nuxtdotjs: SiNuxt,
  nestjs: SiNestjs,
  laravel: SiLaravel,
  php: SiPhp,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  flutter: SiFlutter,
  shopify: SiShopify,
  wordpress: SiWordpress,
  google: SiGoogle,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  git: SiGit,
};

export function TechIcon({ icon, className = "h-6 w-6" }: { icon: string; className?: string }) {
  const Icon = ICONS[icon];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
