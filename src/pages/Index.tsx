import { useRef } from "react";
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
  const roro=useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="scroll-smooth">
      <LandingSection onContinue={() => scrollToSection(roro)} />

        <div ref={roro}>
          <Realization/>
        </div>
      
      <div ref={confessionRef}>
        <ConfessionSection />
      </div>
      
      <div ref={askRef}>
        <AskSection onYes={() => scrollToSection(datePickerRef)} />
      </div>
      
      <div ref={datePickerRef}>
        <DatePickerSection onSubmit={() => scrollToSection(endingRef)} />
      </div>
      
      <div ref={endingRef}>
        <EndingSection />
      </div>
    </main>
  );
};

export default Index;



// import { useRef, useState } from "react";
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
//   const roro = useRef<HTMLDivElement>(null);

//   const [showAfterAsk, setShowAfterAsk] = useState(false);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleYes = () => {
//     setShowAfterAsk(true);
//     setTimeout(() => {
//       scrollToSection(datePickerRef);
//     }, 0); // slight delay to ensure rendering happens
//   };

//   return (
//     <main className="scroll-smooth">
//       <LandingSection onContinue={() => scrollToSection(roro)} />

//       <div ref={roro}>
//         <Realization />
//       </div>

//       <div ref={confessionRef}>
//         <ConfessionSection />
//       </div>

//       <div ref={askRef}>
//         <AskSection onYes={handleYes} />
//       </div>

//       {/* Render the remaining sections ONLY after user clicks "Yes" */}
//       {showAfterAsk && (
//         <>
//           <div ref={datePickerRef}>
//             <DatePickerSection onSubmit={() => scrollToSection(endingRef)} />
//           </div>

//           <div ref={endingRef}>
//             <EndingSection />
//           </div>
//         </>
//       )}
//     </main>
//   );
// };

// export default Index;
