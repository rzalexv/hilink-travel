import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  href: string;
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export const Button = ({ href, title, icon, variant, full }: ButtonProps) => {
  return (
    <Link href={href} className={`flex items-center justify-center gap-3 font-bold transition-colors duration-300 border rounded-full shadow-md cursor-pointer whitespace-nowrap ${variant} ${full ?? "w-full"}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {title}
    </Link>
  );
};
