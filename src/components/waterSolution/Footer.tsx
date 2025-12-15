import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { Facebook, Instagram } from "lucide-react";

interface LinkItem {
  name: string;
  href: string;
  external?: boolean;
}

const Footer = () => {
  // centralized link registry
  const links: Record<string, LinkItem[]> = {
    company: [
      { name: "About Us", href: "#about", external: false },
      { name: "Careers", href: "/careers", external: false },
      { name: "Press", href: "/press", external: false },
    ],
    // resources: [
    //   { name: "Blog", href: "/blog", external: false },
    //   { name: "Case Studies", href: "/case-studies", external: false },
    //   { name: "Webinars", href: "/webinars", external: false },
    // ],
    support: [
      {
        name: "Email : info@dasmoresolutions.com",
        href: "",
        external: false,
      },
      {
        name: "Phone : +1 860 655 0095",
        href: "",
        external: false,
      },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy", external: false },
    ],
  };

  const socials: Record<string, string> = {
    facebook: "https://facebook.com/YourPage",
    instagram: "https://instagram.com/YourPage",
    twitter: "https://x.com/YourPage",
  };

  const SmartLink = ({
    href,
    external = false,
    children,
    className,
  }: {
    href: string;
    external?: boolean;
    children: React.ReactNode;
    className?: string;
  }) =>
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    ) : (
      <Link to={href} className={className}>
        {children}
      </Link>
    );

  return (
    <footer className="border-t border-gray-700 bg-black flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-10">
        {/* mobile socials and logo */}
        <div className="lg:hidden flex flex-col items-start space-y-6 pb-10">
          <figure className="w-52">
            <img
              src={Logo}
              alt="Dasmore Solutions, LLC"
              className="w-full h-auto"
            />
          </figure>
          <div className="flex space-x-4 pl-4">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} className="text-white/60 hover:text-white" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="text-white/60 hover:text-white" />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <img
                src="/x.png"
                alt="X (Twitter)"
                className="h-6 w-auto text-white/60 hover:text-white"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 2xl:gap-x-20 pl-4 lg:pl-0">
          {/* desktop logo + socials */}
          <div className="hidden lg:flex flex-col items-start space-y-6">
            <a href="/" className="w-44 2xl:w-52">
              <img
                src={Logo}
                alt="Dasmore Solutions, LLC"
                className="w-full h-auto"
              />
            </a>
            <div className="flex space-x-4">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={24}
                  className="text-white/60 hover:text-white"
                />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={24}
                  className="text-white/60 hover:text-white"
                />
              </a>
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/x.png"
                  alt="X (Twitter)"
                  className="h-6 w-auto text-white/60 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* link sections */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <SmartLink
                      href={item.href}
                      external={item.external}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://www.canvaslabs.world/"
        target="_blank"
        className="text-white text-xl pb-10 font-semibold"
      >
        A Canvas Labs Innovation
      </a>
    </footer>
  );
};

export default Footer;
