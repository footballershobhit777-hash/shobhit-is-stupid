import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

interface AskSectionProps {
  onYes: () => void;
}

export const AskSection = ({ onYes }: AskSectionProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopper, setShowPopper] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const { width, height } = useWindowSize();

  const handleYes = () => {
    setShowConfetti(true);
    setShowPopper(false);
    setIsCelebrating(true);
    setTimeout(() => {
      onYes();
    }, 7000);
  };

  const handleNoHover = () => {
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);
    
    const maxMove = 200;
    const randomX = (Math.random() - 0.5) * maxMove;
    const randomY = (Math.random() - 0.5) * maxMove;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const petals = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={4000} />}
      
      {/* Party Popper Effect */}
      {showPopper && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-9xl"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ 
              scale: [0, 1.5, 1.2],
              rotate: [45, 15, 0],
            }}
            transition={{
              duration: 0.6,
              times: [0, 0.6, 1],
              ease: "easeOut"
            }}
          >
            🎉
          </motion.div>
        </motion.div>
      )}
      
      {/* Falling petals */}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
            }}
            animate={{
              y: height + 100,
              x: [0, Math.sin(i) * 100, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: isCelebrating ? 1 + Math.random() * 1.5 : 5 + Math.random() * 5,
              delay: isCelebrating ? Math.random() * 0.5 : Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Harshal, will you go out on
            <br />
            a date with me?
          </h2>
          <p className="text-2xl text-muted-foreground">💕</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <Button
            onClick={handleYes}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            💖 Yes!
          </Button>

          <motion.div
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              size="lg"
              variant="outline"
              className="px-12 py-6 text-2xl rounded-full border-2 border-muted-foreground hover:border-muted-foreground"
            >
              🤔 {noAttempts > 3 ? "Please? 🥺" : "Hmm..."}
            </Button>
          </motion.div>
        </motion.div>

        {noAttempts > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-muted-foreground mt-8"
          >
            {noAttempts > 5 
              ? "The universe is telling you something... ✨" 
              : "Come on, give it a chance! 😊"}
          </motion.p>
        )}
      </div>
    </section>
  );
};
