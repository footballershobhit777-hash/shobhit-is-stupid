import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const EndingSection = () => {
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setFloatingHearts(hearts);
  }, []);

  const flowers = ["🌹", "🌺", "🌸", "🌼", "🌻", "🌷"];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-white overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-4xl"
            style={{
              left: `${heart.x}%`,
              bottom: "-10%",
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: 6,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Bouquet bloom effect */}
        <div className="mb-12 relative h-48">
          {flowers.map((flower, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 text-6xl"
              initial={{ scale: 0, x: "-50%", y: "-50%", rotate: 0, opacity: 0 }}
              animate={{
                scale: 1,
                x: `calc(-50% + ${Math.cos((i * 2 * Math.PI) / flowers.length) * 80}px)`,
                y: `calc(-50% + ${Math.sin((i * 2 * Math.PI) / flowers.length) * 80}px)`,
                rotate: (i * 360) / flowers.length,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            >
              {flower}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            I won't be
            <br />
            late this time ❤️
          </h2>
          <p className="text-3xl md:text-4xl text-muted-foreground font-medium">
            {/* See you soon :) */}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 text-6xl"
        >
          💕
        </motion.div>
      </div>
    </section>
  );
};
