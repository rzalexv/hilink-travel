import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-bold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="container flex flex-col w-full gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/assets/img/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="flex flex-col gap-4 text-sm text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="transition-all hover:font-bold">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <p key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <span className="whitespace-nowrap">{link.label}:</span>
                    <Link href="#" className="text-sm font-semibold whitespace-nowrap text-blue-70">
                      {link.value}
                    </Link>
                  </p>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 text-sm text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={`/assets/img/${link}`} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="w-full text-sm text-center text-gray-30">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};
