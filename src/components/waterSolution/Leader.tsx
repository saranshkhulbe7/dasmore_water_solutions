// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const testimonials = [
//   {
//     name: "Dr. Gautham P. Das",
//     role: "Founder & Chief Scientific Officer",
//     avatar: "/p1.png",
//     quote: [
//       "Dr. Gautham P. Das is the visionary force behind DasMore Solutions LLC, where innovation, science, and sustainability converge to address today’s most pressing environmental challenges. With over two decades of experience in civil and environmental engineering, Dr. Das is a licensed Professional Engineer and Envision™ Sustainability Professional with recognized expertise in PFAS remediation, resilient infrastructure, and advanced water systems. He is the author of two textbooks and holds two U.S. patents for water filtration technologies.",
//       "He is currently writing a third book focused on emerging strategies in PFAS and environmental remediation. Dr. Das is a Full Professor at Wentworth Institute of Technology, where he also serves as Program Director for the Biological, Biomedical, and Civil Engineering programs. As Editor-in-Chief of the BSCES Practice Journal, he connects academic research with real-world engineering practice and advances the field through NSF-supported STEM initiatives.",
//       "Through DasMore, Dr. Das is dedicated to delivering sustainable, science-driven solutions that protect communities, advance innovation, and build a cleaner, more resilient future.",
//     ],
//   },
//   {
//     name: "Stanton Terranova",
//     role: "Chief Strategic Officer",
//     avatar: "/p2.png",
//     quote: [
//       "Stanton Terranova is a New York-based attorney, entrepreneur, and blockchain innovator leading XPOLL at the forefront of decentralized finance and digital governance. A top graduate of the University of Rhode Island and holder of a Juris Doctorate in maritime law, Stanton brings deep expertise in law, business, and real estate.",
//       "As the founder of XPOLL and GreatRWB, he has driven the development of platforms that reshape global participation in the Web3 economy. Beyond tech and law, Stanton is also a committed farmer, reflecting his passion for sustainability and innovation across industries.",
//     ],
//   },
//   {
//     name: "Araceli Figueroa",
//     role: "Hydrology Specialist",
//     avatar: "/p3.png",
//     quote: "Innovative solutions for modern water challenges.",
//   },
//   {
//     name: "Nikolai Petrov",
//     role: "Environmental Engineer",
//     avatar: "/p4.png",
//     quote: "A game-changer in water safety technology.",
//   },
// ];

// export default function Leader() {
//   const scrollEl = useRef<HTMLDivElement>(null);

//   const scroll = (delta: number) => {
//     if (!scrollEl.current) return;
//     scrollEl.current.scrollBy({ left: delta, behavior: "smooth" });
//   };
//   return (
//     <section className="text-white py-12 2xl:pt-28 px-8">
//       <h2 className="text-center text-3xl lg:text-5xl font-bold pb-7">
//         Our Team
//       </h2>

//       <div className="relative mx-6 md:mx-10 lg:mx-[calc(100%-85vw)]">
//         <div
//           ref={scrollEl}
//           className="
//             overflow-x-scroll scroll-pl-4 md:scroll-pl-0
//             snap-x snap-mandatory
//             flex space-x-4
//           "
//         >
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="
//                 snap-start flex-shrink-0
//                 bg-gray-800 rounded-lg p-6
//                 w-[90vw] sm:w-80 md:w-72 lg:w-80
//                 last:mr-4 md:mr-0
//               "
//             >
//               <div className="flex items-center mb-4">
//                 {/* <img
//                   src={t.avatar}
//                   alt={t.name}
//                   className="h-12 w-12 rounded-full object-cover mr-3"
//                 /> */}
//                 <span>
//                   <p className="font-medium">{t.name}</p>
//                   <p className="text-sm text-gray-400">{t.role}</p>
//                 </span>
//               </div>
//               <p className="text-gray-200 line-clamp-3">{t.quote}</p>
//             </div>
//           ))}
//         </div>

//         {/* left fade + arrow */}
//         <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent" />
//         <button
//           onClick={() => scroll(-300)}
//           className="
//             absolute left-2 top-1/2 -translate-y-1/2
//             bg-gray-700 hover:bg-gray-600
//             p-2 rounded-full text-white
//             z-10 pointer-events-auto
//           "
//           aria-label="Scroll left"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* right fade + arrow */}
//         <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent" />
//         <button
//           onClick={() => scroll(+300)}
//           className="
//             absolute right-2 top-1/2 -translate-y-1/2
//             bg-gray-700 hover:bg-gray-600
//             p-2 rounded-full text-white
//             z-10 pointer-events-auto
//           "
//           aria-label="Scroll right"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }
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

  const scroll = (delta: number) => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const openModal = (index: number) => {
    setActiveIndex(index);
  };
  const closeModal = () => setActiveIndex(null);

  return (
    <section className="text-white py-12 2xl:pt-28 px-8">
      <h2 className="text-center text-3xl lg:text-5xl font-bold pb-7">
        Our Team
      </h2>

      <div className="relative mx-6 md:mx-10 lg:mx-[calc(100%-85vw)]">
        <div
          ref={scrollEl}
          className="overflow-x-scroll scroll-pl-4 md:scroll-pl-0 snap-x snap-mandatory flex space-x-4 items-center justify-center"
        >
          {testimonials.map((t, i) => {
            const fullText = Array.isArray(t.quote)
              ? t.quote.join(" ")
              : t.quote;
            return (
              <div
                key={i}
                className="snap-start flex-shrink-0 bg-gray-800 rounded-lg p-6 w-[90vw] sm:w-80 md:w-72 lg:w-80 last:mr-4 md:mr-0"
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
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <button
          onClick={() => scroll(-300)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10 pointer-events-auto"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        <button
          onClick={() => scroll(300)}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10 pointer-events-auto"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal */}
      <Dialog open={activeIndex !== null} onOpenChange={closeModal}>
        <DialogContent className="bg-black border border-gray-800 text-white">
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
