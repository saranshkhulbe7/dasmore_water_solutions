import Logo from "/logo.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const links = {
    company: ["About Us", "Careers", "Press"],
    resources: ["Blog", "Case Studies", "Webinars"],
    support: ["Contact", "Help Center", "Privacy Policy"],
    legal: ["Terms of Service", "Cookies Policy"],
  };

  return (
    <footer className="border-t border-gray-700 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-10">
        <div className="lg:hidden flex flex-col items-start space-y-6 pb-10">
          <figure className="w-52">
            <img
              src={Logo}
              alt="Dasmore Solutions, LLC"
              className="w-full h-auto"
            />
          </figure>
          <div className="flex space-x-4 pl-4 ">
            <a href="#">
              <Facebook size={24} className="text-white/60" />
            </a>
            <a href="#">
              <Instagram size={24} className="text-white/60" />
            </a>
            <a href="#">
              <img src="/x.png" alt="X (Twitter)" className="h-6 w-auto" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 2xl:gap-x-20 pl-4 lg:pl-0">
          {/* Logo + socials */}
          <div className="hidden lg:flex flex-col items-start space-y-6">
            <figure className="w-44 2xl:w-52">
              <img
                src={Logo}
                alt="Dasmore Solutions, LLC"
                className="w-full h-auto"
              />
            </figure>
            <div className="flex space-x-4">
              <a href="#">
                <Facebook
                  size={24}
                  className="text-white/60 hover:text-white"
                />
              </a>
              <a href="#">
                <Instagram
                  size={24}
                  className="text-white/60 hover:text-white"
                />
              </a>
              <a href="#">
                <img
                  src="/x.png"
                  alt="X (Twitter)"
                  className="h-6 w-auto text-white/60 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {links.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {links.resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {links.support.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {links.legal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
