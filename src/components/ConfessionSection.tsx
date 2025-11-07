import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ConfessionSection = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-lavender overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: sparkle.id * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-7xl mb-8 inline-block"
          >
            🌻🌼🌷
          </motion.div>
          <motion.div
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-7xl mb-8 inline-block ml-4"
          >
            🌷🌼🌻
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-8"
        >
          You've been on my mind
          <br />
          for some time now.
        </motion.h2>

      <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-4xl md:text-3xl text-secondary-foreground font-medium"
>
  <span className="text-[12rem] inline-block leading-none">🫵</span>

  <br />
</motion.p>
  <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-4xl md:text-3xl text-secondary-foreground font-medium"
>
  <span className="text-[12rem] inline-block leading-none">You're cute and you sing so well!</span>

  <br />
</motion.p>

      </div>
    </section>
  );
};
