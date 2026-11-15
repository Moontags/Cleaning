"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PageBackground() {
  const pathname = usePathname();

  if (!["/about", "/pricing", "/contact", "/order", "/services"].includes(pathname) && !pathname.startsWith("/services/")) return null;

  return (
    <div className="site-page-background" aria-hidden="true">
      <Image
        src="/images/olohuone.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="site-page-background-overlay" />
    </div>
  );
}
