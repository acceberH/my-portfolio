"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  mobileMenuOpen?: Boolean;
  setMobileMenuOpen?: any;
};

export default function MenuElements({
  className,
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props) {
  const pathname = usePathname();

  const navigation = [
    { name: "Photo Series", href: "/photo-series" },
    { name: "Photography", href: "/photography" },
    { name: "Projects", href: "#" },
    { name: "About", href: "/about" },
  ];
  return (
    <div className={className}>
      {navigation.map((item) => (
        <Button asChild key={item.name} variant="link">
          <Link
            onClick={() => (mobileMenuOpen ? setMobileMenuOpen(false) : "")}
            href={item.href}
            // className={` ${
            //   pathname === item.href ? "underline font-bold" : ""
            // } leading-8 px-4 py-2 items-center underline-offset-8 break-normal inline-block hover:underline ${className}`}
          >
            {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
