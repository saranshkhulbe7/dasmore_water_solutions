import { ScrollToHash } from "@/components/common/scroll-to-hash";
import Navbar from "@/components/waterSolution/Navbar";
import { useEffect, useRef, useState } from "react";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export function ApplicationFooter({ children }: ApplicationLayoutProps) {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      // Get the navbar height when the component mounts
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);
  return (
    <main className="relative bg-black">
      {/* {isModalOpen && <CartModal />} */}
      <ScrollToHash />

      <div className="fixed top-5 left-0 right-0 z-[999] sm:w-[70vw] md:w-[80vw] mx-auto">
        <Navbar />
      </div>
      {/* space */}

      <div
        className="pt-20 lg:pt-16"
        style={{
          marginTop: navbarHeight,
        }}
      >
        {children}
      </div>
    </main>
  );
}
