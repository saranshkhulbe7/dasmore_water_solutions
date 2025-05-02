import {
  FileStack,
  FileText, // for Our Patents
  Folders, // for Materials Transfer
} from "lucide-react";

const steps = [
  {
    iconSrc: "/access.png",
    title: "Access Our Patented Technology",
  },
  {
    iconSrc: "/collab.png",
    title: "Collaborate with Our Team",
  },
  {
    iconSrc: "/light.png",
    title: "Bring Your Product to Market",
  },
];

// now use Lucide icon components here
const requirements = [
  {
    Icon: FileStack,
    label: "Our Patents",
    href: "#",
  },
  {
    Icon: FileText,
    label: "Non-Exclusive Licensing Agreement",
    href: "#",
  },
  {
    Icon: Folders,
    label: "Materials Transfer Agreement",
    href: "#",
  },
];

export default function Program() {
  return (
    <section className="bg-black text-white py-28 px-6 lg:px-12">
      <div className="max-w-xl sm:max-w-6xl md:max-w-7xl mx-auto text-center">
        <button className="mb-6 px-4 py-1 border border-gray-600 rounded-full text-gray-400 hover:border-gray-500">
          Our process
        </button>
        <h2 className="text-2xl md:text-4xl 2xl:text-[3.56rem] font-semibold mb-12">
          How Our Program Works
        </h2>

        {/* Steps */}
        <div className="grid gap-3 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ iconSrc, title }) => (
            <div
              key={title}
              className="flex items-center text-start bg-[#004AAD] hover:bg-blue-700 transition-colors rounded-lg p-2"
            >
              <img src={iconSrc} className="flex-shrink-0" />
              <span className="text-lg lg:text-[1.75rem] font-medium">
                {title}
              </span>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-16 bg-[#080F17] rounded-lg p-6 text-left flex flex-col lg:flex-row lg:gap-x-5 2xl:gap-x-10">
          <h3 className="text-2xl font-semibold mb-4">
            What You’ll Need to Get Started
          </h3>
          <ul className="grid xs:grid-cols-2 gap-4">
            {requirements.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5 mr-2 flex-shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
