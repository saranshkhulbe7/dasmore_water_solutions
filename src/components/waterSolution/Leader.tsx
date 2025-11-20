import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Edward P. Morrone",
    role: "Chief Executive Officer",
    avatar: "/p2.png",
    quote: [
      "Edward P. Morrone is a distinguished Rhode Island public servant and community leader with a long record of civic and environmental advocacy. A former State Senator representing the coastal district of Westerly and a past President of the Westerly Town Council, Mr. Morrone has dedicated his career to strengthening local governance, advancing sustainable development, and protecting Rhode Island’s coastal and water resources.",
      "With over three decades of experience in public administration, infrastructure planning, and community development, Mr. Morrone has been a consistent voice for transparent governance and environmental responsibility. His leadership on shoreline access, municipal water management, and community resilience has shaped policies that balance public rights with long-term environmental stewardship.",
      "Mr. Morrone brings deep knowledge of state and municipal frameworks, stakeholder engagement, and public–private collaboration. His work bridges government, science, and industry to promote cleaner water systems and healthier communities across New England.",
      "Through his ongoing civic and environmental efforts, Edward Morrone continues to advance a vision of pragmatic sustainability, one rooted in accountability, innovation, and service to the people of Rhode Island.",
    ],
  },
  {
    name: "Dr. Gautham P. Das",
    role: "Founder & Chief Scientific Officer",
    avatar: "/p1.png",
    quote: [
      "Dr. Gautham P. Das is the visionary force behind DasMore Solutions LLC, where innovation, science, and sustainability converge to address today’s most pressing environmental challenges. With over two decades of experience in civil and environmental engineering, Dr. Das is a licensed Professional Engineer and Envision™ Sustainability Professional with recognized expertise in PFAS remediation, resilient infrastructure, and advanced water systems. He is the author of two textbooks and holds two U.S. patents for water filtration technologies.",
      "He is currently writing a third book focused on emerging strategies in PFAS and environmental remediation. Dr. Das is a Full Professor at Wentworth Institute of Technology, where he also serves as Program Director for the Biological, Biomedical, and Civil Engineering programs. As Editor-in-Chief of the BSCES Practice Journal, he connects academic research with real-world engineering practice and advances the field through NSF-supported STEM initiatives.",
      "Through DasMore, Dr. Das is dedicated to delivering sustainable, science-driven solutions that protect communities, advance innovation, and build a cleaner, more resilient future.",
    ],
  },
  {
    name: "Stanton Terranova",
    role: "Chief Strategic Officer",
    avatar: "/p2.png",
    quote: [
      "Stanton Terranova is a New York-based attorney, entrepreneur, and blockchain innovator leading XPOLL at the forefront of decentralized finance and digital governance. A top graduate of the University of Rhode Island and holder of a Juris Doctorate in maritime law, Stanton brings deep expertise in law, business, and real estate.",
      "As the founder of XPOLL and GreatRWB, he has driven the development of platforms that reshape global participation in the Web3 economy. Beyond tech and law, Stanton is also a committed farmer, reflecting his passion for sustainability and innovation across industries.",
    ],
  },
];

export default function Leader() {
  const scrollEl = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    if (!cardRef.current || !scrollEl.current) return;

    const cardWidth = cardRef.current.offsetWidth + 16; // card width + gap
    const delta = direction === "left" ? -cardWidth : cardWidth;

    scrollEl.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const scroll = (delta: number) => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const openModal = (index: number) => {
    setActiveIndex(index);
  };
  const closeModal = () => setActiveIndex(null);

  return (
    <section className="text-white py-12 2xl:pt-28 md:px-8">
      <h2 className="text-center text-3xl lg:text-5xl font-bold pb-7">
        Our Team
      </h2>

      <div className="relative mx-4 md:mx-7 lg:mx-[calc(100%-85vw)]">
        <div
          ref={scrollEl}
          className="overflow-x-auto snap-x snap-mandatory flex space-x-4 px-2 scrollbar-none"
        >
          {testimonials.map((t, i) => {
            const fullText = Array.isArray(t.quote)
              ? t.quote.join(" ")
              : t.quote;

            return (
              <div
                key={i}
                ref={i === 0 ? cardRef : null} // measure first card
                className="
          snap-center flex-shrink-0 bg-gray-800 rounded-lg p-6 
          w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw]
        "
              >
                <div className="flex items-center mb-4">
                  <span>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </span>
                </div>

                <p className="text-gray-200 line-clamp-3">{fullText}</p>

                {fullText.length > 150 && (
                  <button
                    className="mt-2 text-blue-400 hover:underline"
                    onClick={() => openModal(i)}
                  >
                    Read more
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* arrows and fades */}
        <div className="absolute inset-y-0 -left-0.5 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <button
          onClick={() => scrollByCard("left")}
          className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10 pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="absolute inset-y-0 -right-0.5 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        <button
          onClick={() => scrollByCard("right")}
          className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10 pointer-events-auto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal */}
      <Dialog open={activeIndex !== null} onOpenChange={closeModal}>
        <DialogContent className="bg-black border border-gray-700 text-white overflow-y-scroll max-h-[75vh]">
          <DialogHeader>
            <DialogTitle>
              {activeIndex !== null && testimonials[activeIndex].name}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4" />
          </DialogHeader>
          <DialogDescription className="whitespace-pre-wrap">
            {activeIndex !== null &&
            Array.isArray(testimonials[activeIndex].quote)
              ? testimonials[activeIndex].quote.join("\n\n")
              : activeIndex !== null
              ? testimonials[activeIndex].quote
              : ""}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
