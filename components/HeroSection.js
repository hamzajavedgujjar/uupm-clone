import { ChevronRight } from 'lucide-react';

export default function HeroSection({ title, subtitle, backgroundImage, primaryCTA, secondaryCTA }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slideInUp">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              {primaryCTA}
              <ChevronRight className="ml-2" size={20} />
            </button>
          )}
          {secondaryCTA && (
            <button className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-white/50">
              {secondaryCTA}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
