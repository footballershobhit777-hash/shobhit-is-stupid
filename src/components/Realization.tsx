import { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function Realization() {
  const [isVisible, setIsVisible] = useState(false);
  const [bloomStage, setBloomStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setBloomStage(1), 500);
          setTimeout(() => setBloomStage(2), 1000);
          setTimeout(() => setBloomStage(3), 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative transition-all duration-1000 ${
            bloomStage >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-64 h-64 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 blur-3xl transition-all duration-1000 ${
              bloomStage >= 2 ? 'scale-150 opacity-40' : 'scale-100 opacity-20'
            }`} />
          </div>

          <div className={`relative transition-all duration-1000 ${
            bloomStage >= 3 ? 'scale-110' : 'scale-100'
          }`}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-20 h-32 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-t from-rose-400 to-pink-300 rounded-full transition-all duration-1000 ${
                    bloomStage >= 2 ? 'scale-y-100 opacity-80' : 'scale-y-0 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
            ))}

            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full transition-all duration-500 ${
              bloomStage >= 3 ? 'scale-100' : 'scale-0'
            }`}>
              <Sparkles className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`max-w-3xl text-center z-10 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-serif text-rose-900 mb-8 leading-tight">
          Its time I change that so here we go
        </h2>

        <p className="text-lg md:text-xl text-rose-700 leading-relaxed font-light mb-6">
          
        </p>

       
      </div>

      <div
  className={`absolute bottom-12 inset-x-0 flex justify-center text-center text-rose-700 text-sm md:text-lg font-light transition-opacity duration-1000 ${
    isVisible ? "opacity-100 animate-bounce" : "opacity-0"
  }`}
>
  <p className="tracking-wide">⬇️ SCROLL ⬇️</p>
</div>
      
    </section>
    
  );
}
