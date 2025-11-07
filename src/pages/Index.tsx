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



import { useRef, useState } from "react";
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

    // wait a bit for new sections to mount, then scroll
    setTimeout(() => {
      requestAnimationFrame(() => {
        datePickerRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }, 100);
  };

  return (
    <main className="scroll-smooth">
      <LandingSection onContinue={() => scrollToSection(roro)} />

      <div ref={roro}>
        <Realization />
      </div>

      <div ref={confessionRef}>
        <ConfessionSection />
      </div>

      {/* The Ask section */}
      <div ref={askRef}>
        <AskSection onYes={handleYes} />
      </div>

      {/* Render rest of sections only after “Yes” */}
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

      {/* Lock scroll below Ask until “Yes” */}
      {!canScrollDown && (
        <style jsx global>{`
          body,
          html {
            overflow: hidden;
            height: 100%;
          }
        `}</style>
      )}
    </main>
  );
};

export default Index;

