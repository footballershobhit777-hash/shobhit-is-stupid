import { motion } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";
import { Button } from "./ui/button";


interface LandingSectionProps {
  onContinue: () => void;
}

export const LandingSection = ({ onContinue }: LandingSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-pink overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 text-8xl"
        >
          🌹
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
        >
          Okay... I might have been
          <br />a little stupid 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 font-bold"
        >
          In my defense I haven't asked any one out ever so I'm not good at this stuff and you going all silent on texts wasn't making it any easier🤷‍♂️
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            ⬇️SCROLL⬇️
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
