import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    name: "Dr. Gautham Das",
    role: "Water Safety Expert",
    avatar: "/p1.png",
    quote: "Dasmore’s tech cut our remediation costs by 40%.",
  },
  {
    name: "Stanton Terranova",
    role: "Environmental Law Advisor",
    avatar: "/p2.png",
    quote: "The simplest licensing process we’ve experienced.",
  },
  {
    name: "Araceli Figueroa",
    role: "Hydrology Specialist",
    avatar: "/p3.png",
    quote: "Innovative solutions for modern water challenges.",
  },
  {
    name: "Nikolai Petrov",
    role: "Environmental Engineer",
    avatar: "/p4.png",
    quote: "A game-changer in water safety technology.",
  },
  {
    name: "Nikolai Petrov",
    role: "Environmental Engineer",
    avatar: "/p1.png",
    quote: "A game-changer in water safety technology.",
  },
  {
    name: "Nikolai Petrov",
    role: "Environmental Engineer",
    avatar: "/p2.png",
    quote: "A game-changer in water safety technology.",
  },
  // …add more if you like
];

export default function Leader() {
  const scrollEl = useRef<HTMLDivElement>(null);

  const scroll = (delta: number) => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollBy({ left: delta, behavior: "smooth" });
  };
  return (
    <section className="text-white py-12 2xl:pt-28 px-8">
      <h2 className="text-center text-3xl lg:text-5xl font-bold pb-7">
        Trusted by Leaders in Water Innovation.
      </h2>

      <div className="relative mx-6 md:mx-10 lg:mx-[calc(100%-85vw)]">
        <div
          ref={scrollEl}
          className="
            overflow-x-scroll scroll-pl-4 md:scroll-pl-0
            snap-x snap-mandatory
            flex space-x-4
          "
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                snap-start flex-shrink-0
                bg-gray-800 rounded-lg p-6
                w-[90vw] sm:w-80 md:w-72 lg:w-80
                last:mr-4 md:mr-0
              "
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover mr-3"
                />
                <span>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </span>
              </div>
              <p className="text-gray-200">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* left fade + arrow */}
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <button
          onClick={() => scroll(-300)}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-gray-700 hover:bg-gray-600
            p-2 rounded-full text-white
            z-10 pointer-events-auto
          "
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* right fade + arrow */}
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        <button
          onClick={() => scroll(+300)}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-gray-700 hover:bg-gray-600
            p-2 rounded-full text-white
            z-10 pointer-events-auto
          "
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
