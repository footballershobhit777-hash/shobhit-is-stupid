// import { useRef } from "react";
// import { LandingSection } from "@/components/LandingSection";
// import { ConfessionSection } from "@/components/ConfessionSection";
// import { AskSection } from "@/components/AskSection";
// import { DatePickerSection } from "@/components/DatePickerSection";
// import { EndingSection } from "@/components/EndingSection";
// import Realization from "@/components/Realization";

// const Index = () => {
//   const confessionRef = useRef<HTMLDivElement>(null);
//   const askRef = useRef<HTMLDivElement>(null);
//   const datePickerRef = useRef<HTMLDivElement>(null);
//   const endingRef = useRef<HTMLDivElement>(null);
//   const roro=useRef<HTMLDivElement>(null);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main className="scroll-smooth">
//       <LandingSection onContinue={() => scrollToSection(roro)} />

//         <div ref={roro}>
//           <Realization/>
//         </div>
      
//       <div ref={confessionRef}>
//         <ConfessionSection />
//       </div>
      
//       <div ref={askRef}>
//         <AskSection onYes={() => scrollToSection(datePickerRef)} />
//       </div>
      
//       <div ref={datePickerRef}>
//         <DatePickerSection onSubmit={() => scrollToSection(endingRef)} />
//       </div>
      
//       <div ref={endingRef}>
//         <EndingSection />
//       </div>
//     </main>
//   );
// };

// export default Index;



import { useRef, useState, useEffect } from "react";
import { LandingSection } from "@/components/LandingSection";
import { ConfessionSection } from "@/components/ConfessionSection";
import { AskSection } from "@/components/AskSection";
import { DatePickerSection } from "@/components/DatePickerSection";
import { EndingSection } from "@/components/EndingSection";
import Realization from "@/components/Realization";

const Index = () => {
  const confessionRef = useRef<HTMLDivElement>(null);
  const askRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLDivElement>(null);
  const roro = useRef<HTMLDivElement>(null);

  const [canScrollDown, setCanScrollDown] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleYes = () => {
    setCanScrollDown(true);
    setTimeout(() => {
      requestAnimationFrame(() => {
        datePickerRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }, 500); // small delay for smooth effect
  };

  // Scroll lock logic
  useEffect(() => {
    const handleScroll = () => {
      if (!canScrollDown && askRef.current) {
        const askBottom = askRef.current.getBoundingClientRect().bottom;
        if (askBottom < window.innerHeight) {
          window.scrollTo({
            top: window.scrollY - (window.innerHeight - askBottom),
            behavior: "instant",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [canScrollDown]);

  return (
    <main className="scroll-smooth">
      <LandingSection onContinue={() => scrollToSection(roro)} />

      <div ref={roro}>
        <Realization />
      </div>

      <div ref={confessionRef}>
        <ConfessionSection />
      </div>

      <div ref={askRef}>
        <AskSection onYes={handleYes} />
      </div>

      {canScrollDown && (
        <>
          <div ref={datePickerRef}>
            <DatePickerSection onSubmit={() => scrollToSection(endingRef)} />
          </div>

          <div ref={endingRef}>
            <EndingSection />
          </div>
        </>
      )}
    </main>
  );
};

export default Index;


