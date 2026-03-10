import { useEffect, useState } from 'react';

interface TeaserIntroProps {
  onComplete: () => void;
}

export default function TeaserIntro({ onComplete }: TeaserIntroProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 900);
    const timer3 = setTimeout(() => onComplete(), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
      }}
      onClick={onComplete}
    >
      <div className="text-center">
        <div
          className={`transition-all duration-500 ${
            stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div
            className="text-8xl font-bold mb-6"
            style={{
              fontFamily: "'VT323', monospace",
              color: '#f0c040',
              textShadow: '0 0 20px rgba(240, 192, 64, 0.8), 0 0 40px rgba(240, 192, 64, 0.4)',
            }}
          >
            CPR
          </div>
        </div>

        <div
          className={`transition-all duration-500 delay-150 ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div
            className="text-2xl tracking-widest mb-12"
            style={{
              fontFamily: "'VT323', monospace",
              color: '#d4a017',
              textShadow: '0 0 10px rgba(212, 160, 23, 0.6)',
            }}
          >
            COMPUTER PROTOCOL RUNNER
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            stage >= 2 ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <div
            className="text-sm"
            style={{
              fontFamily: "'VT323', monospace",
              color: '#888',
            }}
          >
            
          </div>
        </div>
      </div>
    </div>
  );
}
