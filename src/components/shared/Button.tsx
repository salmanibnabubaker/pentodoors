import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={`
      inline-flex items-center justify-center
      px-7 py-4
      rounded-full
      font-medium
      transition-all duration-300

      ${
        variant === "primary"
          ? "bg-black text-white hover:-translate-y-1 hover:bg-neutral-800"
          : "border border-black hover:bg-black hover:text-white hover:-translate-y-1"
      }
      `}
    >
      {children}
    </Link>
  );
}