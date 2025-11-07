// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import { cn } from "@/lib/utils";

// interface DatePickerSectionProps {
//   onSubmit: () => void;
// }

// export const DatePickerSection = ({ onSubmit }: DatePickerSectionProps) => {
//   const [date, setDate] = useState<Date>();
//   const [activity, setActivity] = useState<string>("");
//   const [submitted, setSubmitted] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const activities = [
//     { icon: "☕", label: "Coffee", value: "coffee" },
//     { icon: "🎨", label: "Art Museum", value: "museum" },
//     { icon: "🌳", label: "Walk in Park", value: "park" },
//     { icon: "🕌", label: "Monument", value: "monument" },
//   ];

//   const handleSubmit = () => {
//     if (date && activity) {
//       setSubmitted(true);
//       setTimeout(() => {
//         onSubmit();
//       }, 3000);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
//     setMousePosition({ x, y });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-cream overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl"
//           style={{
//             rotateY: mousePosition.x,
//             rotateX: -mousePosition.y,
//           }}
//           transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         >
//           {/* 🌻 */}
//         </motion.div>
//       </div>

//       <div className="relative z-10 w-full max-w-2xl px-6">
//         {!submitted ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
//             onMouseMove={handleMouseMove}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
//               Let's plan our date! ✨
//             </h2>

//             <div className="space-y-8">
//               <div>
//                 <label className="block text-xl font-semibold text-foreground mb-4">
//                   Pick a day:
//                 </label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal text-lg py-6 rounded-xl",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-5 w-5" />
//                       {date ? format(date, "PPP") : <span>Choose a date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={date}
//                       onSelect={setDate}
//                       disabled={(date) => date < new Date()}
//                       initialFocus
//                       className="pointer-events-auto"
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               <div>
//                 <label className="block text-xl font-semibold text-foreground mb-4">
//                   Pick an activity:
//                 </label>
//                 <div className="grid grid-cols-2 gap-4">
//                   {activities.map((act) => (
//                     <Button
//                       key={act.value}
//                       onClick={() => setActivity(act.value)}
//                       variant={activity === act.value ? "default" : "outline"}
//                       className={cn(
//                         "text-lg py-6 rounded-xl transition-all duration-300",
//                         activity === act.value
//                           ? "bg-primary text-primary-foreground scale-105 shadow-lg"
//                           : "hover:scale-105"
//                       )}
//                     >
//                       <span className="mr-2 text-2xl">{act.icon}</span>
//                       {act.label}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <Button
//                 onClick={handleSubmit}
//                 disabled={!date || !activity}
//                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Confirm Date! 💕
//               </Button>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <motion.div
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 0.5, repeat: 3 }}
//               className="text-9xl mb-8"
//             >
//               🌹
//             </motion.div>
//             <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              
//             </h3>
//             <p className="text-2xl md:text-3xl text-muted-foreground">
//               Perfect! It's a date! Now you do have to revert to me on instagram because the questionairre you just filled will take weeks to come over to me (That's just how internet works and I can't do anything about this)💫
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerSectionProps {
  onSubmit: () => void;
}

export const DatePickerSection = ({ onSubmit }: DatePickerSectionProps) => {
  const [date, setDate] = useState<Date>();
  const [activity, setActivity] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timer, setTimer] = useState<number | null>(null);

  const activities = [
    { icon: "☕", label: "Coffee", value: "coffee" },
    { icon: "🎨", label: "Art Museum", value: "museum" },
    { icon: "🌳", label: "Walk in Park", value: "park" },
    { icon: "🕌", label: "Monument", value: "monument" },
  ];

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timer !== null && timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timer === 0) {
      setTimeout(() => {
        onSubmit();
      }, 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleSubmit = () => {
    if (date && activity) {
      setSubmitted(true);
      setTimer(10); // start 10 second countdown
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-cream overflow-hidden">
      {/* Countdown Timer */}
      {submitted && timer !== null && timer >= 0 && (
        <motion.div
          key={timer} // triggers animation each second
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-10 text-5xl font-bold text-foreground"
        >
          ⏳ {timer}s
        </motion.div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl"
          style={{
            rotateY: mousePosition.x,
            rotateX: -mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {/* 🌻 */}
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
            onMouseMove={handleMouseMove}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
              Let's plan our date! ✨
            </h2>

            <div className="space-y-8">
              <div>
                <label className="block text-xl font-semibold text-foreground mb-4">
                  Pick a day:
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal text-lg py-6 rounded-xl",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      {date ? format(date, "PPP") : <span>Choose a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-xl font-semibold text-foreground mb-4">
                  Pick an activity:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {activities.map((act) => (
                    <Button
                      key={act.value}
                      onClick={() => setActivity(act.value)}
                      variant={activity === act.value ? "default" : "outline"}
                      className={cn(
                        "text-lg py-6 rounded-xl transition-all duration-300",
                        activity === act.value
                          ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                          : "hover:scale-105"
                      )}
                    >
                      <span className="mr-2 text-2xl">{act.icon}</span>
                      {act.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!date || !activity}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Date! 💕
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="text-9xl mb-8"
            >
              🌹
            </motion.div>
            <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Yay! 💞
            </h3>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Perfect! It's a date! Now you do have to revert to me on Instagram because
              the questionnaire you just filled will take weeks to come over to me
              (That's just how internet works and I can't do anything about this) 💫
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

